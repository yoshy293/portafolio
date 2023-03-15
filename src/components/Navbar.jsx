import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isToggle, setisToggle] = useState(false);
  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "portafolio",
    },
    {
      id: 4,
      link: "experience",
    },
    {
      id: 5,
      link: "contact",
    },
  ];

  return (
    <nav className="flex justify-between items-center w-full h-20 text-white fixed bg-black px-4">
      <div>
        <h1 className="text-5xl font-signature ml-2">Jorge</h1>
      </div>
      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <Link
            to={link}
            smooth
            duration={500}
            className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200"
            key={id}
          >
            {link}
          </Link>
        ))}
      </ul>
      <div
        onClick={() => setisToggle((prev) => !prev)}
        className="md:hidden cursor-pointer pr-4  text-gray-500 z-[99]"
      >
        {isToggle ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
      {isToggle && (
        <ul
          className="flex md:hidden flex-col justify-center items-center absolute 
      top-0 right-0 w-[70%] h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500 slide-in-right z-[99]"
        >
          {links.map(({ id, link }) => (
            <Link
              to={link}
              smooth
              duration={500}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
              key={id}
              onClick={()=>setisToggle((prev) => !prev)}
            >
              {link}
            </Link>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
