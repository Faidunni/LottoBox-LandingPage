import verve from "../assets/Images/verve.png";
import visa from "../assets/Images/visa.png";
import mastercard from "../assets/Images/mastercard.png";
import paystack from "../assets/Images/paystack.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const image = [
  {
    img: <img src={visa} alt="visa-logo" />,
  },
  {
    img: <img src={mastercard} alt="mastercard-logo" />,
  },
  {
    img: <img src={paystack} alt="paystack-logo" />,
  },
  {
    img: <img src={verve} alt="verve-logo" />,
  },
];

function Payment() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="px-[15%] py-20">
      <div
        className="flex border border-text-color px-[20%] py-10 justify-between items-center"
        data-aos="fade-right"
      >
        {image.map((item, index) => (
          <div key={index}>{item.img}</div>
        ))}
      </div>
    </section>
  );
}

export default Payment;
