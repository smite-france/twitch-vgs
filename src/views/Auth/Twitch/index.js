import { useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";
import queryString from "querystring";

import { useStore } from "../../../context/StoreContext";

export default () => {
  const location = useLocation();
  const history = useHistory();
  const { setTwitchToken } = useStore();

  useEffect(() => {
    // cause hash contain #, we need to remove it !
    const { access_token } = queryString.parse(location.hash.substring(1));
    if (access_token) {
      setTwitchToken(access_token);
    }
    history.push("/");
  }, [location.hash, setTwitchToken, history]);

  return null;
};
