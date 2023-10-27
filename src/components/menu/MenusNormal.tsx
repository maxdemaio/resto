import React, { useState } from "react";
import MenuItems from "./MenuItems";
import { drinkMenu, foodMenu, moreMenu } from "./allMenus";

const Menus: React.FC = () => {
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
      <h2 className="font-mantra text-5xl md:text-6xl mb-6">Menus</h2>
      <div className="flex items-stretch justify-between w-full border-b mb-16">
        <button
          onClick={() => handleCategoryClick("FOOD")}
          className={`item grow p-4 font-mantra text-xl md:text-3xl basis-0 ${isButtonActive(
            "FOOD",
          )}`}
        >
          FOOD
        </button>
        <button
          onClick={() => handleCategoryClick("DAY DRINKING")}
          className={`item grow p-4 font-mantra text-xl md:text-3xl basis-0 ${isButtonActive(
            "DAY DRINKING",
          )}`}
        >
          DAY DRINKING
        </button>
        <button
          onClick={() => handleCategoryClick("COFFEE & MORE")}
          className={`item grow p-4 font-mantra text-xl md:text-3xl basis-0 ${isButtonActive(
            "COFFEE & MORE",
          )}`}
        >
          COFFEE & MORE
        </button>
      </div>
      <div>
        {selectedCategory === "FOOD" && (
          <div className="fade-in-menu border-b text-lg mb-8">
            ALL DAY BRUNCH
          </div>
        )}
        {selectedCategory === "FOOD" && <MenuItems menu={foodMenu} />}
        {selectedCategory === "DRINKS" && <MenuItems menu={drinkMenu} />}
        {selectedCategory === "COFFEE & MORE" && <MenuItems menu={moreMenu} />}
      </div>
    </section>
  );
};

export default Menus;
