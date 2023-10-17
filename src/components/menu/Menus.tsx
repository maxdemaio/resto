import React, { useState } from 'react';
import MenuItems from './MenuItems';
import { drinkMenu, foodMenu, moreMenu } from './allMenus';

const Menus: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Food');

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
  };

  return (
      <section id="menus" className="bg-[#895621] text-white px-3 md:px-[10rem] py-14">
        <h2 className="font-mantra text-5xl md:text-6xl mb-6">Menus</h2>
        <div
          className="flex items-center gap-2 justify-between w-full border-b pb-4 mb-16"
        >
          <h3 onClick={() => handleCategoryClick('Food')} className="font-mantra text-xl md:text-3xl basis-0">FOOD</h3>
          <h3 onClick={() => handleCategoryClick('Drinks')} className="font-mantra text-xl md:text-3xl basis-0">DAY DRINKING</h3>
          <h3 onClick={() => handleCategoryClick('More')} className="font-mantra text-xl md:text-3xl basis-0">COFFEE & MORE</h3>
        </div>
        <div>
          {selectedCategory === 'Food' && <div className="fade-in-menu border-b text-lg mb-8">ALL DAY BRUNCH</div>}
          {selectedCategory === 'Food' && <MenuItems menu={foodMenu}/>}
          {selectedCategory === 'Drinks' && <MenuItems menu={drinkMenu} />}
          {selectedCategory === 'More' && <MenuItems menu={moreMenu} />}
        </div>
      </section>
  );
};

export default Menus;
