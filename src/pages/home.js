import { Link } from 'react-router-dom';

function Home () {
    return (
        <div>
            <section className="cards">
                <div className="card-info">
                    <header>Hex to RGB Color Converter</header>
                    <p>Converts Hex color codes to RGB HTML value format for use in web design and CSS</p>

                    <Link to="rgb" className="button">CONVERT HEX TO RGB</Link>
                </div>
                <div className="card-info" >
                    <header>RGB to Hex Color Converter</header>
                    <p>Converts RGB color codes to Hex HTML value format for use in web design and CSS</p>
                    <Link to="hex" className="button">CONVERT RGB To HEX</Link>
                </div>
            </section>
        </div >
    );
}

export default Home;
