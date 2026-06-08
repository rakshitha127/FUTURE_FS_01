import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = ["About", "Skills", "Experience", "Projects", "Contact"];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
      
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <h1 className="text-xl font-bold text-cyan-400">
          Rakshitha
        </h1>

        {/* Desktop */}
        <ul className="hidden md:flex gap-8 text-gray-300">
          {links.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="hover:text-cyan-400 transition"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-gray-300"
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>

      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden px-6 pb-4 bg-slate-950 border-t border-slate-800">
          <ul className="flex flex-col gap-4 text-gray-300">
            {links.map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  onClick={() => setOpen(false)}
                  className="hover:text-cyan-400"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

    </nav>
  );
}