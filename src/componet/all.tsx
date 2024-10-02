// import React from 'react'
import Navbar from "./navbar";
import Mytodos from "./mytodos";
// import myTodos from "./mytodos";

const All = () => {
  return (
    <div className="text-black flex justify-center items-center w-full ">
      <div>
        <Navbar />
        <Mytodos />
      </div>
    </div>
  );
};

export default All;
