import { pageContent } from "../../../helpers/constants";

const Footer = () => {
  return (
    <footer className="bg-black py-3 relative z-20">
      <div className="flex items-center justify-center">
        <p className="text-gray-100 text-sm">
          Made with <span>🤍</span> by{" "}
          <a
            href={pageContent.outroContent.github}
            className="underline hover:opacity-80"
            target="_blank"
          >
            Rochdi Belhirch
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
