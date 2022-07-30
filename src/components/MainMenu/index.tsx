/* eslint-disable react/void-dom-elements-no-children */
import React from 'react';

export interface MainMenuProps{
  data: Array<any>;
}

export default function MainMenu(props: MainMenuProps) {
  return (
    <ul className="w-[400px] inline-flex justify-between items-end">
      {props.data.map((menu, index) => (
        <a href={menu.slug} key={index}>
          <li className="flex px-[20px] py-[5px] text-[22px] border-b-[5px] border-b-[transparent] hover:text-[#DA2535] hover:border-b-[#DA2535]">
            {menu.name}
          </li>
        </a>

      ))}
    </ul>
  );
}
