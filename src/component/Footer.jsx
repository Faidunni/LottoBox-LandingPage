import greyLogo from "../assets/Images/greyLogo.svg";
import triangle from "../assets/Images/triangle.png";
import gaming from "../assets/Images/Gaming.png";
import tiktok from "../assets/icons/tiktok.svg";
import linkedIn from "../assets/icons/linkedIn.svg";
import facebook from "../assets/icons/facebook.svg";
import instagram from "../assets/icons/instagram.svg";

// Socials array with JSX image elements
const socials = [
  {
    img: <img src={facebook} alt="facebook icon" />, // Remove quotes around JSX
  },
  {
    img: <img src={instagram} alt="instagram icon" />,
  },
  {
    img: <img src={tiktok} alt="tiktok icon" />,
  },
  {
    img: <img src={linkedIn} alt="LinkedIn icon" />,
  },
];

function Footer() {
  return (
    <section className="bg-card-bg flex flex-col items-center py-10">
      <img src={greyLogo} alt="logo" className="mb-10" />
      <div className="flex gap-10 mt-1 mb-10">
        <img src={triangle} alt="triangle" />
        <img src={gaming} alt="gaming logo" />
      </div>
      <p className="font-DM Sans text-footer-text">
        © 2024 lottobox.ng . All rights reserved.
      </p>
      <div className="flex gap-4 mt-7">
        {socials.map((item, index) => (
          <div key={index}>{item.img}</div>
        ))}
      </div>
    </section>
  );
}

export default Footer;
