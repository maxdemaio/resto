import React, { useState } from "react";
import MenusDropdown from "./MenusDropdown";
import MenusNormal from "./MenusNormal";

const Menus: React.FC = () => {
  return (
    <>
      <div className="md:block hidden">
        <MenusNormal />
      </div>
      <div className="md:hidden block">
        <MenusDropdown />
      </div>
    </>
  );
};

export default Menus;
