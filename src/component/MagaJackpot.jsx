import CarLotto from "../sections/CarLotto";
import HomeLotto from "../sections/HomeLotto";
import arrow from "../assets/icons/arrow_forward.svg";

function MagaJackpot() {
  return (
    <>
      <section className="my-10">
        <div className="flex justify-between px-[170px]  ">
          <h1 className="font-Poppins font-bold text-[32px] text-text-color">
            Mega Jackpots
          </h1>

          <button className="font-DM Sans font-normal text-[24px] flex items-center border border-text-color text-text-color py-2 px-6 gap-4 rounded-full">
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
