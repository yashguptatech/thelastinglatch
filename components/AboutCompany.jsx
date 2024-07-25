import React from "react";

const AboutCompany = ({ about }) => {
  const { title, content, image, points } = about;
  return (
    <div className="w-full px-5 lg:px-10 py-5" id="about-company">
      <div className="container mx-auto">
        <div className="flex justify-start">
          <h3>{title}</h3>
        </div>

        <div className="flex flex-col-reverse xl:flex-row justify-center md:space-x-20 gap-5 mt-5">
          <div className="flex flex-col items-start justify-center gap-3 ">
            <p>{content}</p>
            <div className="flex flex-col items-start">
              {points.map((point, index) => {
                return (
                  <div key={index} className="flex items-start gap-2">
                    <p className="text-secondary">{point.label}</p>
                    <p>{point.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <img src={image} alt="image" width={700} height={700} />
        </div>
      </div>
    </div>
  );
};

export default AboutCompany;
