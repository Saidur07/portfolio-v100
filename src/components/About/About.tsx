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
    <div className="mt-[10vh] md:mt-[20vh] lg:mt-[30vh]  mx-6 max-w-7xl xl:mx-auto">
      <div className="xl:hidden">
        <Image src={saidur} alt="" className=" md:scale-90 scale-75"></Image>
        <h1 className="md:text-[85px] sm:text-[72px] text-[62px] leading-[1] ">
          <span className="!font-extrabold">SAIDUR RA</span>
          <span className="gradient-text">H</span>
          <span className="stroked">MAN</span>
        </h1>
        <hr className="border-2 border-white rounded-full w-1/2 my-2 " />
        <div className="mt-12 text-xl pr-4 tracking-[0.01em]">
          <p className="mb-4">
            I&apos;m a 16 Y/O passionate front-end web developer from Bangladesh
            with over 2 years of experience. I&apos;m dedicated to crafting
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
            the latest advancements in web technologies. I am enthusiastic about
            taking on new challenges and collaborating with fellow developers
            and clients. Let&apos;s create remarkable digital experiences
            together!
          </p>
        </div>
        <hr className="border-2 border-white rounded-full w-1/2 mt-8 " />
        <div className=" my-8 ">
          <p className="font-semibold text-3xl md:text-5xl my-4">
            LET&apos;S CONNECT!
          </p>
          <div className="flex items-center md:justify-start justify-between md:gap-x-16 mt-6 md:mt-12 mb-4 sca">
            <Link href="/" className=" ">
              {" "}
              <Image
                src={github}
                alt=""
                className="scale-75 md:scale-90"
              ></Image>{" "}
            </Link>
            <Link href="/" className=" ">
              {" "}
              <Image
                src={linkedin}
                alt=""
                className="scale-75 md:scale-90"
              ></Image>{" "}
            </Link>
            <Link href="/" className=" ">
              {" "}
              <Image
                src={insta}
                alt=""
                className="scale-75 md:scale-90"
              ></Image>{" "}
            </Link>
            <Link href="/" className=" ">
              {" "}
              <Image
                src={discord}
                alt=""
                className="scale-75 md:scale-90"
              ></Image>{" "}
            </Link>
          </div>
          <Image src={line} alt="" className="scale-75 md:scale-90"></Image>
        </div>
      </div>
      <div className="hidden xl:flex items-start justify-center">
        <div className="w-1/2 ">
          <h1 className="text-[115px] whitespace-nowrap ">
            <span className="!font-extrabold">SAIDUR RA</span>
            <span className="gradient-text">H</span>
            <span className="stroked">MAN</span>
          </h1>
          <hr className="border-2 border-white rounded-full w-2/3 my-4 " />
          <div className="mt-12 text-xl pr-4 tracking-[0.01em]">
            <p className="mb-4">
              I&apos;m a 16 Y/O passionate front-end web developer from
              Bangladesh with over 2 years of experience. I&apos;m dedicated to
              crafting visually stunning and user-friendly websites using
              cutting-edge technologies like HTML, CSS, JavaScript, TypeScript,
              React.js, Next.js, Firebase, Node.js etc. Specializing in
              responsive web design, I strive to create seamless experiences
              across devices.
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
              developers and clients. Let&apos;s create remarkable digital
              experiences together!
            </p>
          </div>
        </div>

        <div className="w-1/2 -z-10">
          <Image src={saidur} alt="" className="-z-10"></Image>
          <div className="border-l-4 border-white my-8 px-8">
            <p className="font-semibold text-5xl my-4">LET&apos;S CONNECT!</p>
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
        <div className="flex flex-col sm:flex-row gap-y-8 sm:gap-y-0 items-center justify-around xl:justify-between sm:my-16  my-8">
          <div>
            <div className="xl:text-8xl lg:text-6xl sm:text-5xl text-6xl flex  justify-center  font-bold">
              <p>100</p>
              <p className=" gradient-text-blue lg:-mt-12 md:-mt-8 sm:-mt-4 -mt-8">
                +
              </p>
            </div>
            <p className="xl:text-3xl md:text-2xl text-xl font-semibold mt-4">
              Projects Finished
            </p>
          </div>
          <div>
            <div className="xl:text-8xl lg:text-6xl sm:text-5xl text-6xl flex  justify-center  font-bold">
              <p>02</p>
              <p className=" gradient-text-green lg:-mt-12 md:-mt-8 sm:-mt-4 -mt-8">
                +
              </p>
            </div>
            <p className="xl:text-3xl md:text-2xl text-xl font-semibold mt-4">
              Years of Experience
            </p>
          </div>
          <div>
            <div className="xl:text-8xl lg:text-6xl sm:text-5xl text-6xl flex  justify-center  font-bold">
              <p>365</p>
              <p className=" gradient-text-purple lg:-mt-12 md:-mt-8 sm:-mt-4 -mt-8">
                +
              </p>
            </div>
            <p className="xl:text-3xl md:text-2xl text-xl font-semibold mt-4">
              Nights of Code
            </p>
          </div>
        </div>
        <hr className="gradient-border rounded-full  " />
      </div>
    </div>
  );
};

export default About;
