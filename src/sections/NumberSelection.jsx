import dice from "../assets/Images/Dice.png";
import trash from "../assets/Images/Trash.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function NumberSelection() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <>
      <section className="bg-custom-gradient py-10 lg:px-[15%] px-4">
        <div>
          <p className="font-DM Sans text-white" data-aos="fade-left">
            Drawn today: 2h 47m
          </p>
          <p
            className="font-DM Sans font-normal text-white text-[20.81px] my-4 lg:ml-4 ml-0"
            data-aos="fade-left"
          >
            Home Lotto
          </p>
          <div className="flex justify-between mt-8 mb-6 items-center">
            <button
              className="bg-white py-3 px-8 rounded-full font-DM Sans font-[200]"
              data-aos="fade-left"
            >
              Classic
            </button>
            <p className="font-DM Sans" data-aos="fade-right">
              From N500.00
            </p>
          </div>
        </div>
        <div data-aos="fade-down">
          <div className="bg-card-bg p-3 rounded-xl mx-auto w-full max-w-[21rem] flex ">
            <img src={trash} alt="dice" className="h-[45px]" />
            <p className="text-[#012406] font-[500] text-center font-DM Sans ">
              Select 5 numbers and 3 Euronumbers
            </p>
            <img src={dice} alt="trash" />
          </div>
          <div className="bg-card-bg px-6 py-2  mx-auto w-full max-w-[21rem] rounded-b-xl">
            {/* Main numbers grid */}
            <div className="grid grid-cols-5 gap-1 mt-4">
              {Array.from({ length: 50 }, (_, i) => (
                <button
                  key={i}
                  className=" p-2 font-DM Sans font-[500] text-[#012406] hover:bg-green-500 hover:text-white bg-white"
                >
                  {i + 1}
                </button>
              ))}
            </div>

            {/* Euronumbers grid */}
            <div className="my-3">
              <h3 className="font-[500] text-[#012406] mb-2 text-center font-DM Sans">
                Euronumbers
              </h3>
              <div className="grid grid-cols-6 gap-2">
                {Array.from({ length: 12 }, (_, i) => (
                  <button
                    key={i}
                    className="border p-2 rounded-full text-gray-700 hover:bg-green-500 hover:text-white bg-white font-DM Sans font-normal"
                  >
                    {i + 1}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default NumberSelection;
