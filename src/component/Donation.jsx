import box from "../assets/icons/box.svg";
import circle from "../assets/icons/Circle.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Donation() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <section className="bg-custom-gradient p-[48px] flex flex-col items-center ">
      <h1
        className="font-Poppins text-[64px] text-center font-normal  text-white mb-8"
        data-aos="fade-down"
      >
        Dream Big. Do Good.
      </h1>
      <div className="flex gap-8 px-[60px] mb-10" data-aos="fade-down">
        <div className="lg:items-center flex flex-col text-white w-[216px] text-center">
          <img src={box} alt="warpped present" />
          <p className="font-Poppins lg:text-[20px] leading-[19.2px] mt-8 lg:block hidden">
            Your Donation <br /> Your Choice
          </p>
          <p className="font-Poppins mt-8 lg:hidden block">
            Your Donation Your Choice
          </p>

          <p className="font-DM Sans lg:leading-[19.2px] px-2 mt-3 lg:text-[16px] text-2xl leading-[30px]">
            Win a lottery and donate to one of our charity partners
          </p>
        </div>
        <div className="lg:flex gap-8  hidden">
          <img src={circle} alt="circle" />
          <img src={circle} alt="circle" />
          <img src={circle} alt="circle" />
          <img src={circle} alt="circle" />
        </div>
      </div>
      <div className="mt-10" data-aos="fade-down">
        <button className="bg-white font-DM Sans text-[20px] rounded-full py-4 px-10 font-normal ">
          {" "}
          Enter Now
        </button>
      </div>
    </section>
  );
}

export default Donation;
