import { useState, useRef } from "react";
import ShowResult from "../show-result/show-result.js";
import style from "./hex-to-rgb.module.css";

function HexaToRgb() {
  const [insertValue, setInsertValue] = useState("");
  const [styleExample, setStyleExample] = useState("rgb(0, 0, 0)");
  const showValue = useRef(false);

  function handleChange(event) {
    setInsertValue(event.target.value);
  }

  function handleClickCalcule() {
    const valueToCalculate = insertValue.replace("#", "");
    let R, G, B;

    if (valueToCalculate.length === 3) {
      R = valueToCalculate[0] + valueToCalculate[0];
      G = valueToCalculate[1] + valueToCalculate[1];
      B = valueToCalculate[2] + valueToCalculate[2];
      showValue.current = true;
    } else if (valueToCalculate.length === 6) {
      R = valueToCalculate[0] + valueToCalculate[1];
      G = valueToCalculate[2] + valueToCalculate[3];
      B = valueToCalculate[4] + valueToCalculate[5];
      showValue.current = true;
    } else {
      showValue.current = false;
    }

    const resultR = parseInt(R || 0, 16);
    const resultG = parseInt(G || 0, 16);
    const resultB = parseInt(B || 0, 16);
    const result = `rgb(${resultR}, ${resultG}, ${resultB})`;

    setStyleExample(result);
  }

  return (
    <section className={style.rgb}>
      <div>
        <header>Hex to RGB Color Converter</header>

        <span>
          How to use:
          <br />
          Enter a hex color code to convert to rgb
        </span>

        <label for="input">Hex color code:</label>

        <div>
          <input
            type="text"
            id="input"
            onChange={handleChange}
            placeholder="#FFFFFF"
            maxLength={insertValue[0] === "#" ? "7" : "6"}
          />

          <button onClick={handleClickCalcule}>Convert Color</button>
        </div>

        {showValue.current && <ShowResult styleExample={styleExample} />}
      </div>
    </section>
  );
}

export default HexaToRgb;
