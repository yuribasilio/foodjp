/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react';
import Geocode from 'react-geocode';
import IconMap from '../IconMap';

export interface LocalizacaoProps {
  width: number;
  height: number;
  zoom: number;
}

export default function Localizacao(props: LocalizacaoProps) {
  const apiKeyMaps = 'AIzaSyDk4svRle-bw_ll0v-VsOH8bxdUnNe_HSM';
  const apiKeyGeo = 'AIzaSyDBjFICp1-9jsUd20W2NmgzMcfvXASp7XA';

  const [address, setAddress] = useState('');
  const [latitudes, setLatitudes] = useState(-15.7992949);
  const [longitudes, setLongitudes] = useState(-47.931812);

  Geocode.setApiKey(apiKeyGeo);

  const getGeoCode = (myAddress: string) => {
    Geocode.fromAddress(myAddress).then(
      (response) => {
        const { lat, lng } = response.results[0].geometry.location;
        setLatitudes(lat);
        setLongitudes(lng);
      },
    );
  };

  const handleSubmitAddress = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    getGeoCode(address.toLowerCase());
  };

  return (
    <div className="flex flex-col w-full">
      <div className={`flex w-full h-[${props.height}] rounded-xl overflow-hidden`}>
        <img className="flex w-full" src={`https://maps.googleapis.com/maps/api/staticmap?size=${props.width}x${props.height}&scale=2&format=png&maptype=roadmap&zoom=${props.zoom}&markers=size:small%7Ccolor:red%7C${latitudes},${longitudes}&key=${apiKeyMaps}`} />
      </div>
      <div className="flex flex-row w-full justify-center mt-[40px]">
        <div className="flex w-6/12 border-[1px] border-[#292929] p-[15px] rounded-tl-lg rounded-bl-lg">
          <IconMap size="33px" color="#DA2535" border={16} />
          <input type="text" placeholder="Localização para entrega" className="flex w-full ml-[10px] text-[22px] text-[#292929] outline-none placeholder:text-[#ccc]" onChange={(event) => { setAddress(event.target.value); }} value={address} />
        </div>
        <div className="flex w-2/12">
          <button type="button" className="flex w-full justify-center items-center bg-[#DA2535] text-[#fff] text-[22px] rounded-tr-lg rounded-br-lg" onClick={handleSubmitAddress}>
            Buscar
          </button>
        </div>
      </div>
    </div>
  );
}
