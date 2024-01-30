import Footer from "../footer/Footer";
import Header from "../header/Header/Header";
import styles from "./Layout.module.css";

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