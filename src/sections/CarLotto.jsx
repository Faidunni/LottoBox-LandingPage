import { useEffect } from "react";
import car from "../assets/Images/car.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const CarLotto = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div
      className="bg-background-color flex flex-col lg:flex-row items-center lg:items-start p-4 sm:p-8 lg:p-[48px] max-w-[90%] lg:max-w-[920px] mx-auto justify-between gap-4"
      data-aos="fade-left"
    >
      <img
        src={car}
        alt="skyscraper"
        className="w-full lg:w-auto max-w-[250px] sm:max-w-[400px]"
      />

      <div className="flex flex-col lg:ml-4 lg:flex-row items-center lg:items-start">
        <div className="mt-6 lg:mt-7 text-center lg:text-left">
          <p className="font-Poppins text-[20px] sm:text-[24px] text-white font-normal mb-2">
            Car Lotto
          </p>
          <p className="font-DM Sans text-[14px] sm:text-[15px] text-white pr-0 lg:pr-5">
            Play for a chance to win luxury apartments, cash prizes, and more.
            Your dream home could be just a ticket away!
          </p>
        </div>

        <div className="flex flex-col items-center lg:items-start mt-4 lg:mt-0">
          <div className="flex gap-2 sm:gap-4 justify-center mb-4">
            {["days", "hrs", "mins"].map((label, index) => (
              <div key={index}>
                <div className="font-Poppins bg-white py-2 px-3 sm:px-4 text-[18px] sm:text-[20px] rounded-lg">
                  00
                </div>
                <p className="font-DM Sans text-center font-normal text-white mt-1 text-[12px] sm:text-[14px]">
                  {label}
                </p>
              </div>
            ))}
          </div>
          <Link to="/lottopage">
            <button className="bg-btn-color text-white py-2 px-4 rounded-full w-[200px] sm:w-[250px] font-DM Sans font-normal text-[18px] sm:text-[20px]">
              Play Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CarLotto;
