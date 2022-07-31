import * as React from 'react';

export interface BottomMenuProps {
  data: Array<any>
}

export default function BottomMenu(props: BottomMenuProps) {
  const listMenu = (list: any) => {
    const lists = [];
    for (let i = 0; i < list.length; i++) {
      lists.push(
        <li className="flex w-full text-[16px] text-[#616161] cursor-pointer" key={i}>
          <a href={list[i].link} className="flex w-full py-[10px] hover:text-[#DA2535]">{list[i].name}</a>
        </li>,
      );
    }
    return lists;
  };

  return (
    <>
      {props.data.map((menu, index) => (
        <div className="flex flex-col w-full" key={index}>
          <h1 className="flex w-full text-[30px] text-[#292929] mb-[15px]">{menu.header}</h1>
          <ul className="flex flex-col w-full ">
            {listMenu(menu.list)}
          </ul>
        </div>
      ))}
    </>
  );
}
