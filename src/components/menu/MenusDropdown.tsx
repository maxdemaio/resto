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

interface IMenusDropdownProps {
  lang: string;
}

const MenusDropdown: React.FC<IMenusDropdownProps> = ({ lang }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("FOOD");
  const [isDropdownOpen, setDropdownOpen] = useState<boolean>(false);

  const handleCategoryClickDropdown = (category: string) => {
    setSelectedCategory(category);
    setDropdownOpen(false); // Close the dropdown after selecting a category
  };

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <section
      id="menus-dropdown"
      className="bg-[#895621] text-white px-3 md:px-[10rem] py-14 md:hidden block"
    >
      <h2 className="font-mantra text-5xl md:text-6xl mb-6 pb-8">Menus</h2>
      <div className="active mb-12">
        <button
          onClick={toggleDropdown}
          className="w-full flex justify-between p-4 font-mantra text-xl md:text-3xl"
        >
          <div className="spacer"></div>
          <div>
            {lang === "fr"
              ? (() => {
                  switch (selectedCategory) {
                    case "FOOD":
                      return "À MANGER";
                    case "DAY DRINKING":
                      return "COCKTAILS MATINAUX";
                    case "COFFEE & MORE":
                      return "CAFÉ & CI";
                    default:
                      return null; // or some default value if none of the cases match
                  }
                })()
              : selectedCategory}
          </div>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={
              isDropdownOpen
                ? "rotate-180 transform transition duration-300"
                : "transition transform duration-300"
            }
          >
            <path d="m18 15-6-6-6 6"></path>
          </svg>
        </button>
        {/* use height manipulation based on the open state */}
        <div
          className={`${
            isDropdownOpen
              ? "max-h-40 opacity-100"
              : "max-h-0 invisible opacity-0"
          } flex flex-col transition-all duration-500 ease-in-out overflow-hidden`}
        >
          {selectedCategory !== "FOOD" && (
            <button
              className="item grow p-4 font-mantra text-xl md:text-3xl basis-0"
              onClick={() => handleCategoryClickDropdown("FOOD")}
            >
              {lang === "en" ? "FOOD" : "À MANGER"}
            </button>
          )}
          {selectedCategory !== "DAY DRINKING" && (
            <button
              className="item grow p-4 font-mantra text-xl md:text-3xl basis-0"
              onClick={() => handleCategoryClickDropdown("DAY DRINKING")}
            >
              {lang === "en" ? "DAY DRINKING" : "COCKTAILS MATINAUX"}
            </button>
          )}
          {selectedCategory !== "COFFEE & MORE" && (
            <button
              className="item grow p-4 font-mantra text-xl md:text-3xl basis-0"
              onClick={() => handleCategoryClickDropdown("COFFEE & MORE")}
            >
              {lang === "en" ? "COFFEE & MORE" : "CAFÉ & CI"}
            </button>
          )}
        </div>
      </div>
      <div>
        {selectedCategory === "FOOD" && (
          <div className="fade-in-menu border-b text-lg mb-8">
            {lang === "en" ? "ALL DAY BRUNCH" : "BRUNCH"}
          </div>
        )}
        {selectedCategory === "FOOD" && <MenuItems menu={lang === "en" ? foodMenu : foodMenuFr}  />}
        {selectedCategory === "DAY DRINKING" && <MenuItems menu={lang === "en" ? drinkMenu : drinkMenuFr}/>}
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
      </div>
    </section>
  );
};

export default MenusDropdown;
