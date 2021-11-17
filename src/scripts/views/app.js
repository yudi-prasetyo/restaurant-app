import DrawerInitiator from '../utils/drawer-initiator';
import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';
import './pages/main-menu';
import './pages/restaurant-detail';
import './pages/favorite-restaurants';

class App {
  constructor({ button, drawer, content }) {
    this._button = button;
    this._drawer = drawer;
    this._content = content;

    this._initialAppShell();
  }

  _initialAppShell() {
    DrawerInitiator.init({
      button: this._button,
      drawer: this._drawer,
      content: this._content,
    });
  }

  async renderPage() {
    this._content.innerHTML = '';
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = document.createElement(routes[url]);
    this._content.append(page);
  }
}

export default App;
