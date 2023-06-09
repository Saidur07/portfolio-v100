import React from "react";
import map from "../../../public/Icons/map.svg";
import Image from "next/image";

const Header = () => {
  return (
    <div>
      <nav className="bosrder bosrder-white m-12 flex items-center justify-between  ">
        <div className="flex items-center justify-between gap-2 text-lg group cursor-pointer">
          <p className="transition-all group-hover:rotate-[360deg] duration-700">
            ©
          </p>
          <p>Programmer Saidur</p>
        </div>
        <div className="flex items-center justify-between gap-12 text-lg">
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
      </nav>
      <div className="max-w-[100vw] overflow-hidden absolute -z-10">
        <p className="text-[600px] text-center -mx-24 tracking-widest opacity-[0.01] select-none leading-[.8] ">
          {" "}
          DEVEL<span> OPER</span>{" "}
        </p>
      </div>
      <div className="flex items-center justify-center flex-col mt-[25vh]">
        <div className="w-[55%] ">
          <h3 className="text-[44px]">
            Hey! I’m <span>Saidur</span>,
          </h3>
          <h1 className="text-[120px] leading-[1] relative">
            A FRONT-END WEB DEVELOPER{" "}
            <div className="w-12 h-12 rounded-full bg-primary absolute bottom-4 right-0"></div>
          </h1>
          <div className="flex items-center justify-between">
            <span></span>
            <h5 className="text-[44px]  flex">
              <Image
                src={map}
                alt=""
                width={42}
                height={42}
                className="mr-3"
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
