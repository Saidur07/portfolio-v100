"use client";
import { useEffect, useState } from "react";
import "./globals.css";
import Splash from "@/components/splash/Splash";

export const metadata = {
  title: "Programmer Saidur • A Creative Front-End Web Dev From Bangladesh",
  description:
    "Programmer Saidur • A Creative Front-End Web Developer From Bangladesh",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <html lang="en">
      <head>
        <title>
          Programmer Saidur • A Creative Front-End Web Developer From Bangladesh
        </title>
      </head>
      <body>{loading ? <Splash></Splash> : children}</body>
    </html>
  );
}
