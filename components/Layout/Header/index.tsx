import { v4 as uuid } from "uuid";
import Link from "next/link";

import Logo from "components/Logo";
import { mainMenu } from "../constants";

const Header = () => {
  return (
    <div className="hidden bg-gray-5 py-1 z-20 relative shadow-gray-5 pb-1-5 shadow-2xl md:block">
      <div className="container">
        <div className="flex items-center justify-between">
          <div className="block">
            <Logo />
          </div>
          <ul className="flex items-center justify-end">
            {mainMenu.map((item) => {
              return (
                <li key={uuid()}>
                  <Link href={item.href}>
                    <a className="text-gray-600 ml-2-5 hover:text-gray-400">
                      {item.title}
                    </a>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
