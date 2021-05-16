function Home () {
    return (
        <div className="App">
            <section className="cards">
                <div className="card-info">
                    <header>Hex to RGB Color Converter</header>
                    <p>Converts Hex color codes to RGB HTML value format for use in web design and CSS</p>

                    <a href="rgb" className="button">CONVERT HEX TO RGB</a>
                </div>
                <div className="card-info" >
                    <header>RGB to Hex Color Converter</header>
                    <p>Converts RGB color codes to Hex HTML value format for use in web design and CSS</p>
                    <a href="hex" className="button">CONVERT RGB To HEX</a>
                </div>
            </section>
        </div >
    );
}

export default Home;
