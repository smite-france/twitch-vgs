import React, { useEffect } from "react";
import { Route, Switch } from "react-router";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Button,
  makeStyles,
  createMuiTheme,
  IconButton,
} from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Brightness3Icon from "@material-ui/icons/Brightness3";
import BrightnessHighIcon from "@material-ui/icons/BrightnessHigh";

import TwitchApiService from "./service/TwitchApiService";
import { useStore } from "./context/StoreContext";
import Home from "./views/Home";
import AuthTwitch from "./views/Auth/Twitch";
import { darkTheme, lightTheme } from "./themes";

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
  },
}));

const App = () => {
  const classes = useStyles();

  const {
    twitchToken,
    twitchConnected,
    setTwitchConnected,
    setTwitchLoading,
    setTwitchToken,
    twitchListening,
    setTwitchListening,
    theme,
    setTheme,
  } = useStore();

  // twitch connexion
  useEffect(() => {
    if (twitchToken && !twitchConnected) {
      setTwitchLoading(true);
      TwitchApiService.connect(twitchToken)
        .then(() => {
          setTwitchConnected(true);
          setTwitchLoading(false);
        })
        .catch(() => {
          setTwitchToken("");
          setTwitchConnected(false);
          setTwitchLoading(false);
        });
    }
  }, [
    twitchToken,
    twitchConnected,
    setTwitchConnected,
    setTwitchLoading,
    setTwitchToken,
  ]);

  const onListen = () => {
    setTwitchListening(!twitchListening);
  };

  const onSwitchTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <ThemeProvider
      theme={createMuiTheme(theme === "dark" ? darkTheme : lightTheme)}
    >
      <CssBaseline />
      <AppBar position="static" color="primary" elevation={0}>
        <Toolbar>
          <Typography
            variant="h6"
            color="inherit"
            noWrap
            className={classes.title}
          >
            Twitch VGS by Smite France
          </Typography>
          {twitchConnected && (
            <Button variant="contained" color="default" onClick={onListen}>
              {twitchListening ? "Devenir sourd ..." : "Ecouter le tchat !"}
            </Button>
          )}
          <IconButton aria-label="theme" onClick={onSwitchTheme}>
            {theme === "dark" ? <BrightnessHighIcon /> : <Brightness3Icon />}
          </IconButton>
        </Toolbar>
      </AppBar>
      <Container component="main" style={{ marginTop: 8 }}>
        <Switch>
          <Route path="/auth/twitch">
            <AuthTwitch />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Container>
    </ThemeProvider>
  );
};

export default App;
