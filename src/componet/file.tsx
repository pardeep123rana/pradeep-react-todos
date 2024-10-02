import React from "react";
import { IoRoseSharp } from "react-icons/io5";

const File: React.FC = () => {
  return (
    <div className="w-full flex flex-col sm:flex-row items-center sm:justify-between p-4 space-y-4 sm:space-y-0 bg-white rounded-lg shadow-md">
      <div className="flex items-center space-x-2">
        <IoRoseSharp className="text-2xl" />
      </div>
      <h1 className="text-xl sm:text-2xl text-center">
        Simple project in <span className="font-semibold">TypeScript</span>
      </h1>
      <div className="flex items-center space-x-2">
        <IoRoseSharp className="text-2xl" />
      </div>
    </div>
  );
};

export default File;
