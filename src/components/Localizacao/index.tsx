import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import React from 'react';
import IconMap from '../IconMap';

export interface LocalizacaoProps {
  lat: number;
  long: number;
  size: string;
  zoom: number;
}

export default function Localizacao(props: LocalizacaoProps) {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyDk4svRle-bw_ll0v-VsOH8bxdUnNe_HSM',
  });

  return (
    <div className="flex flex-col w-full">
      <div className={`flex w-full h-[${props.size}] rounded-xl overflow-hidden`}>
        {isLoaded ? (
          <GoogleMap
            mapContainerStyle={{ width: '100%', height: '100%' }}
            center={{ lat: props.lat, lng: props.long }}
            zoom={props.zoom}
          >
            <></>
          </GoogleMap>
        ) : null }
      </div>
      <div className="flex flex-row w-full justify-center mt-[40px]">
        <div className="flex w-6/12 border-[1px] border-[#292929] p-[15px] rounded-tl-lg rounded-bl-lg">
          <IconMap size="33px" color="#DA2535" border={16} />
          <input type="text" placeholder="Localização para entrega" className="flex w-full ml-[10px] text-[22px] text-[#292929] outline-none placeholder:text-[#ccc]" />
        </div>
        <div className="flex w-2/12">
          <button type="button" className="flex w-full justify-center items-center bg-[#DA2535] text-[#fff] text-[22px] rounded-tr-lg rounded-br-lg">Buscar</button>
        </div>
      </div>
    </div>
  );
}
