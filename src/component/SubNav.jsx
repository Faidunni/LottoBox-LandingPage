import border from "../assets/icons/Border.png";

const navLinks = [
  { name: "Lotteries", href: "#" },
  { name: "Results", href: "#" },
  { name: "Rules", href: "#" },
  {
    name: "How to play",
    href: "#",
    img: <img src={border} alt="" />,
  },
  { name: "FAQ", href: "#" },
  { name: "Blog", href: "#" },
  { name: "About", href: "#" },
  { name: "Contact", href: "#" },
];

function SubNav() {
  return (
    <nav className="bg-subnav-bg px-[27%] py-6 w-full">
      <ul className="font-DM Sans font-normal text-white flex justify-between items-center">
        {navLinks.map((link, index) => (
          <li key={index} className="flex items-center gap-2">
            <a href={link.href} className="flex items-center gap-2">
              {link.name}
              <div>{link.img && <span>{link.img}</span>}</div>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default SubNav;
