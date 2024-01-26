import Footer from "../footer/Footer";
import Header from "../header/Header/Header";

const Layout = ({ children }) => {
  return (
    <div style={{ zIndex: 3 }}>
      <Header  />
      <main>{children}</main>
      <Footer/>
    </div>
  );
};

export default Layout;
