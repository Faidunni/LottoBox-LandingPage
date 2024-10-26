import Vector from "../assets/icons/Vector.png";

function EuroDonation() {
  return (
    <section className="py-10 px-[15%]">
      {/* EuroJackpot-Information  */}
      <p className="text-promo-code-text font-DM Sans font-[500] text-[18.75px] mb-1">
        Useful EuroJackpot information
      </p>
      <p className="font-DM Sans font-[200] text-promo-code-text">
        Explore more about the lottery in our lottery-related sections
      </p>
      <div className="flex gap-4 mt-4">
        <div>
          <div className="border border-shape-color rounded-sm mb-4">
            <div className="pl-4 pr-[150px] py-4">
              <p className="font-DM Sans font-[500] text-[19.53px] text-promo-code-text mb-2">
                Results & Prize Breakdown
              </p>
              <p className="font-DM Sans font-[200] text-promo-code-text mb-6">
                Check your results and winning numbers!
              </p>
              <div className="flex items-center gap-3 mb-2">
                <p className="font-DM Sans text-[14.13px] text-promo-code-text underline font-bold">
                  EuroJackpot Results
                </p>
                <img src={Vector} alt="Forward arrow" />
              </div>
            </div>
          </div>
          <div className="border border-shape-color rounded-sm">
            <div className="pl-4 pr-[150px] py-4">
              <p className="font-DM Sans font-[500] text-[19.53px] text-promo-code-text mb-2">
                EuroJackpot
              </p>
              <p className="font-DM Sans font-[200] text-promo-code-text mb-6">
                EuroJackpot
              </p>
              <div className="flex items-center gap-3 mb-3">
                <p className="font-DM Sans text-[14.13px] text-promo-code-text underline font-bold">
                  Bet on EuroJackpot
                </p>
                <img src={Vector} alt="Forward arrow" />
              </div>
            </div>
          </div>
        </div>

        <div className="border border-shape-color rounded-sm h-1/5">
          <div className="pl-4 pr-[120px] py-4">
            <p className="font-DM Sans font-[500] text-[18.91px] text-promo-code-text mb-2">
              Help & FAQ
            </p>
            <p className="font-DM Sans font-[200] text-promo-code-text mb-6">
              Read our most frequently asked questions!
            </p>
            <div className="flex items-center gap-3 mb-2">
              <p className="font-DM Sans text-[14.13px] text-promo-code-text underline font-bold">
                EuroJackpot FAQ
              </p>
              <img src={Vector} alt="Forward arrow" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EuroDonation;
