import { mySocials } from "../constants";

const Footer = () => {
  return (
    <footer className="w-full mt-10 border-t border-neutral-800 px-6 py-4 text-sm text-neutral-400">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Left text: Terms & Privacy */}
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 items-center sm:items-start sm:flex-1">
          <p className="hover:text-white cursor-pointer transition">Terms & Conditions</p>
          <p className="hover:text-white cursor-pointer transition">Privacy Policy</p>
        </div>

        {/* Middle: Social icons */}
        <div className="flex gap-4 justify-center sm:flex-1">
          {mySocials.map((social, index) => (
            <a
              href={social.href}
              key={index}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform hover:scale-110"
            >
              <img
                src={social.icon}
                alt={social.name}
                className="w-6 h-6 object-contain hover:drop-shadow-[0_0_6px_#60a5fa]"
              />
            </a>
          ))}
        </div>

        {/* Right text: Copyright */}
        <p className="text-center sm:text-right sm:flex-1">
          © 2025 Vandit. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
