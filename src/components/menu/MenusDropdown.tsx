import React, { useState } from 'react';
import MenuItems from './MenuItems';
import { drinkMenu, foodMenu, moreMenu } from './allMenus';

const MenusDropdown: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Food');
  const [isDropdownOpen, setDropdownOpen] = useState<boolean>(false);

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
    setDropdownOpen(false); // Close the dropdown after selecting a category
  };

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <section id="menus" className="bg-[#895621] text-white px-3 md:px-[10rem] py-14">
      <h2 className="font-mantra text-5xl md:text-6xl mb-6">Menus test</h2>
      <div className="relative">
        <button onClick={toggleDropdown} className="grow p-4 font-mantra text-xl md:text-3xl basis-0">
          {selectedCategory} <span className="arrow">{isDropdownOpen ? '▲' : '▼'}</span>
        </button>
        {isDropdownOpen && (
          <div className="absolute left-0 top-12 bg-white p-4 border border-gray-300 rounded shadow">
            <button onClick={() => handleCategoryClick('Food')}>Food</button>
            <button onClick={() => handleCategoryClick('Drinks')}>Day Drinking</button>
            <button onClick={() => handleCategoryClick('More')}>Coffee & More</button>
          </div>
        )}
      </div>
      <div>
        {selectedCategory === 'Food' && <div className="fade-in-menu border-b text-lg mb-8">ALL DAY BRUNCH</div>}
        {selectedCategory === 'Food' && <MenuItems menu={foodMenu} />}
        {selectedCategory === 'Drinks' && <MenuItems menu={drinkMenu} />}
        {selectedCategory === 'More' && <MenuItems menu={moreMenu} />}
      </div>
    </section>
  );
};

export default MenusDropdown;
