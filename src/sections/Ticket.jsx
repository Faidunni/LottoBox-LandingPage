import { useState } from "react";
import number2 from "../assets/icons/number2.png";
import number3 from "../assets/icons/number3.png";
import toggle from "../assets/icons/toggle.png";
import settings from "../assets/icons/settings.png";
import flash from "../assets/icons/flash.png";
import cart from "../assets/icons/cart.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const numbers = [
  {
    number: 1,
  },
  {
    number: 2,
  },
  {
    number: 4,
  },
  {
    number: 8,
  },
  {
    number: 26,
  },
  {
    number: 52,
  },
];

function Ticket() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <section className="py-10 lg:px-[15%] px-4">
      {/* Add prome code  */}
      <div className="flex lg:flex-row gap-6 flex-col">
        <div className="">
          <div
            className="flex gap-4 items-center align-middle mb-3"
            data-aos="fade-right"
          >
            <img src={number2} alt="number-2" />
            <p className="font-DM Sans font-[500] lg:text-[18.91px] ">
              Select the duration of your ticket
            </p>
          </div>
          <div
            className="bg-white shadow-xl rounded-lg p-4"
            data-aos="fade-right"
          >
            <div className="flex justify-between mb-4">
              <p className="font-DM Sans text-[#012406] text-[15.75px] font-[500]">
                How many weeks?
              </p>
              <p className="font-DM Sans text-[#012406] text-[14.75px] font-[500]">
                €0.00
              </p>
            </div>
            <div className="flex justify-between mb-3">
              {numbers.map((num, index) => (
                <div
                  key={index}
                  className={`${
                    activeIndex === index
                      ? "bg-yellow-400"
                      : "bg-transparent border border-[#D9D9D9]"
                  } font-DM Sans font-[500] lg:text-[15.75px] lg:px-9 px-4 py-2 cursor-pointer`}
                  onClick={() => setActiveIndex(index)}
                >
                  {num.number}
                </div>
              ))}
            </div>
            <div className="bg-card-bg rounded-lg px-3 py-2">
              <div className="flex justify-between items-center">
                <p className="font-DM Sans font-[500] text-[#012406]">
                  Auto renew
                </p>
                <div>
                  <img src={toggle} alt="toggle" />
                </div>
              </div>
              <button className="bg-ticket-gradient font-DM Sans font-[900] text-[8.91px] px-2 rounded-sm text-white mb-4">
                NEVER MISS A DRAW!
              </button>
              <p className="font-DM Sans font-[200] text-[13px] mb-4">
                Automatically renew your tickets for upcoming draws. Payment
                taken every week. Cancel any <br /> time.
              </p>
            </div>
            <div className="bg-card-bg rounded-lg px-3 py-2 mt-3">
              <div className="flex justify-between items-center">
                <p className="font-DM Sans font-[500]">Jackpot Hunt</p>
                <div>
                  <img src={toggle} alt="toggle" />
                </div>
              </div>

              <p className="font-DM Sans font-[200] text-[13px] mb-4">
                Automatically renew your tickets for upcoming draws. Payment
                taken every week. Cancel any <br /> time.
              </p>
            </div>
          </div>
          <div
            className="flex gap-4 items-center align-middle mt-6 mb-3"
            data-aos="fade-right"
          >
            <img src={number3} alt="number-3" />
            <p className="font-Poppins font-[500] lg:text-[19.22px] text-[#012406] pr-8 hidden lg:block">
              Want to boost your big wins with one of our exclusive <br />{" "}
              features?
            </p>
            <p className="font-Poppins font-[500] lg:text-[19.22px] text-[#012406] lg:hidden block">
              Want to boost your big wins with one of our exclusive features?
            </p>
          </div>
          <div
            className="bg-white shadow-xl rounded-lg p-4"
            data-aos="fade-right"
          >
            <div className="flex justify-between items-center">
              <div className="flex gap-3">
                <div>
                  <img src={settings} alt="settings" />
                </div>

                <p className="font-DM Sans text-[#012406] font-[500] text-[14.5px]">
                  Double Your Jackpot
                </p>
              </div>
              <div>
                <img src={toggle} alt="toggle" />
              </div>
            </div>
            <p className="text-[11.44px] text-[#012406] font-DM Sans font-[500]">
              + €2.00 per line
            </p>
            <p className="text-[13px] text-[#012406] font-DM Sans font-[200] mt-2">
              Exclusive to Lottoland Double the jackpot from €23 million to a
              staggering €46 million and win even <br /> bigger.
            </p>
          </div>
        </div>
        <div
          className="border border-[#B2B8B4] h-[225px] px-4 py-6 rounded-sm lg:shadow-0 shadow-xl"
          data-aos="fade-left"
        >
          <p className="font-DM Sans font-[700] text-[14.15px] text-promo-code underline mb-5">
            Add promo code
          </p>
          <div className="flex justify-between mb-4">
            <p className="font-DM Sans font-[500] text-[15.5px] text-[#012406]">
              No lines
            </p>
            <p className="font-DM Sans font-[500] text-[14.5px]">€0.00</p>
          </div>
          <button className="bg-shape-color flex py-2 px-[68px] align-middle items-center rounded-full gap-2 mb-3">
            <img src={flash} alt="flash-icon" />
            <p className="font-DM Sans font-[500] text-[14.5px]   text-[#bbbaba]">
              QUICK <span> BUY </span>
            </p>
          </button>
          <button className="flex py-2 px-[58px] align-middle items-center rounded-full gap-2 mb-3 justify-center">
            <img src={cart} alt="cart-icon" />
            <p className="font-DM Sans font-[500] text-[14.5px]   text-[#bbbaba]">
              ADD TO CART{" "}
            </p>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Ticket;
