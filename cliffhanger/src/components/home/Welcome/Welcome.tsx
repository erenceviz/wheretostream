import YourComponent from "@/components/button/Button";
import styles from "./Welcome.module.css";
import { Button } from "@mui/material";

function WelcomePage() {
  return (
  <>
  <div className={styles.opener}>
    <div className={styles.openerContent}>
        <h2>Finde Serien und Filme auf <br/> deinen gewünschten <br/> Streaming-Portalen</h2>
        <Button className={styles.getStartedBtn} variant="contained">Get Started!</Button>
    </div>
    <div className={styles.threePopularMovies}>
        <img src="https://m.media-amazon.com/images/M/MV5BNjU3N2QxNzYtMjk1NC00MTc4LTk1NTQtMmUxNTljM2I0NDA5XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg" alt="" />
        <img src="https://static.posters.cz/image/750/poster/avatar-limited-ed-one-sheet-sun-i7182.jpg" alt="" />
        <img src="https://m.media-amazon.com/images/I/71qxaSCcuAL._AC_UF1000,1000_QL80_.jpg" alt="" />
    </div>
  </div>
  
  </>
  );
}

export default WelcomePage;
