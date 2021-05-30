import styles from "./header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <h1>HEX TO RGB</h1>
      <h2>
        Smart, fast and easy to use online tool built to convert{" "}
        <strong>Hex to Rgb</strong> or <strong>Rgb to Hex</strong>
      </h2>
    </header>
  );
}

export default Header;
