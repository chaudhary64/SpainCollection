import React from "react";
import { useState } from "react";
import { createContext } from "react";

const Context = (props) => {
  const [state, setState] = useState({
    height: 0,
  });
  return (
    <>
      <Info.Provider value={{ state, setState }}>
        {props.children}
      </Info.Provider>
    </>
  );
};

// Export the context
export const Info = createContext();
export default Context;
