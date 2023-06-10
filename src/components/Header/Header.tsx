import React from "react";
import map from "../../../public/Icons/map.svg";
import circle from "../../../public/Icons/circle.svg";
import Image from "next/image";

const Header = () => {
  return (
    <div className="">
      <nav className=" my-12 md:mx-12 mx-6 flex items-center justify-between  ">
        <div className="flex items-center justify-between gap-2 text-lg group cursor-pointer">
          <p className="transition-all group-hover:rotate-[360deg] duration-700">
            ©
          </p>
          <p>Programmer Saidur</p>
        </div>
        <div className=" items-center justify-between gap-12 text-lg hidden md:flex">
          <p className="cursor-pointer border-b border-transparent transition-all hover:border-white">
            About
          </p>
          <p className="cursor-pointer border-b border-transparent transition-all hover:border-white">
            Works
          </p>
          <p className="cursor-pointer border-b border-transparent transition-all hover:border-white">
            Contact
          </p>
        </div>
        <div className="text-lg block md:hidden">
          <p className="border-b border-white">Menu</p>
        </div>
      </nav>
      <div className="w-[100vw] mx-auto overflow-hidden absolute -z-10">
        <p className="xl:text-[30vw] lg:text-[40vw] md:text-[50vw] sm:text-[60vw] text-[90vw]   text-center -mx-24 tracking-widest opacity-[0.01] select-none leading-[.8] ">
          {" "}
          DEVEL<span> OPER</span>{" "}
        </p>
      </div>
      <div className="flex items-center   mx-auto justify-center flex-col mt-[25vh]">
        <div className="xl:max-w-[66rem] md:w-[85%]  w-[90%]">
          <h3 className="xl:text-[44px] md:text-[30px] text-[24px]">
            Hey! I’m <span className="font-semibold">Saidur</span>,
          </h3>

          <h1 className="xl:text-[120px] lg:text-[98px] md:text-[74px] sm:text-[68px] text-[48px] md:my-0 my-2 leading-[1] ">
            <span> A FRONT-END </span>
            <br />
            <span>
              WEB DEVELOPER
              <span className="xl:w-12 md:w-8 w-6 xl:h-12 md:h-8 h-6  rounded-full bg-primary inline-block ml-3"></span>
            </span>
          </h1>

          <div className="flex items-center justify-between">
            <span></span>
            <h5 className="xl:text-[44px] md:text-[30px] text-[24px]  flex items-center justify-center">
              <Image
                src={map}
                alt=""
                className="mr-3 xl:w-12 md:w-8 w-6 xl:h-12 md:h-8 h-6"
              ></Image>{" "}
              <span>Based in</span>{" "}
              <span className="font-semibold ml-3 border-b border-white">
                {" "}
                Bangladesh{" "}
              </span>
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
