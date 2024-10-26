import Ticket from "../assets/icons/Ticket.png";
import avatar from "../assets/icons/avatar.png";
import cup from "../assets/icons/cup.png";
import beenhere from "../assets/icons/beenhere.png";
import Rectangle from "../assets/icons/Rectangle.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Register = [
  {
    img: <img src={Rectangle} alt="Rectangle" />,
    title: "Register or Login",
    text: "Register or login with your e-mail address or mobile phone number.",
  },
  {
    img: <img src={Rectangle} alt="Rectangle" />,
    title: "Register or Login",
    text: "Register or login with your e-mail address or mobile phone number.",
  },
  {
    img: <img src={Rectangle} alt="Rectangle" />,
    title: "Register or Login",
    text: "Register or login with your e-mail address or mobile phone number.",
  },
  {
    img: <img src={Rectangle} alt="Rectangle" />,
    title: "Register or Login",
    text: "Register or login with your e-mail address or mobile phone number.",
  },
];

const Instructions = [
  {
    img: <img src={avatar} alt="Ticket" />,
    title: "Register or Login",
    text: "Register or login with your e-mail address or mobile phone number.",
    background: "#fff",
  },
  {
    img: <img src={Ticket} alt="Ticket" />,
    title: "Buy Your Ticket",
    text: "Order and pay for your ticket completed with your lucky numbers.",
    background: "#fff",
  },

  {
    img: <img src={beenhere} alt="Rectangle" />,
    title: "Pick Your Numbers",
    text: "Select 5 numbers from the provided set and and get ready to be lucky!",
    background: "#fff",
    font: "18px",
  },
  {
    img: <img src={cup} alt="Rectangle" />,
    title: "Check if You Won!",
    text: (
      <>
        Check the draw results to <br /> see if you have <br /> won!
      </>
    ),
    background: "#fff",
  },
];

function HowToPlay() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <>
      <section className="mt-[120px]  bg-card-bg lg:py-20 py-10">
        <h1
          className="font-Poppins font-bold text-[32px] text-text-color lg:px-[170px] px-4"
          data-aos="fade-right"
        >
          How to Play
        </h1>

        {/* div */}
        <div
          className="grid lg:grid-cols-4 lg:gap-8 lg:px-[170px] lg:mt-[40px] sm:grid-cols-1 px-4 mt-[20px]"
          data-aos="fade-down"
          data-aos-delay="100"
        >
          <div className="flex lg:gap-8 flex-col gap-4 ">
            {Instructions.map((ins, index) => (
              <div
                key={index}
                className="bg-white rounded-lg flex flex-col gap-4 items-center px-2 py-4"
              >
                <div className="mb-2 mt-2">{ins.img}</div>

                <div className="flex justify-between text-center">
                  <div>
                    <p
                      className="font-Poppins font-normal mb-3"
                      style={{
                        fontSize: ins.font || "20px",
                      }}
                    >
                      {ins.title}
                    </p>
                    <p className="text-[#939393] font-DM Sans mb-[7px] leading-[19.2px]">
                      {ins.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="lg:flex gap-7 lg:flex-col hidden">
            {Register.map((reg, index) => (
              <div key={index} className="flex flex-col gap-4 items-center">
                <div className="mb-3">{reg.img}</div>

                <div className="flex justify-between text-center">
                  <div>
                    <p className=" font-Poppins text-[20px] font-normal mb-1">
                      {reg.title}
                    </p>
                    <p
                      className="text-[#939393] font-DM Sans   
                     leading-[19.2px]"
                    >
                      {reg.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="lg:flex gap-7 lg:flex-col hidden">
            {Register.map((reg, index) => (
              <div key={index} className="flex flex-col gap-4 items-center">
                <div className="mb-3">{reg.img}</div>

                <div className="flex justify-between text-center">
                  <div>
                    <p className=" font-Poppins text-[20px] font-normal mb-1">
                      {reg.title}
                    </p>
                    <p
                      className="text-[#939393] font-DM Sans   
                     leading-[19.2px]"
                    >
                      {reg.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="lg:flex gap-7 lg:flex-col hidden">
            {Register.map((reg, index) => (
              <div key={index} className="flex flex-col gap-4 items-center">
                <div className="mb-3">{reg.img}</div>

                <div className="flex justify-between text-center">
                  <div>
                    <p className=" font-Poppins text-[20px] font-normal mb-1">
                      {reg.title}
                    </p>
                    <p
                      className="text-[#939393] font-DM Sans   
                     leading-[19.2px]"
                    >
                      {reg.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default HowToPlay;
