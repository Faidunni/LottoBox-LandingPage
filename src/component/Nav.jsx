import logo from "../assets/Images/logo.svg";

function Nav() {
  return (
    <header className="flex justify-between items-center w-full p-nav-padding  font-DM Sans">
      <img src={logo} alt="lottobox-logo" />
      <div className="flex gap-2">
        <button className="bg-Navbtn-bg border-none py-2 px-4 rounded-lg text-white font-normal">
          Register
        </button>
        <button className="border py-2 px-4 text-nav-text font-normal border-nav-text rounded-lg">
          Login
        </button>
      </div>
    </header>
  );
}

export default Nav;
