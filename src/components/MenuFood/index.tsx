import React from 'react';
import ImgTop from '../ImgTop';

export interface MenuFoodProps{
  data: Array<any>
}

export default function MenuFood(props: MenuFoodProps) {
  return (
    <>
      {props.data.map((prato, index) => (
        <div className="flex flex-col w-4/12 gap-5 bg-[#f3f3f3] p-[30px] rounded-[30px]" key={index}>
          <ImgTop width="291px" height="291px" file={prato.img} className="flex mt-[-150px]" />
          <h2 className="flex w-full justify-center text-[32px] text-[#292929]">{prato.name}</h2>
          <p className="flex w-full justify-center text-center text-[18px] text-[#828282] px-[30px]">{prato.text}</p>
          <span className="flex w-full justify-center text-[32px] text-[#292929]">{prato.price}</span>
        </div>
      ))}
    </>
  );
}
