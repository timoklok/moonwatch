import React, { useState } from "react";

export const BackgroundContext = React.createContext();

export const BackgroundProvider = (props) => {
  const [imageNumber, setImageNumber] = useState(0);

  return (
    <BackgroundContext.Provider value={{ imageNumber, setImageNumber }}>
      {props.children}
    </BackgroundContext.Provider>
  );
};
