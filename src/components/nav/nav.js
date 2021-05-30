import Link from "next/link";
import styles from "./nav.module.css";

function Navigator() {
  return (
    <nav className={styles.navigator}>
      <Link href="/" className={styles.navigator}>
        <a>
          <img src="/logo.png" alt="logo-png" />
        </a>
      </Link>
      <Link href="rgb-to-hex">Hex to RGB</Link>
      <Link href="hex-to-rgb">RGB to Hex</Link>
    </nav>
  );
}

export default Navigator;
