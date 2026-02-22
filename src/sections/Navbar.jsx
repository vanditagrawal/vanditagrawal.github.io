import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll"; // <- Import Link from react-scroll
import menuIcon from "../assets/menu.svg";
import closeIcon from "../assets/close.svg";

// Navigation Component
function Navigation({ closeMenu }) {
  return (
    <ul className="nav-ul flex flex-col sm:flex-row gap-4">
      <li className="nav-li">
        <Link 
          to="home" 
          smooth={true} 
          duration={500} 
          offset={-80} // Adjust for navbar height
          onClick={closeMenu}
          className="cursor-pointer nav-link"
        >Home</Link>
      </li>
      <li className="nav-li">
        <Link 
          to="about" 
          smooth={true} 
          duration={500} 
          offset={-80}
          onClick={closeMenu}
          className="cursor-pointer nav-link"
        >About</Link>
      </li>
      <li className="nav-li">
        <Link 
          to="work" 
          smooth={true} 
          duration={500} 
          offset={-80}
          onClick={closeMenu}
          className="cursor-pointer nav-link"
        >Work</Link>
      </li>
      <li className="nav-li">
        <Link 
          to="contact" 
          smooth={true} 
          duration={500} 
          offset={-80}
          onClick={closeMenu}
          className="cursor-pointer nav-link"
        >Contact</Link>
      </li>
    </ul>
  );
}

// Navbar Component
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMobileMenu = () => setIsOpen(false);

  return (
    <div className="fixed inset-x-0 z-20 w-full backdrop-blur-lg bg-primary/40">
      <div className="mx-auto c-space max-w-7xl">
        <div className="flex items-center justify-between py-2 sm:py-0">
          <Link 
            to="home" 
            smooth={true} 
            duration={500} 
            offset={-80}
            className="text-xl font-bold transition-colors text-neutral-400 hover:text-white cursor-pointer"
          >
            Vandit
          </Link>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex cursor-pointer text-neutral-400 hover:text-white focus:outline-none sm:hidden"
          >
            <img
              src={isOpen ? closeIcon : menuIcon}
              className="w-6 h-6"
              alt="toggle"
            />
          </button>

          <nav className="hidden sm:flex">
            <Navigation closeMenu={() => {}} />
          </nav>
        </div>
      </div>

      {isOpen && (
        <motion.div
          className="block overflow-hidden text-center sm:hidden"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <nav className="pb-5">
            <Navigation closeMenu={closeMobileMenu} />
          </nav>
        </motion.div>
      )}
    </div>
  );
};

export default Navbar;
