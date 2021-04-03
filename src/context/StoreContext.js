import React, { createContext, useContext, useState } from "react";
import { useLocalStorage } from "../utils/useLocalStorage";

const StoreContext = createContext(undefined);

export const StoreProvider = ({ children }) => {
  const [theme, setTheme] = useLocalStorage("theme", "dark");
  const [voicePack, setVoicePack] = useLocalStorage(
    "voicePack",
    "default|vgs_default"
  );
  const [channel, setChannel] = useLocalStorage("channel", "evandikt");
  const [volume, setVolume] = useLocalStorage("volume", "80");
  const [loading, setLoading] = useState(false);

  const [twitchToken, setTwitchToken] = useLocalStorage("twitchToken");
  const [twitchConnected, setTwitchConnected] = useState(false);
  const [twitchLoading, setTwitchLoading] = useState(false);
  const [twitchListening, setTwitchListening] = useState(false);

  return (
    <StoreContext.Provider
      value={{
        voicePack,
        setVoicePack,
        channel,
        setChannel,
        twitchToken,
        setTwitchToken,
        twitchConnected,
        setTwitchConnected,
        loading,
        setLoading,
        twitchLoading,
        setTwitchLoading,
        twitchListening,
        setTwitchListening,
        volume,
        setVolume,
        theme,
        setTheme,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => useContext(StoreContext);
