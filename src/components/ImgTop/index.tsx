import React from 'react';

export interface ImgTopProps{
  width: number | string;
  height: number | string;
  file: string;
  className?: string;
  styles?: boolean;
}

export default function ImgTop(props: ImgTopProps) {
  return (
    <>
      {!props.styles ? (
        <div className="flex w-full justify-center items-center">
          <img src={props.file} alt="" width={props.width} height={props.height} className={props.className} />
        </div>

      ) : (
        <div className="flex w-full">
          <img src={props.file} alt="" width={props.width} height={props.height} className={props.className} />
        </div>
      )}
    </>
  );
}
