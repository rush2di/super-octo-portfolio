import { useState } from "react";
import { motion } from "framer-motion";
import { Spiral as Hamburger } from "hamburger-react";

import Logo from "components/Logo";

const HeaderMobile = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="bg-gray-5 py-1 z-20 relative shadow-gray-5 pb-1-5 shadow-2xl md:hidden">
      <div className="container">
        <div className="flex items-center justify-between">
          <div className="block">
            <Logo />
          </div>
          <Hamburger label="Open menu" toggled={isOpen} toggle={setOpen} />
        </div>
      </div>
      {isOpen && (
        <motion.div className="bg-white py-1-5 px-1">
          <ul className="flex flex-col items-center justify-center">
            <li></li>
          </ul>
        </motion.div>
      )}
    </div>
  );
};

export default HeaderMobile;
