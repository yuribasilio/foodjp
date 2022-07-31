import React from 'react';

export interface IconMapProps{
  size: number | string;
  color: string;
  border: string | number;
}

export default function IconMap(props: IconMapProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.size}
      height={props.size}
      fill={props.color}
      viewBox="0 0 256 256"
    >
      <path fill="none" d="M0 0H256V256H0z" />
      <circle
        cx="128"
        cy="104"
        r="32"
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={props.border}
      />
      <path
        fill="none"
        stroke={props.color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={props.border}
        d="M208 104c0 72-80 128-80 128s-80-56-80-128a80 80 0 01160 0z"
      />
    </svg>
  );
}
