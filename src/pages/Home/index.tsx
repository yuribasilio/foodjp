import React from 'react';
import BottomMenu from '../../components/BottomMenu';
import Comments from '../../components/Comments';
import ImgTop from '../../components/ImgTop';
import Localizacao from '../../components/Localizacao';
import Logo from '../../components/Logo';
import MainMenu from '../../components/MainMenu';
import MenuFood from '../../components/MenuFood';

export default function Home() {
  const mainMenu = [
    {
      name: 'Inicio',
      slug: 'inicio',
    },
    {
      name: 'Cardáio',
      slug: 'carpdaio',
    },
    {
      name: 'Sobre',
      slug: 'sobre',
    },
  ];

  const pratos = [
    {
      img: './src/assets/prato-1.png',
      name: 'Ramen de Frango',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      price: 'R$30',
    },
    {
      img: './src/assets/prato-2.png',
      name: 'Ramen Apimentado',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      price: 'R$30',
    },
    {
      img: './src/assets/prato-3.png',
      name: 'Ramen Tradicional',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      price: 'R$30',
    },
  ];

  const comentarios = [
    {
      img: './src/assets/profile-1.png',
      name: 'Daniele Almeida',
      desc: 'Ótimo serviço! Encantada com a qualidade dos pratos.',
      star: 3,
    },
    {
      img: './src/assets/profile-2.png',
      name: 'Ricardo França',
      desc: 'Não é apenas a comida excelente, o serviço torna a experiência especial.',
      star: 5,
    },
  ];

  const menuContatoBottom = [
    {
      header: 'Contato',
      list: [
        {
          name: '+55 21 9999-9999',
          link: '#',
        },
        {
          name: 'email@gmail.com',
          link: '#',
        },
      ],

    },
  ];

  const menuSobreBottom = [
    {
      header: 'Sobre nós',
      list: [
        {
          name: 'Menu',
          link: '#',
        },
        {
          name: 'Valores',
          link: '#',
        },
        {
          name: 'Página Principal',
          link: '#',
        },
      ],

    },
  ];

  const menuServicosBottom = [
    {
      header: 'Serviços',
      list: [
        {
          name: 'Entrega',
          link: '#',
        },
        {
          name: 'Retirada',
          link: '#',
        },
      ],

    },
  ];

  return (
    <div className="flex w-screen justify-center">
      <div className="flex w-[1120px] flex-col">
        <div className="flex w-full mb-[60px]">
          <div className="flex w-3/12 mt-[40px] mb-[10px]">
            <Logo width="157px" height="49px" />
          </div>
          <div className="flex w-6/12 justify-center">
            <MainMenu data={mainMenu} />
          </div>
          <div className="flex w-3/12 items-end justify-end mb-[5px]">
            <a href="#" className="flex border-[2px] border-black px-[60px] py-[4px] text-[22px] capitalize rounded-lg hover:text-[#DA2535] hover:border-[#DA2535]">entrar</a>
          </div>
        </div>
        <div className="flex w-full gap-40">
          <div className="flex w-6/12 flex-col justify-center">
            <h1 className="flex w-full text-5xl text-[#292929] mb-[25px]">Comida Oriental</h1>
            <span className="flex w-[520px] text-[22px] text-[#292929] mb-[25px]">
              A culinária Japonesa é bastante equilibrada, sendo muito rica em peixes (ômega 3), vegetais, massas e ingredientes frescos.
            </span>
            <div className="flex">
              <a href="#" className="flex py-[10px] px-[80px] text-white text-[22px] border-[2px] border-[#DA2535] bg-[#DA2535] rounded-md hover:bg-[transparent] hover:text-[#DA2535]">Cardápio</a>
            </div>
          </div>
          <div className="flex w-6-12 flex-col">
            <ImgTop width="400px" height="535px" file="./src/assets/sushi-top.png" />
          </div>
        </div>
        <div className="flex w-full gap-40 mt-[100px]">
          <div className="flex w-6-12 flex-col">
            <ImgTop width="604px" height="500px" file="./src/assets/segurando-prato.png" />
          </div>
          <div className="flex w-6/12 flex-col justify-center">
            <h1 className="flex w-full text-5xl text-[#292929] mb-[25px]">Feita de forma Tradicional</h1>
            <span className="flex w-full text-[22px] text-[#292929] mb-[25px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </span>
            <div className="flex">
              <a href="#" className="flex text-[22px] rounded-md hover:bg-[transparent] underline text-[#DA2535]">Ler mais sobre o modo de preparo </a>
            </div>
          </div>
        </div>
        <div className="flex w-full flex-col mt-[100px]">
          <h1 className="flex w-full text-5xl text-[#292929] mb-[25px] justify-center">Mais populares</h1>
          <div className="flex mt-[150px] gap-10">
            <MenuFood data={pratos} />
          </div>
        </div>
        <div className="flex w-full flex-col mt-[100px]">
          <h1 className="flex w-full text-5xl text-[#292929] mb-[25px] ">Comentários</h1>
          <div className="flex gap-10">
            <Comments data={comentarios} size="19px" color="#DA2535" />
          </div>
        </div>
        <div className="flex flex-col w-full mt-[50px]">
          <div className="flex flex-col w-full">
            <h1 className="flex w-full text-5xl text-[#292929] mb-[25px] ">Localização</h1>
          </div>
          <div className="flex w-full justify-center mt-[25px]">
            <Localizacao width={2000} height={250} zoom={15} />
          </div>
        </div>
        <div className="flex w-full my-[100px]">
          <div className="flex w-3/12 mt-[40px] mb-[10px]">
            <Logo width="157px" height="49px" />
          </div>
          <div className="flex w-9/12 justify-center mt-[30px]">
            <div className="flex w-4/12">
              <BottomMenu data={menuContatoBottom} />
            </div>
            <div className="flex w-4/12">
              <BottomMenu data={menuSobreBottom} />
            </div>
            <div className="flex w-4/12">
              <BottomMenu data={menuServicosBottom} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
