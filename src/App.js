import './App.css';
import Home from './home.js';
import HexaToRgb from './hexatorgb.js';
import RgbToHex from './rgbtohexa.js';
import Navigator from './nav.js';
import Header from './header.js';
import Footer from './footer.js';

function App () {
  const url = window.location.pathname;
  let page;
  if (url === '/') page = <Home />;
  if (url === '/rgb') page = <HexaToRgb />;
  if (url === '/hex') page = <RgbToHex />;

  return (
    <div>
      <Navigator />
      <Header />
      {page}
      <Footer />
    </div>

  );
}
export default App;