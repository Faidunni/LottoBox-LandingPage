import Nav from "../component/Nav";
import NumberSelection from "../sections/NumberSelection";
import Ticket from "../sections/Ticket";
import EuroDonation from "../sections/EuroDonation";
import { Link } from "react-router-dom";
import LottoSubNav from "../component/LottoSubNav";

const LottoPage = () => {
  return (
    <section className="mb-[20%]">
      <Link to="/">
        <Nav />
      </Link>

      {/* subnav header */}
      <LottoSubNav />
      {/* NumberSelection */}
      <NumberSelection />
      <Ticket />
      <EuroDonation />
    </section>
  );
};

export default LottoPage;
