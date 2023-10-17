import React from 'react';
import type { MenuItem } from './allMenus';

interface MenuProps {
  menu: MenuItem[];
}

const MenuItems: React.FC<MenuProps> = ({ menu }) => {
  return (
    <>
      {menu.map((item: MenuItem) => (
        <div className='fade-in-menu'>
          <div key={item.itemName} className="text-lg mb-2 flex justify-between">
            <div>{item.itemName.toUpperCase()}</div>
            <div aria-label="price">${item.price.toFixed(2)}</div>
          </div>
          <p className="mb-6">{item.description}</p>
        </div>
      ))}
    </>
  );
};

export default MenuItems;
