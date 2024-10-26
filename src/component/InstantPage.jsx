import arrow from "../assets/icons/arrow_forward.svg";
import wheeloffortune from "../assets/Images/wheeloffortune.png";
import pick5 from "../assets/Images/pick5.png";
import kenoking from "../assets/Images/kenoking.png";
import Bingo from "../assets/Images/Bingo.png";
import arrowImg from "../assets/Images/greaterthan.svg";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const InstantGames = [
  {
    img: <img src={wheeloffortune} alt="wheeloffortune" />,
    title: "Next draw: 1 day, 5 hours",
    text: "100 players today",
    button: "Play Now",
    arrowImg: <img src={arrowImg} alt="forward arrow" />,
    link: "/lottopage",
  },
  {
    img: <img src={pick5} alt="pick 5" />,
    title: "Next draw: 1 day, 5 hours",
    text: "90 players today",
    button: "Play Now",
    arrowImg: <img src={arrowImg} alt="forward arrow" />,
    link: "/lottopage",
  },
  {
    img: <img src={Bingo} alt="Bingo" />,
    title: "Next draw: 1 day, 5 hours",
    text: "80 players today",
    button: "Play Now",
    arrowImg: <img src={arrowImg} alt="forward arrow" />,
    link: "/lottopage",
  },
  {
    img: <img src={kenoking} alt="kenoking" />,
    title: "Next draw: 1 day, 5 hours",
    text: "70 players today",
    button: "Play Now",
    arrowImg: <img src={arrowImg} alt="forward arrow" />,
    link: "/lottopage",
  },
];

function InstantPage() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <>
      <section className="mt-[120px] mb-[40px]">
        <div className="flex justify-between px-[170px]" data-aos="fade-right">
          <h1 className="font-Poppins font-bold text-[32px] text-text-color">
            Instant Games
          </h1>

          <button className="font-DM Sans font-normal text-[24px] flex items-center border border-text-color text-text-color py-2 px-6 gap-4 rounded-full">
            See All
            <span>
              <img src={arrow} alt="forward arrow" />
            </span>
          </button>
        </div>

        {/* instant games card */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 px-[170px] mt-[40px]"
          data-aos="fade-down"
        >
          {InstantGames.map((game, index) => (
            <div
              key={index}
              className="bg-card-gradient border-2 border-shape-color flex flex-col gap-4"
            >
              {game.img}
              <div className="flex justify-between px-8 pt-4 pb-8">
                <div>
                  <p className=" font-DM Sans text-[14px] font-normal">
                    {game.title}
                  </p>
                  <p className="text-[#939393] font-DM Sans  font-normal mt-1">
                    {game.text}
                  </p>
                </div>

                <Link to={game.link}>
                  <button className="bg-nav-text text-white flex items-center justify-center py-2 rounded-lg px-6 gap-2 font-DM Sans font-normal text-[24px]">
                    {game.button}
                    <span>{game.arrowImg}</span>
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default InstantPage;
