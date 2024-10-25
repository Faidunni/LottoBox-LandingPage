import hero from "../assets/Images/hero.jpg";

import { useState } from "react";
import HomeLotto from "../sections/HomeLotto";
const Button = [
  {
    name: "Tour",
  },
  {
    name: "Gallery",
  },
  {
    name: "Floor Plan",
  },
  {
    name: "Info",
  },
];

function Hero() {
  const [activeLink, setActiveLink] = useState(0);
  return (
    <section
      className="bg-cover bg-center bg-no-repeat flex  justify-center "
      style={{
        backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.60) 0%, rgba(0, 0, 0, 0.60) 100%), url(${hero})`,
      }}
    >
      <div>
        <p className="text-white text-6xl  text-center font-Poppins mt-20">
          Win this ₦70 Million Naira
        </p>
        <p className="text-white text-center font-Poppins mt-6 text-6xl">
          Dream Apartment
        </p>

        <div className="gap-6 flex justify-center mt-20">
          {Button.map((item, index) => (
            <button
              key={index}
              className={
                `text-white text-2xl font-DM Sans mt-6 border border-white rounded-full px-12 py-4 ` +
                (activeLink === index
                  ? "bg-white text-black"
                  : "bg-transparent")
              }
              onClick={() => setActiveLink(index)}
            >
              {item.name}
            </button>
          ))}
        </div>

        {/* Home lotto card */}
        <HomeLotto />
      </div>
    </section>
  );
}

export default Hero;
