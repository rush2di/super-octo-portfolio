import Logo from "components/Logo";

const HeaderMobile = () => {
  return (
    <div className="bg-gray-5 py-1 z-20 relative shadow-gray-5 pb-1-5 shadow-2xl md:hidden">
      <div className="container">
        <div className="flex items-center justify-between">
          <div className="block">
            <Logo />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderMobile;
