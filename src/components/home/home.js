// import Link from "next/link";
import CardHome from "../card-home.js";
import styles from "./home.module.css";

function Home() {
  return (
    <div className={styles.cardHome}>
      <CardHome
        header="Hex to RGB"
        description="
        Converts Hex color codes to RGB HTML value format for use in web
        design and CSS"
        anchor="hex-to-rgb"
      />
      <CardHome
        header="RGB to Hex"
        description="
        Converts RGB color codes to Hex HTML value format for use in web
          design and CSS"
        anchor="rgb-to-hex"
      />
    </div>
  );
}

export default Home;
