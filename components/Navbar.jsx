"use client";
import React, { useState } from "react";
import logo from "@/public/logo.svg";
import Image from "next/image";
import { menuLinks } from "@/constants";
import Link from "next/link";
import Button from "./Button";
import { MdOutlineMenu } from "react-icons/md";
import { IoCloseSharp } from "react-icons/io5";
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleChange = () => {
    setNav(!nav);
  };
  return (
    <div className="px-5 lg:px-10 h-20 w-full">
      <div className="container mx-auto w-full h-full">
        <div className="flex items-center justify-between w-full h-full">
          <Link href="/">
            <div className="flex items-center gap-2">
              <Image src={logo} alt="logo" width={70} height={70} />
              <h3>
                Mash<span>Vision</span>
              </h3>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-6">
            {menuLinks.map((link, index) => {
              return (
                <ul key={index} className="hover:text-secondary duration-300">
                  <Link href={link.path}>
                    <li>{link.label}</li>
                  </Link>
                </ul>
              );
            })}
            <Link href="/engage-with-us">
              <Button title="Engage with us" />
            </Link>
          </div>

          <div
            className="block lg:hidden bg-secondary text-background rounded-full p-2"
            onClick={handleChange}
          >
            {nav ? <IoCloseSharp size={30} /> : <MdOutlineMenu size={30} />}
          </div>
        </div>

        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[70%] sm:w-[60%] md:w-[45%] h-screen bg-primary p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 h-screen p-10 ease-in duration-700"
          }
        >
          <Link href="/" onClick={handleChange}>
            <h2 className="text-background">
              Mash<span>Vision</span>
            </h2>
          </Link>
          <div className="flex flex-col items-start justify-center w-full h-full gap-10">
            {menuLinks.map((link, index) => (
              <ul
                key={index}
                className="text-xl text-background"
                onClick={handleChange}
              >
                <Link
                  href={link.path}
                  className="text-background hover:text-secondary duration-200"
                >
                  <li>{link.label}</li>
                </Link>
              </ul>
            ))}

            <Link href="/contact-us" onClick={handleChange}>
              <Button title="Engage with us" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
