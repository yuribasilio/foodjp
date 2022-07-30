import React from 'react';
import IconStar from '../IconStar';
import ImgTop from '../ImgTop';

export interface CommentsProps {
  data: Array<any>
  size: number | string;
  color: string;
}

export default function Comments(props: CommentsProps) {
  const starShow = (star: number) => {
    const stars = [];
    for (let i = 0; i < star; i++) {
      stars.push(<IconStar size={props.size} color={props.color} key={i} />);
    }
    return stars;
  };
  return (
    <>
      {props.data.map((comentario, index) => (
        <div className="flex flex-col w-6/12 bg-[#f3f3f3] p-[30px] rounded-[30px]" key={index}>
          <div className="flex w-full">
            <ImgTop width="120px" height="120px" file={comentario.img} className="rounded-full" styles />
          </div>
          <span className="flex w-full text-3xl text-[#292929] mt-[20px] mb-[10px]">{comentario.name}</span>
          <p className="flex w-[415px] text-xl text-[#7e7e7e] mb-[15px]">{comentario.desc}</p>
          <div className="flex w-full">
            {starShow(comentario.star)}
          </div>
        </div>
      ))}
    </>
  );
}
