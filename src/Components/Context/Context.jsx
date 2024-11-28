import React from "react";
import { useState } from "react";
import { createContext } from "react";

const Context = (props) => {
  const [state, setState] = useState({
    height: 0,
  });
  return (
    <>
      <NavInfo.Provider value={{ state, setState }}>
        {props.children}
      </NavInfo.Provider>
    </>
  );
};

// Export the context
export const NavInfo = createContext();
export default Context;
