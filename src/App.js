import Nav from "./components/Nav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from "./components/Main";
import ScrollToTop from "./ScrollToTop";
import Contact from "./components/Contact";

function App() {

  return (
    <>
      <Router>
        <Nav/>
        <ScrollToTop />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
      </Router>
      
    </>
  );
}

export default App;