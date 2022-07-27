import { outroContent } from "../../../constants";

const Footer = () => {
  return (
    <footer className="bg-black py-3 relative z-20">
      <div className="flex items-center justify-center">
        <p className="text-gray-100 text-sm">
          Made with <span>🤍</span> by{" "}
          <a href={outroContent.github} target="_blank" className="underline hover:opacity-80">
            Rochdi Belhirch
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
