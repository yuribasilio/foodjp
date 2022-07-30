import React from 'react';

export interface IconStarProps{
  size: number | string;
  color: string;
}

export default function IconStar(props: IconStarProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.size}
      height={props.size}
      fill={props.color}
      viewBox="0 0 256 256"
    >
      <path fill="none" d="M0 0H256V256H0z" />
      <path d="M239.2 97.4A16.4 16.4 0 00224.6 86l-59.4-4.1-22-55.5A16.4 16.4 0 00128 16a16.4 16.4 0 00-15.2 10.4L90.4 82.2l-59 3.8a16.5 16.5 0 00-14.6 11.4 16.8 16.8 0 005.2 18.1l45.4 38.4L53.9 207a18.5 18.5 0 007 19.6 18 18 0 0020.1.6l46.9-29.7h.2l50.5 31.9a16.1 16.1 0 008.7 2.6 16.5 16.5 0 0015.8-20.8l-14.3-58.1 45.2-37.6a16.8 16.8 0 005.2-18.1z" />
    </svg>
  );
}
