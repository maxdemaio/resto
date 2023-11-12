import React, { useState } from "react";

import MenuItems from "./MenuItems";
import {
  drinkMenu,
  foodMenu,
  moreMenu,
  pastryMenu,
  sidesMenu,
  drinkMenuFr,
  foodMenuFr,
  moreMenuFr,
  pastryMenuFr,
  sidesMenuFr,
} from "./allMenus";

interface IMenusNormalProps {
  lang: string;
}

const MenusNormal: React.FC<IMenusNormalProps> = ({ lang }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("FOOD");

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
  };

  const isButtonActive = (category: string) => {
    return selectedCategory === category ? "active" : "hoverable";
  };

  return (
    <section
      id="menus"
      className="bg-[#895621] text-white px-3 md:px-[10rem] py-14 md:block hidden"
    >
      <h2 className="font-mantra text-5xl md:text-6xl mb-6 pb-8">Menus</h2>
      <div className="flex items-stretch justify-between w-full border-b mb-12">
        <button
          onClick={() => handleCategoryClick("FOOD")}
          className={`item grow p-4 font-mantra text-xl md:text-3xl basis-0 ${isButtonActive(
            "FOOD"
          )}`}
        >
          {lang === "en" ? "FOOD" : "À MANGER"}
        </button>
        <button
          onClick={() => handleCategoryClick("DAY DRINKING")}
          className={`item grow p-4 font-mantra text-xl md:text-3xl basis-0 ${isButtonActive(
            "DAY DRINKING"
          )}`}
        >
          {lang === "en" ? "DAY DRINKING" : "COCKTAILS MATINAUX"}
        </button>
        <button
          onClick={() => handleCategoryClick("COFFEE & MORE")}
          className={`item grow p-4 font-mantra text-xl md:text-3xl basis-0 ${isButtonActive(
            "COFFEE & MORE"
          )}`}
        >
          {lang === "en" ? "COFFEE & MORE" : "CAFÉ & CI"}
        </button>
      </div>
      <div>
        {selectedCategory === "FOOD" && (
          <div className="fade-in-menu border-b text-lg mb-8">
            {lang === "en" ? "ALL DAY BRUNCH" : "BRUNCH"}
          </div>
        )}
        {selectedCategory === "FOOD" && <MenuItems menu={lang === "en" ? foodMenu : foodMenuFr} />}
        {selectedCategory === "DAY DRINKING" && <MenuItems menu={lang === "en" ? drinkMenu : drinkMenuFr} />}
        {selectedCategory === "COFFEE & MORE" && <MenuItems menu={lang === "en" ? moreMenu : moreMenuFr} />}
        {selectedCategory === "FOOD" && (
          <>
            <div className="fade-in-menu border-b text-lg pt-6 mb-8">
              {lang === "en" ? "SIDES" : "À CÔTÉ"}
            </div>
            <MenuItems menu={lang === "en" ? sidesMenu : sidesMenuFr} />
            <div className="fade-in-menu border-b text-lg pt-6 mb-8">
              {lang === "en" ? "PASTRIES" : "PÂTISSERIES"}
            </div>
            <MenuItems menu={lang === "en" ? pastryMenu : pastryMenuFr} />
          </>
        )}
        {selectedCategory === "DAY DRINKING" && (
          <div className="pt-6 mb-8">
            {lang === "en"
              ? "*Our natural wine offering is ever evolving and available upon request at the restaurant."
              : "*Notre sélection de vins natures évolue constamment, consultez-la sur demande en restaurant."}
          </div>
        )}
      </div>
    </section>
  );
};

export default MenusNormal;
