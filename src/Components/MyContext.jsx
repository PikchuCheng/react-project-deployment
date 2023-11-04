import React, { useState, useContext, createContext } from "react";

const MyContext = createContext();

const Context = ({ children }) => {
  const [selectedItem, setselectedItem] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);


  const handleSelectedItem = (item) => {
    setselectedItem(item);
    setIsModalOpen(true)
    console.log("you clicked the button !", item);
  };

  return (
    <MyContext.Provider value={{ handleSelectedItem, selectedItem, setselectedItem, isModalOpen, setIsModalOpen }}>
      {children}
    </MyContext.Provider>
  );
};

const useMyContext = () => {
  return useContext(MyContext);
};

export { Context, useMyContext };