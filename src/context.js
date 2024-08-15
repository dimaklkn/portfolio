import React, { useState, useContext } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [description, setDescription] = useState(null);
  const [picture, setPicture] = useState(null);
  const [title, setTitle] = useState(null);
  const [projectLink, setProjectLink] = useState(null);

  return (
    <AppContext.Provider
      value={{
        description,
        setDescription,
        picture,
        setPicture,
        title,
        setTitle,
        projectLink,
        setProjectLink,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
