import React from "react";
import { IoMdMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { socials } from "../constants";
import Link from "next/link";
const Footer = () => {
  return (
    <div className="w-full mt-10 p-3 px-5 lg:px-10">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-4 items-start  gap-5 lg:gap-16">
          <div className="flex flex-col items-start gap-3">
            <Link href="/">
              <h3>
                Mash<span>Vision</span>
              </h3>
            </Link>
            <p>
              We specialize in creating bespoke software solutions designed to
              perfectly fit your unique requirements and goals, ensuring optimal
              performance and efficiency
            </p>
          </div>

          <div className="flex flex-col items-start gap-5">
            <p className="font-bold text-primary">About Us</p>
            <div className="flex flex-col items-start gap-2">
              <Link href="/">
                <p className="hover:text-primary cursor-pointer">Home</p>
              </Link>
              <Link href="/#about-company">
                <p className="hover:text-primary cursor-pointer">About Us</p>
              </Link>
              <Link href="/#services">
                <p className="hover:text-primary cursor-pointer">Services</p>
              </Link>
            </div>
          </div>

          <div className="flex flex-col items-start gap-5">
            <p className="font-bold text-primary">Contact Us</p>
            <div className="flex flex-col items-start gap-2">
              <div className="flex items-center gap-2">
                <IoMdMail size={15} />
                <div className="flex flex-col items-start">
                  <p>prashant@mashvision.in</p>
                  <p>info@mashvision.in</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <FaPhoneAlt size={15} />
                <p>+91 9953034390</p>
              </div>

              <div className="flex items-start gap-2">
                <FaLocationDot size={25} />
                <p>
                  4th Floor, Plot No.94, Sector 13 - Dwarka, Opposite Metro
                  Station, New Delhi - 110078
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-start gap-5">
            <p className="font-bold text-primary">Privacy</p>
            <div className="flex flex-col items-start gap-2">
              <Link href="/faq">
                <p>FAQ</p>
              </Link>
              <Link href="/terms">
                <p>Terms</p>
              </Link>
              <Link href="/privacy">
                <p>Privacy</p>
              </Link>
            </div>
          </div>
        </div>

        <hr className="mt-5" />

        <div className="flex flex-col lg:flex-row gap-3 items-center justify-between py-3">
          <p>2024 - All Rights Reserved | MashVision</p>
          <div className="flex items-center gap-3 text-xl">
            {socials.map((social, index) => {
              return (
                <div
                  key={index}
                  className="bg-primary rounded-full text-background p-2"
                >
                  <div>{social.icon}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
