import React, { useEffect, useMemo, useState } from "react";
import { Field, Form as FForm } from "react-final-form";
import { size, get, toLower, find, first, sampleSize, isArray } from "lodash";
import axios from "axios";
import { Howl } from "howler";
import {
  Button,
  ButtonGroup,
  TextField,
  Grid,
  Select,
  Slider,
  Typography,
  InputLabel,
} from "@material-ui/core";
import VolumeDown from "@material-ui/icons/VolumeDown";
import VolumeUp from "@material-ui/icons/VolumeUp";

import TwitchApiService from "../../service/TwitchApiService";
import { useStore } from "../../context/StoreContext";
import { DEFAULT_STRUCTURE } from "../../utils/voiceStructure";

const isDev = process.env["NODE_ENV"] === "development";

const Home = () => {
  const {
    channel,
    setChannel,
    voicePack,
    setVoicePack,
    volume,
    setVolume,
    twitchConnected,
    twitchLoading,
    twitchListening,
  } = useStore();

  const [listener, setListener] = useState(undefined);
  const [availableVoicePack, setAvailableVoicePack] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get("/voicepack.json")
      .then(({ data }) => {
        setAvailableVoicePack(data);
        setLoading(false);
      })
      .catch(() => {
        console.error("Whoops");
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (twitchListening) {
      TwitchApiService.twitchChatClient.join(channel).then(() => {
        if (listener) {
          TwitchApiService.twitchChatClient.removeListener(listener);
          setListener(undefined);
        }

        const newListener = TwitchApiService.twitchChatClient.onMessage(
          async (channel, user, message) => {
            const [godR, skinR] = voicePack.split("|");

            const godData = find(availableVoicePack, (i) => i.god === godR);
            const skinData = find(godData.skin, (i) => i.folder === skinR);

            const commands = get(godData, "commands", DEFAULT_STRUCTURE);

            if (
              Object.keys(commands)
                .map((i) => toLower(i))
                .includes(toLower(message))
            ) {
              const folderPath = get(godData, "folder", "VGS");
              const sound = get(commands, message);
              if (sound) {
                let sound_path;
                if (isArray(sound)) {
                  sound_path = `/resources/${folderPath}/${
                    skinData.folder
                  }/${toLower(first(sampleSize(sound, 1)))}`;
                } else {
                  sound_path = `/resources/${folderPath}/${
                    skinData.folder
                  }/${toLower(sound)}`;
                }
                new Howl({
                  autoplay: true,
                  src: [sound_path],
                  volume: volume / 100,
                });
              }
            }
          }
        );
        setListener(newListener);
      });
    } else {
      if (listener) {
        TwitchApiService.twitchChatClient.removeListener(listener);
        setListener(undefined);
      }
    }
  }, [channel, voicePack, volume, twitchListening]);

  const items = useMemo(() => {
    return availableVoicePack.map((i) => {
      if (size(i.skin) === 1) {
        return (
          <option key={i.god} value={`${i.god}|${i.skin[0].folder}`}>
            {i.god}
          </option>
        );
      } else {
        return (
          <optgroup label={i.god}>
            {i.skin.map((j) => (
              <option
                key={`${i.god}|${j.folder}`}
                value={`${i.god}|${j.folder}`}
              >
                {j.name}
              </option>
            ))}
          </optgroup>
        );
      }
    });
  }, [availableVoicePack]);

  const onSubmit = (data) => {
    setChannel(data.channel);
    setVoicePack(data.voicePack);
    setVolume(data.volume);
  };

  if (twitchLoading || loading) {
    return <div>loading ...</div>;
  }

  if (!twitchConnected) {
    return (
      <Button
        onClick={() => {
          TwitchApiService.oauth();
        }}
      >
        Connect to twitch
      </Button>
    );
  }

  if (!size(availableVoicePack)) {
    return <div>Impossible de recuperer les voices packs ...</div>;
  }

  return (
    <Grid container spacing={3}>
      <Grid item md={8}>
        <FForm
          initialValues={{ channel, voicePack, volume }}
          onSubmit={onSubmit}
          render={({ handleSubmit, pristine, form, submitting }) => {
            return (
              <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                  <Grid item sm={12}>
                    <Field name="channel">
                      {({ input }) => (
                        <TextField
                          {...input}
                          fullWidth
                          label="La chaine sur laquelle vous voulez écouter !"
                        />
                      )}
                    </Field>
                  </Grid>
                  <Grid item sm={12}>
                    <Field name="voicePack">
                      {({ input }) => (
                        <>
                          <InputLabel id="simple-select">Voice pack</InputLabel>
                          <Select
                            {...input}
                            native
                            labelId="simple-select"
                            onChange={(e) => {
                              input.onChange(e.target.value);
                            }}
                            fullWidth
                          >
                            {items}
                          </Select>
                        </>
                      )}
                    </Field>
                  </Grid>
                  <Grid item sm={12}>
                    <Field name="volume">
                      {({ input }) => (
                        <>
                          <Typography id="continuous-slider" gutterBottom>
                            Volume
                          </Typography>
                          <Grid container spacing={2}>
                            <Grid item>
                              <VolumeDown />
                            </Grid>
                            <Grid item xs>
                              <Slider
                                {...input}
                                onChange={(e, data) => {
                                  input.onChange(data);
                                }}
                                aria-labelledby="continuous-slider"
                              />
                            </Grid>
                            <Grid item>
                              <VolumeUp />
                            </Grid>
                          </Grid>
                        </>
                      )}
                    </Field>
                  </Grid>
                </Grid>

                <div className="custom-input">
                  <ButtonGroup>
                    <Button
                      variant="contained"
                      type="submit"
                      color="primary"
                      disabled={submitting || pristine}
                    >
                      Enregistrer
                    </Button>
                    <Button
                      variant="contained"
                      onClick={form.reset}
                      disabled={submitting || pristine}
                    >
                      Annuler
                    </Button>
                  </ButtonGroup>
                </div>
              </form>
            );
          }}
        />
      </Grid>
      <Grid item md={4}>
        <iframe
          title="twitch-chat"
          src={`https://www.twitch.tv/embed/${channel}/chat?parent=${
            isDev ? "localhost" : "vgs.smitefrance.fr"
          }`}
          height="600"
          width="100%"
        />
      </Grid>
    </Grid>
  );
};

export default Home;
