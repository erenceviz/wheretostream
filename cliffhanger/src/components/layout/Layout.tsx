import Header from "../header/Header/Header";

const Layout = ({ children }) => {
  return (
    <div style={{ zIndex: 3 }}>
      <Header  />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
