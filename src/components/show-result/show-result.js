import styles from "./show-result.module.css";

function ShowResult(props) {
  return (
    <section className={styles.show}>
      <h1>RGB CSS Color:</h1>
      <div>
        <span>{props.styleExample}</span>
      </div>

      <h1>Color Preview:</h1>

      <div style={{ backgroundColor: props.styleExample }}></div>
    </section>
  );
}
export default ShowResult;
