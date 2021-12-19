import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Book from './components/Book'
import notFound from './components/notFound'
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <div className="app-contents">
        <Router>
          <Switch >
            <Route exact path="/" component={Book} />
            <Route path="*" component={notFound} />
          </Switch>
        </Router>
      </div>
      <div className="footer">
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
