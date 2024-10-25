import house from "../assets/Images/house.png";

function HomeLotto() {
  return (
    <div className="bg-custom-gradient flex p-[48px] w-[920px] my-10 justify-between gap-2">
      <img src={house} alt="skyscrapper" />

      <div className="flex ">
        <div className="mt-7">
          <p className="font-Poppins text-[24px] text-white font-normal mb-2">
            Home Lotto
          </p>
          <p className="font-DM Sans  text-[15px] text-white pr-5">
            Play for a chance to win luxury apartments, cash prizes, and more.
            Your dream home could be just a ticket away!
          </p>
        </div>

        <div className="flex flex-col">
          <div className="flex gap-4 justify-center mb-4">
            <div>
              <div className="font-Poppins bg-white p-2 font-normal text-[20px] rounded-lg">
                00
              </div>
              <p className="font-DM Sans text-center font-normal text-white mt-1">
                days
              </p>
            </div>
            <div>
              <div className="font-Poppins bg-white p-2 font-normal text-[20px] rounded-lg">
                00
              </div>
              <p className="font-DM Sans text-center font-normal text-white mt-1">
                hrs
              </p>
            </div>
            <div>
              <div className="font-Poppins bg-white p-2 font-normal text-[20px] rounded-lg">
                00
              </div>
              <p className="font-DM Sans text-center font-normal text-white mt-1">
                mins
              </p>
            </div>
          </div>
          <button className="bg-nav-text text-white py-2 px-4 rounded-full w-[250px] font-DM Sans font-normal text-[20px]">
            Play Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default HomeLotto;
