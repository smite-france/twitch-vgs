import { ApiClient } from "twitch";
import { StaticAuthProvider } from "twitch-auth";
import { ChatClient } from "twitch-chat-client";
import axios from "axios";

import { TWITCH_AUTH_URL, TWITCH_CLIENT_ID } from "./constants";

class TwitchApiService {
  constructor() {
    this._twitchClient = null;
    this._twitchChatClient = null;
    this._authProvider = null;
  }

  get twitchClient() {
    return this._twitchClient;
  }

  get twitchChatClient() {
    return this._twitchChatClient;
  }

  connect = async (accessToken) => {
    // twitch-auth lib do not throw an Error if token is invalide ...
    // Axios Throw one if unauthorized
    await axios.get("https://id.twitch.tv/oauth2/validate", {
      headers: { Authorization: `OAuth ${accessToken}` },
    });

    this._authProvider = new StaticAuthProvider(TWITCH_CLIENT_ID, accessToken);

    this._twitchClient = new ApiClient({
      authProvider: this._authProvider,
    });

    this._twitchChatClient = new ChatClient(this._authProvider);
    await this._twitchChatClient.connect();
  };

  oauth = () => {
    window.open(TWITCH_AUTH_URL, "_self");
  };
}

// singleton
const twitchApiManager = new TwitchApiService();

export default twitchApiManager;
