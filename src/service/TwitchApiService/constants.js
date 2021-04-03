export const TWITCH_CLIENT_ID = process.env.REACT_APP_TWITCH_CLIENT_ID;
export const TWITCH_CLIENT_URL = process.env.REACT_APP_TWITCH_CLIENT_URL;
export const TWITCH_CLIENT_SCOPE = ["chat:read", "chat:edit"];

export const TWITCH_AUTH_URL = `https://id.twitch.tv/oauth2/authorize?client_id=${TWITCH_CLIENT_ID}&redirect_uri=${TWITCH_CLIENT_URL}&response_type=token&scope=${TWITCH_CLIENT_SCOPE.join(
  "+"
)}`;
