import React from "react";
import Button from "./Button";
import TransitionEffect from "./TransitionEffect";
import Link from "next/link";

const HomePage = ({ homePage }) => {
  const { title, content, buttonTitle, image } = homePage;
  return (
    <div className="w-full px-5 lg:px-10 py-10">
      <div className="container mx-auto">
        <TransitionEffect />
        <div className="flex flex-col items-start lg:items-center justify-center gap-3 lg:gap-4">
          <h1 className="leading-[3rem]">{title}</h1>
          <p className="max-w-[900px] lg:text-center">{content}</p>
          <Link href="/engage-with-us">
            <Button title={buttonTitle} />
          </Link>
          <img src={image} />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
