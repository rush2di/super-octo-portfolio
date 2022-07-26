import GrainOpt from "components/GrainOpt/inedx";
import Footer from "./Footer";
import Header from "./Header";
import HeaderMobile from "./HeaderMobile";

const Layout = ({ children }) => {
  return (
    <div>
      <GrainOpt />
      <Header />
      <HeaderMobile />
      <div className="guides__wrapper">
        <div className="guides">
          <div className="guides__container">
            <div className="guides__guide" />
            <div className="guides__guide" />
            <div className="guides__guide" />
            <div className="guides__guide" />
            <div className="guides__guide" />
          </div>
        </div>
      </div>
      <main className="mt-2 min-h-screen">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
