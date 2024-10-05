import React, { useContext } from "react";
import { MyContext } from "../contexts/MycontextProvider";

function UserSettings() {
  const { preferences, setPreferences } = useContext(MyContext);
  return (
    <div>
      UserSettings
      <label>
        Theme
        <select
          value={preferences.theme}
          onChange={(e) =>
            setPreferences({ ...preferences, theme: e.target.value })
          }
        >
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </select>
      </label>
      <label>
        Currency
        <select
          value={preferences.currency}
          onChange={(e) =>
            setPreferences({ ...preferences, currency: e.target.value })
          }
        >
          <option value="USD">USD</option>
          <option value="Euro">Euro</option>
        </select>
      </label>
    </div>
  );
}

export default UserSettings;
