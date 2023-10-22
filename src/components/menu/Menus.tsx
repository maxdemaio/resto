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
          className="flex items-stretch justify-between w-full border-b mb-16"
        >
          <button onClick={() => handleCategoryClick('Food')} className="grow bg-black p-4 font-mantra text-xl md:text-3xl basis-0">FOOD</button>
          <button onClick={() => handleCategoryClick('Drinks')} className="grow bg-black p-4 font-mantra text-xl md:text-3xl basis-0">DAY DRINKING</button>
          <button onClick={() => handleCategoryClick('More')} className="grow bg-black p-4 font-mantra text-xl md:text-3xl basis-0">COFFEE & MORE</button>
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
