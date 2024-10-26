import React from "react";
import car from "../assets/Images/car.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const CarLotto = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div
      className="bg-background-color flex p-[48px] w-[920px]  justify-between gap-2"
      data-aos="fade-left"
    >
      <img src={car} alt="skyscrapper" />

      <div className="flex ml-4">
        <div className="mt-7">
          <p className="font-Poppins text-[24px] text-white font-normal mb-2">
            Car Lotto
          </p>
          <p className="font-DM Sans  text-[15px] text-white pr-5">
            Play for a chance to win luxury apartments, cash prizes, and more.
            Your dream home could be just a ticket away!
          </p>
        </div>

        <div className="flex flex-col">
          <div className="flex gap-4 justify-center mb-4">
            <div>
              <div className="font-Poppins bg-white p-2 font-normal text-[20px] rounded-lg">
                00
              </div>
              <p className="font-DM Sans text-center font-normal text-white mt-1">
                days
              </p>
            </div>
            <div>
              <div className="font-Poppins bg-white p-2 font-normal text-[20px] rounded-lg">
                00
              </div>
              <p className="font-DM Sans text-center font-normal text-white mt-1">
                hrs
              </p>
            </div>
            <div>
              <div className="font-Poppins bg-white p-2 font-normal text-[20px] rounded-lg">
                00
              </div>
              <p className="font-DM Sans text-center font-normal text-white mt-1">
                mins
              </p>
            </div>
          </div>
          <button className="bg-btn-color text-white py-2 px-4 rounded-full w-[250px] font-DM Sans font-normal text-[20px]">
            Play Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarLotto;
