import CarLotto from "../sections/CarLotto";
import HomeLotto from "../sections/HomeLotto";
import arrow from "../assets/icons/arrow_forward.svg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function MagaJackpot() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <>
      <section className="my-10">
        <div
          className="flex justify-between lg:px-[170px] px-4 items-center"
          data-aos="fade-down"
        >
          <h1 className="font-Poppins font-bold lg:text-[32px] text-[18px] text-text-color">
            Mega Jackpots
          </h1>
          <button className="font-DM Sans font-normal lg:text-[24px] flex items-center border border-text-color text-text-color py-2 px-6 gap-4 rounded-full">
            See All
            <span>
              <img src={arrow} alt="forward arrow" />
            </span>
          </button>
        </div>
        <div className="flex flex-col items-center">
          <HomeLotto />
          <CarLotto />
        </div>
      </section>
    </>
  );
}

export default MagaJackpot;
