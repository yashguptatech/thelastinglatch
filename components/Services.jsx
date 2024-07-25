import Link from "next/link";
import React from "react";

const Services = ({ services }) => {
  const { title, content } = services;
  return (
    <div className="w-full px-5 lg:px-10" id="services">
      <div className="container mx-auto">
        <div className="flex justify-start">
          <h3>{title}</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 items-start gap-10 mt-5">
          {content.map((service, index) => {
            return (
              <Link href={service.path} key={index}>
                <div className="flex flex-col items-start max-w-[35rem] min-h-[12rem] border-2 border-secondary p-3 rounded-xl">
                  <h4 className="font-bold text-secondary">{service.label}</h4>
                  <p className="max-w-[500px]">{service.desc}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Services;
