import styles from "./Layout.module.css";
import Footer from "../footer/Footer";
import Header from "../header/Header/Header";

const Layout = ({ children }) => {
  return (
    <div style={{ zIndex: 3 }}>
      <main className={styles.mainWrapper}>
      <Header  />
        {children}
      </main>
      <Footer/>
    </div>
  );
};

export default Layout;