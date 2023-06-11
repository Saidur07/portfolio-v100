"use client";
import React, { useEffect, useState } from "react";

const Splash = () => {
  const greetingMsgs = [
    "Hi",
    "হ্যালো",
    "مرحبا",
    "नमस्ते",
    "你好",
    "こんにちは ",
    "Olá",
    "Ciao",
    "Bonjour",
    "안녕하세요 ",
    "Привет  ",
    " Γεια σας ",
    " Cześć ",
    "Hola",
    "Halo",
  ];
  const [currentMsgIndex, setCurrentMsgIndex] = useState(0);
  const [fadeIn, setFadeIn] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setFadeIn(false);
    }, 500);
    const timerId = setTimeout(() => {
      const intervalId = setInterval(() => {
        setCurrentMsgIndex((prevIndex) => {
          const nextIndex = prevIndex + 1;
          if (nextIndex >= greetingMsgs.length - 1) {
            clearInterval(intervalId);
          }
          return nextIndex % greetingMsgs.length;
        });
      }, 150);

      return () => {
        clearInterval(intervalId);
      };
    }, 1000);

    return () => {
      clearTimeout(timerId);
    };
  }, [greetingMsgs.length]);

  const currentMsg = greetingMsgs[currentMsgIndex];

  return (
    <div className="h-[100vh] bg-[#12141B] flex items-center justify-between flex-col py-[3%]">
      <p
        className={`transition-opacity duration-300 ease-in-out text-white text-5xl lg:text-7xl lg:mt-[32vh] mt-[36vh] ${
          fadeIn ? "opacity-0" : ""
        }
         `}
      >
        <span>•</span> <span>{currentMsg}</span>
      </p>
      <div
        className={`transition-opacity duration-100 ease-in-out ${
          fadeIn ? "opacity-0" : ""
        } loader scale-75 lg:scale-90`}
      >
        <div className="box1" />
        <div className="box2" />
        <div className="box3" />
      </div>
    </div>
  );
};

export default Splash;
