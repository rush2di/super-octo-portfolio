import Image from "next/image";

const Logo = () => {
  return (
    <div className="flex items-center">
      <div className="relative w-2-25 h-2-25 sm:w-3 sm:h-3">
        <Image
          src="/images/rb_logo.svg"
          layout="fill"
          alt="Rochdi Belhirch logo"
          priority
        />
      </div>
      <div className="block ml-0-5 sm:ml-1">
        <span className="text-sm text-gray-900 font-semibold block">
          Rochdi Belhirch
        </span>
        <span className="text-sm text-gray-900 block font-normal">
          Designer &#38; Frontend Developer
        </span>
      </div>
    </div>
  );
};

export default Logo;
