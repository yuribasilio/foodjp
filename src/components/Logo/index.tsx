import React from 'react';

export interface LogoProps {
  width: number | string;
  height: number | string;
  className?: string;
}

export default function Logo(props: LogoProps) {
  return (
    <div className={props.className}>
      <img src="./src/assets/logo.png" alt="" />
    </div>
  );
}
