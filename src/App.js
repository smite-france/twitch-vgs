import React, {useEffect} from "react";
import {Route, Switch} from "react-router";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Button,
  makeStyles,
  createMuiTheme,
  IconButton, Link,
} from "@material-ui/core";
import {ThemeProvider} from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Brightness3Icon from "@material-ui/icons/Brightness3";
import BrightnessHighIcon from "@material-ui/icons/BrightnessHigh";
import FavoriteIcon from '@material-ui/icons/Favorite';
import GitHubIcon from '@material-ui/icons/GitHub';

import TwitchApiService from "./service/TwitchApiService";
import {useStore} from "./context/StoreContext";
import Home from "./views/Home";
import AuthTwitch from "./views/Auth/Twitch";
import {darkTheme, lightTheme} from "./themes";

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
      <CssBaseline/>
      <AppBar position="static" color="primary" elevation={0}>
        <Toolbar>
          <Typography
            variant="h6"
            color="inherit"
            noWrap
            className={classes.title}
          >
            Twitch VGS by <Link href="https://www.smitefrance.fr/" target="_blank" style={{ color: "white" }}>Smite France</Link>
          </Typography>
          {twitchConnected && (
            <Button variant="contained" color="default" onClick={onListen}>
              {twitchListening ? "Disable VGS sound ..." : "Enable VGS sound !"}
            </Button>
          )}
          <IconButton aria-label="theme" onClick={onSwitchTheme}>
            {theme === "dark" ? <BrightnessHighIcon/> : <Brightness3Icon/>}
          </IconButton>
        </Toolbar>
      </AppBar>
      <Container component="main" style={{marginTop: 8}}>
        <Switch>
          <Route path="/auth/twitch">
            <AuthTwitch/>
          </Route>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
      </Container>
      <Container component="footer" style={{display: 'flex'}}>
        <Typography variant="body1">
          Made with <FavoriteIcon style={{color: "red"}}/> by <Link href="https://github.com/evandikt"
                                                                    target="_blank">Evandikt</Link>
        </Typography>
        <Typography variant="body1">
          &nbsp;<Link href="https://github.com/evandikt/smite-france-twitch-vgs" target="_blank"><GitHubIcon/></Link>
        </Typography>
      </Container>
    </ThemeProvider>
  );
};

export default App;
