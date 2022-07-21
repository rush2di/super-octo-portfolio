import Link from "next/link";
import { useState } from "react";
import { v4 as uuid } from "uuid";
import { motion, AnimatePresence } from "framer-motion";
import { Spiral as Hamburger } from "hamburger-react";

import Logo from "components/Logo";
import { mainMenu } from "../constants";

const HeaderMobile = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="bg-gray-5 py-1 z-20 relative shadow-gray-5 pb-1-5 shadow-2xl md:hidden">
      <div className="container">
        <div className="flex items-center justify-between">
          <div className="block">
            <Logo />
          </div>
          <Hamburger
            color="#000000"
            label="Open menu"
            toggled={isOpen}
            toggle={setOpen}
          />
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
          >
            <div className="container">
              <div className="relative">
                <ul className="absolute top-1 left-0 w-full flex flex-col items-center justify-center bg-gray-5 py-1-5 px-1 border rounded">
                  {mainMenu.map((item) => {
                    return (
                      <li
                        key={uuid()}
                        className="mb-1-5 last:mb-0"
                        onClick={() => setOpen(false)}
                      >
                        <Link href={item.href}>
                          <a className="text-gray-600 hover:text-gray-400 font-medium">
                            {item.title}
                          </a>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default HeaderMobile;
