import Donation from "../component/Donation";
import Footer from "../component/Footer";
import Hero from "../component/Hero";
import HowToPlay from "../component/HowToPlay";
import InstantPage from "../component/InstantPage";
import MagaJackpot from "../component/MagaJackpot";
import Nav from "../component/Nav";
import Payment from "../component/Payment";
import SubNav from "../component/SubNav";

function MainPage() {
  return (
    <>
      <div className="overflow-hidden">
        <Nav />
        <SubNav />
        <Hero />
        <MagaJackpot />
        <InstantPage />
        <HowToPlay />
        <Donation />
        <Payment />
        <Footer />
      </div>
    </>
  );
}

export default MainPage;
