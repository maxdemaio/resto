import React, { useState } from "react";
import MenusDropdown from "./MenusDropdown";
import MenusNormal from "./MenusNormal";

interface IMenusProps {
  lang: string;
}

const Menus: React.FC<IMenusProps> = ({lang}) => {
  return (
    <>
      <div className="md:block hidden">
        <MenusNormal lang={lang} />
      </div>
      <div className="md:hidden block">
        <MenusDropdown lang={lang}/>
      </div>
    </>
  );
};

export default Menus;
