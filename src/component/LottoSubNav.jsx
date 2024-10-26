import SubNav from "./SubNav";
import { CiCalendar } from "react-icons/ci";
import { IoWalletOutline } from "react-icons/io5";
import { TbCircleNumber1 } from "react-icons/tb";

const Details = [
  {
    title: "Draw every Tuesday & Friday",
    icon: <CiCalendar />,
  },
  {
    title: "Bet from €6.00 per ticket",
    icon: <IoWalletOutline />,
  },
  {
    title: "5 numbers & 3 'Euronumbers'",
    icon: <TbCircleNumber1 />,
  },
];

function LottoSubNav() {
  return (
    <div className="bg-[#56ae2d] pb-4 shadow-md">
      <SubNav />
      <div className=" flex items-center py-2 justify-center gap-20 bg-white">
        {Details.map((detail, index) => (
          <div key={index} className="  flex items-center gap-2">
            <div className="w-[20px] h-[20px] flex items-center justify-center ">
              {detail.icon}
            </div>
            <div>
              <h3 className="font-DM Sans text-[13.34px] font-[500] text-[#012406]">
                {detail.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LottoSubNav;
