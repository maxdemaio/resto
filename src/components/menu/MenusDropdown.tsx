import React, { useState } from "react";
import MenuItems from "./MenuItems";
import { drinkMenu, foodMenu, moreMenu } from "./allMenus";

const MenusDropdown: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("FOOD");
  const [isDropdownOpen, setDropdownOpen] = useState<boolean>(false);

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
    setDropdownOpen(false); // Close the dropdown after selecting a category
  };

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <section
      id="menus"
      className="bg-[#895621] text-white px-3 md:px-[10rem] py-14"
    >
      <h2 className="font-mantra text-5xl md:text-6xl mb-6">Menus test</h2>
      <div className="active">
        <button
          onClick={toggleDropdown}
          className="w-full p-4 font-mantra text-xl md:text-3xl"
        >
          {selectedCategory.toUpperCase()}{" "}
          <span className="arrow">{isDropdownOpen ? "▲" : "▼"}</span>
        </button>
        {/* use height manipulation based on the open state */}
        {isDropdownOpen && (
          <div className="flex flex-col">
            {selectedCategory !== "FOOD" && (
              <button
                className="item grow p-4 font-mantra text-xl md:text-3xl basis-0"
                onClick={() => handleCategoryClick("FOOD")}
              >
                FOOD
              </button>
            )}
            {selectedCategory !== "DAY DRINKING" && (
              <button
                className="item grow p-4 font-mantra text-xl md:text-3xl basis-0"
                onClick={() => handleCategoryClick("DAY DRINKING")}
              >
                DAY DRINKING
              </button>
            )}
            {selectedCategory !== "COFFEE & MORE" && (
              <button
                className="item grow p-4 font-mantra text-xl md:text-3xl basis-0"
                onClick={() => handleCategoryClick("COFFEE & MORE")}
              >
                COFFEE & MORE
              </button>
            )}
          </div>
        )}
      </div>
      <div>
        {selectedCategory === "FOOD" && (
          <div className="fade-in-menu border-b text-lg mb-8">
            ALL DAY BRUNCH
          </div>
        )}
        {selectedCategory === "FOOD" && <MenuItems menu={foodMenu} />}
        {selectedCategory === "DAY DRINKING" && <MenuItems menu={drinkMenu} />}
        {selectedCategory === "COFFEE & MORE" && <MenuItems menu={moreMenu} />}
      </div>
    </section>
  );
};

export default MenusDropdown;
