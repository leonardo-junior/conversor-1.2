import './App.css';
import { useState, useRef } from 'react';
import ShowHex from './show-hex';

function RgbToHex () {
    const [styleExample, setStyleExample] = useState('#FFFFFF');
    const [showValue, setShowValue] = useState(false);

    const insertRed = useRef(255);
    const insertGreen = useRef(255);
    const insertBlue = useRef(255);

    function validationValue (event) {
        const element = event.target;
        (element.value < 0) && (element.value = 0);
        (element.value > 255) && (element.value = 255);
    }

    function handleChange (event, insertColor) {
        validationValue(event);
        insertColor.current = event.target.value;
    }

    function handleClickCalcule () {
        const R = +insertRed.current;
        const G = +insertGreen.current;
        const B = +insertBlue.current;

        const resultR = convertToHexa(R);
        const resultG = convertToHexa(G);
        const resultB = convertToHexa(B);
        const convertedToHexa = '#' + resultR + resultG + resultB;
        setStyleExample(convertedToHexa);
        setShowValue(true);
    }

    function convertToHexaLowValue (number) {
        switch (number) {
            case 0: return 0;
            case 1: return 1;
            case 2: return 2;
            case 3: return 3;
            case 4: return 4;
            case 5: return 5;
            case 6: return 6;
            case 7: return 7;
            case 8: return 8;
            case 9: return 9;
            case 10: return 'A';
            case 11: return 'B';
            case 12: return 'C';
            case 13: return 'D';
            case 14: return 'E';
            case 15: return 'F';

            default:
                break;
        }
    }

    function convertToHexa (number) {
        return convertToHexaLowValue(parseInt(number / 16)) + String(convertToHexaLowValue(number % 16));
    }

    return (
        <div className="test">
            <div className="card-h-to-r">
                <header>RBG to Hex Color Converter</header>
                <span>How to use:<br />
                Enter a Red, Green Blue color value to convert to a css hex triplet
                </span>
                <section className="colors-input">
                    <span> (R) Red: </span>
                    <input type="number" onChange={(e) => handleChange(e, insertRed)}
                        placeholder="255" />
                    <span> (G) Green: </span>
                    <input type="number" onChange={(e) => handleChange(e, insertGreen)}
                        placeholder="255" />
                    <span> (B) Blue: </span>
                    <input type="number" onChange={(e) => handleChange(e, insertBlue)}
                        placeholder="255" />
                    <button onClick={handleClickCalcule}>Convert Color</button>
                </section>
                {showValue && <ShowHex styleExample={styleExample}
                    red={insertRed.current}
                    green={insertGreen.current}
                    blue={insertBlue.current} />}
            </div>
        </div >
    );
}

export default RgbToHex;