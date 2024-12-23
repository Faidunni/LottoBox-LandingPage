import hero from "../assets/Images/hero.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import HomeLotto from "../sections/HomeLotto";
import Circleforward from "../assets/Images/Circle-forward.png";
import Circlebackward from "../assets/Images/Circle-backward.png";

const Button = [
  { name: "Tour" },
  { name: "Gallery" },
  { name: "Floor Plan" },
  { name: "Info" },
];

function Hero() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const [activeLink, setActiveLink] = useState(0);

  // Handle next button click
  const handleNext = () => {
    setActiveLink((prev) => (prev + 1) % Button.length);
  };

  // Handle previous button click
  const handlePrevious = () => {
    setActiveLink((prev) => (prev - 1 + Button.length) % Button.length);
  };

  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat flex justify-center items-center"
      style={{
        backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.60) 0%, rgba(0, 0, 0, 0.60) 100%), url(${hero})`,
      }}
    >
      <div className="text-center mt-20">
        <p
          className="text-white lg:text-6xl text-2xl font-Poppins"
          data-aos="fade-down"
        >
          Win this ₦70 Million Naira
        </p>
        <p
          className="text-white font-Poppins mt-6 lg:text-6xl text-2xl"
          data-aos="fade-down"
        >
          Dream Apartment
        </p>

        {/* Arrow buttons */}
        <div
          className="relative lg:mt-10 w-full flex lg:justify-center  items-center -bottom-[90px]"
          data-aos="fade-right"
        >
          {/* Left Arrow */}
          <button
            onClick={handlePrevious}
            className="absolute lg:-left-[12%] right-10 transform -translate-y-1/2"
          >
            <img src={Circlebackward} alt="Circlebackward" />
          </button>

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            className="absolute lg:-right-[12%]  transform -translate-y-1/2"
          >
            <img src={Circleforward} alt="Circleforward" />
          </button>
        </div>

        {/* Navigation buttons */}
        <div className="gap-6 flex justify-center mt-20" data-aos="fade-left">
          {Button.map((item, index) => (
            <button
              key={index}
              className={`text-white text-2xl font-DM Sans mt-6 border border-white rounded-full px-12 py-4 ${
                activeLink === index ? "bg-white !text-black" : "bg-transparent"
              }`}
              onClick={() => setActiveLink(index)}
            >
              {item.name}
            </button>
          ))}
        </div>

        {/* Home lotto card */}
        <div>
          <HomeLotto className="sm:w-[20px]" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
