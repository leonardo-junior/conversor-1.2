import ShowResult from "../show-result/show-result";
import styles from "./show-hex.module.css";

function ShowHex(props) {
  return (
    <section className={styles.hexResult}>
      <h1>Hex Color Code:</h1>

      <section>
        <span>{props.styleExample}</span>
      </section>

      <ShowResult
        styleExample={`rgb(${props.red},${props.green},${props.blue})`}
      />
    </section>
  );
}

export default ShowHex;
