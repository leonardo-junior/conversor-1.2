function ShowResult (props) {
  return (
    <section>

      <h1>RGB CSS Color</h1>
      <div className="show-result">
        {props.styleExample}
      </div>

      <h1>Color Preview</h1>

      <div
        className="show-result"
        style={{ backgroundColor: props.styleExample }}
      />

    </section>
  );
}
export default ShowResult;
