import Image from "next/image";
import arrow from "public/images/arrow.svg";

const Scroll = () => {
  return (
    <div className="flex items-center justify-center flex-col text-gray-900 sm:hidden pt-0-85 pb-4">
      <p className="uppercase font-bold text-sm tracking-[3px] text-gray-900">
        Scroll
      </p>
      <div className="motion-safe:animate-arrow mt-2-75">
        <Image src={arrow} alt="scroll down arrow" />
      </div>
    </div>
  );
};

export default Scroll;
