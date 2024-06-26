import React from 'react';
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import HeroImage from "../assets/hero.png";

const Home = () => {
  return (
    <div name='home' className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>
      <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">I'm a Full Stack Developer</h2>
          <p className="text-gray-500 py-4 max-w-md">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi labore soluta eligendi eius ratione officia cupiditate illo fugiat officiis modi in expedita, libero consequatur? Possimus officiis facere ratione cumque sapiente?
          </p>
          <div>
            <button className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
              Portfolio
              <span className='group-hover:rotate-90 duration-300 ml-2'>
                <MdOutlineKeyboardArrowRight size={25}/>
              </span>
            </button>
          </div>
        </div>
        <div>
          <img src={HeroImage} alt="My Profile" className="rounded-2xl w-2/3 mx-auto overflow-hidden"/>
        </div>
      </div>
    </div>
  );
}

export default Home;
