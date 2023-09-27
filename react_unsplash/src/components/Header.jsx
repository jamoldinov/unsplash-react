import React from "react";
import Uses from "./usex";
// import Navbar from './Navbar'

const Header = ({ children }) => {
  return (
    <div className="bg-gray-800 flex items-center py-10">
      <div className=" align-elements max-w-md mx-auto w-full">
        {/* <Navbar/> */}
        {
          // children.length = 0   ? <Uses/>  : children
          children
       }
      </div>
    </div>
  );
};

export default Header;
