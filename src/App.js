import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";

import Home from './pages/home.js';
import HexaToRgb from './pages/hexatorgb.js';
import RgbToHex from './pages/rgbtohexa.js';
import Navigator from './components/nav.js';
import Header from './components/header.js';
import Footer from './components/footer.js';

function App () {
  return (
    <Router>
      <Switch>
        <div>
          <Navigator />

          <Header />

          <Route path="/" exact component={Home} />
          <Route path="/rgb" component={RgbToHex} />
          <Route path="/hex" component={HexaToRgb} />

          <Footer />
        </div>
      </Switch>
    </Router>
  );
}
export default App;
