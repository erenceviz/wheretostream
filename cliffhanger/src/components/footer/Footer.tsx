import Logo from "@/components/header/Logo/Logo";
import styles from "./Footer.module.css";

// fetch("https://juanroldan1989-moviequotes-v1.p.rapidapi.com/api/v1/quotes", {
//   method: "GET",
//   headers: {
//     Authorization: "Token token=yd8WzkWNEEzGtqMSgiZBrwtt",
//     "X-RapidAPI-Key": "356152ba72mshbf5a4cf4d2f59a1p1c77d1jsn9760af3d3d0e",
//     "X-RapidAPI-Host": "juanroldan1989-moviequotes-v1.p.rapidapi.com",
//   },
// })
// .then((response) => {
// if (!response.ok) {
//     throw new Error("Network response was not ok");
// }
// return response.json();
// })
// .then((data) => {
// console.log("Top 10 Movie Quotes:", data);
// })
// .catch((error) => {
// console.error("There was an error fetching the data:", error);
// });

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.upperFooter}>
        <h4>Best Movie Quotes</h4>
        <div className={styles.seperationline}></div>
        <div className={styles.quotes}>
          <div className={styles.quote}>
            <p>
              It's a Quote <br /> with a break.{" "}
            </p>
            <p>Filmtitel, 2016</p>
          </div>
          <div className={styles.quote}>
            <p>
              It's a Quote <br /> with a break.{" "}
            </p>
            <p>Filmtitel, 2016</p>
          </div>
          <div className={styles.quote}>
            <p>
              It's a Quote <br /> with a break.{" "}
            </p>
            <p>Filmtitel, 2016</p>
          </div>
        </div>
      </div>
      <div className={styles.lowerFooter}>
        <div className={styles.logo}>
          <Logo />
        </div>
        <div className={styles.copyright}>
          <p>Copyright © 2023 - Ceviz & Berg</p>
          <p>Designed by Eren Ceviz und Vivien Berg</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
