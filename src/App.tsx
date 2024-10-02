import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../src/componet/navbar";
import Active from "../src/componet/active";
import All from "../src/componet/all";
import Completed from "../src/componet/completd"; // Corrected path
// import image from "../src/assets/premium_photo-1673306778968-5aab577a7365.avif"; // Corrected path

const App: React.FC = () => {
  // Define the inline style object with corrected property names
  // const style: React.CSSProperties = {
  //   backgroundImage: `url(${image})`,
  //   backgroundSize: "cover",
  //   backgroundRepeat: "no-repeat",
  //   backgroundPosition: "center", // Fixed spelling of 'center'
  //   height: "100vh", // Set height to cover the viewport
  //   width: "100%" // Set width to cover the viewport
  // };

  return (
    <Router>
      <div className="relative h-screen w-screen ">
        <div className="relative z-10 flex justify-center items-center text-center text-white h-full w-full p-4 rounded-lg">
          <div className="bg-white text-black p-6 md:p-8 lg:p-10 w-full max-w-xl md:max-w-2xl lg:max-w-3xl">
            <Routes>
              <Route path="/" element={<Navbar />} />
              <Route path="/active" element={<Active />} />
              <Route path="/all" element={<All />} />
              <Route path="/completed" element={<Completed />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
