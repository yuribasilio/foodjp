import React from 'react';
import IconStar from '../IconStar';
import ImgTop from '../ImgTop';

export interface CommentsProps {
  data: Array<any>
}

export default function Comments(props: CommentsProps) {
  const starShow = (star: number) => {
    const stars = [];
    for (let i = 0; i < star; i++) {
      stars.push(<IconStar size="19px" color="#DA2535" key={i} />)
    }
    return stars;
  }
  return (
    <>
      {props.data.map((comentario, index) => (
        <div className="flex flex-col w-6/12 bg-[#f3f3f3] p-[30px] rounded-[30px]" key={index}>
          <div className="flex w-full">
            <ImgTop width="120px" height="120px" file={comentario.img} styles />
          </div>
          <span className="flex w-full text-3xl text-[#292929] mt-[20px] mb-[10px]">{comentario.name}</span>
          <p className="flex w-[415px] text-xl text-[#616161] mb-[15px]">{comentario.desc}</p>
          <div className="flex w-full">
            {starShow(comentario.star)}
          </div>
        </div>
      ))}
    </>
  );
}