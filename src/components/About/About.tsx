import React from "react";
import saidur from "../../../public/Images/saidur.png";
import line from "../../../public/Icons/line.svg";
import github from "../../../public/Icons/github.svg";
import linkedin from "../../../public/Icons/linkedin.svg";
import insta from "../../../public/Icons/insta.svg";
import discord from "../../../public/Icons/discord.svg";
import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <div className="mt-[30vh] max-w-7xl mx-auto">
      <div className=" flex items-start justify-center">
        <div className="w-1/2 ">
          <h1 className="text-[115px] whitespace-nowrap ">
            <span className="bold">SAIDUR RA</span>
            <span className="gradient-text">H</span>
            <span className="stroked">MAN</span>
          </h1>
          <hr className="border-2 border-white rounded-full w-2/3 my-4 " />
          <div className="mt-12 text-xl pr-4 tracking-[0.01em]">
            <p className="mb-4">
              I'm a 16 Y/O passionate front-end web developer from Bangladesh
              with over 2 years of experience. I'm dedicated to crafting
              visually stunning and user-friendly websites using cutting-edge
              technologies like HTML, CSS, JavaScript, TypeScript, React.js,
              Next.js, Firebase, Node.js etc. Specializing in responsive web
              design, I strive to create seamless experiences across devices.
            </p>{" "}
            <p className="mb-4">
              With a keen eye for UI/UX design, I ensure that the websites I
              create not only function flawlessly but also captivate users with
              their aesthetics. I firmly believe in a user-centered approach and
              combine it with clean code and modern frameworks to deliver
              outstanding results. Proficient in version control with Git and
              collaborating with others, I integrate RESTful APIs to add dynamic
              functionality.
            </p>{" "}
            <p>
              As a firm believer in continuous learning, I stay up-to-date with
              the latest advancements in web technologies. I am enthusiastic
              about taking on new challenges and collaborating with fellow
              developers and clients. Let's create remarkable digital
              experiences together!
            </p>
          </div>
        </div>

        <div className="w-1/2 -z-10">
          <Image src={saidur} alt="" className="-z-10"></Image>
          <div className="border-l-4 border-white my-8 px-8">
            <p className="font-semibold text-5xl my-4">LET'S CONNECT!</p>
            <div className="flex items-center justify-start gap-x-12 mt-12 mb-4 ">
              <Link href="/" className=" ">
                {" "}
                <Image src={github} alt=""></Image>{" "}
              </Link>
              <Link href="/" className=" ">
                {" "}
                <Image src={linkedin} alt=""></Image>{" "}
              </Link>
              <Link href="/" className=" ">
                {" "}
                <Image src={insta} alt=""></Image>{" "}
              </Link>
              <Link href="/" className=" ">
                {" "}
                <Image src={discord} alt=""></Image>{" "}
              </Link>
            </div>
            <Image src={line} alt=""></Image>
          </div>
        </div>
      </div>
      <div className="mt-6">
        <hr className="gradient-border rounded-full  " />
        <div className="flex items-center justify-between my-16  ">
          <div>
            <div className="text-8xl flex  justify-center  font-bold">
              <p>100</p>
              <p className=" gradient-text-blue -mt-12">+</p>
            </div>
            <p className="text-3xl font-semibold mt-4">Projects Finished</p>
          </div>
          <div>
            <div className="text-8xl flex  justify-center  font-bold">
              <p>02</p>
              <p className=" gradient-text-green  -mt-12">+</p>
            </div>
            <p className="text-3xl font-semibold mt-4">Years of Experience</p>
          </div>
          <div>
            <div className="text-8xl flex  justify-center  font-bold">
              <p>365</p>
              <p className=" gradient-text-purple -mt-12">+</p>
            </div>
            <p className="text-3xl font-semibold mt-4">Nights of Code</p>
          </div>
        </div>
        <hr className="gradient-border rounded-full  " />
      </div>
    </div>
  );
};

export default About;
