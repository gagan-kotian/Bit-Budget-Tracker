import React, { createContext, useState } from "react";

export const MyContext = createContext();

function MycontextProvider({ children }) {
  const [preferences, setPreferences] = useState({
    theme: "light",
    currency: "USD",
  });
  return (
    <div>
      <MyContext.Provider value={{ preferences, setPreferences }}>
        {children}
      </MyContext.Provider>
    </div>
  );
}

export default MycontextProvider;
