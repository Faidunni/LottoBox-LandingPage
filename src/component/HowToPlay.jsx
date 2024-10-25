import Ticket from "../assets/icons/Ticket.png";
import avatar from "../assets/icons/avatar.png";
import cup from "../assets/icons/cup.png";
import beenhere from "../assets/icons/beenhere.png";
import Rectangle from "../assets/icons/Rectangle.png";

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
  return (
    <>
      <section className="mt-[120px]  bg-card-bg py-20">
        <h1 className="font-Poppins font-bold text-[32px] text-text-color px-[170px] ">
          How to Play
        </h1>

        {/* div */}
        <div className="grid grid-cols-4 gap-8 px-[170px] mt-[40px]">
          <div className="flex gap-8 flex-col ">
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
          <div className="flex gap-7 flex-col">
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
          <div className="flex gap-7 flex-col">
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
          <div className="flex gap-7 flex-col">
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
