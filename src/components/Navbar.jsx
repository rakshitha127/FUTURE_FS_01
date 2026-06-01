import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";



export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    "About",
    "Skills",
    "Experience",
    "Projects",
    "Contact",
  ];

  const [active, setActive] = useState("hero");

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-slate-950/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <h1 className="text-xl font-bold text-cyan-400">
          Rakshitha
        </h1>

        <ul className="hidden md:flex gap-8">
          {links.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="hover:text-cyan-400"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden"
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </nav>
  );
}