import "./styles.css";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Home from "./components/homePage";
import About from "./components/aboutPage";
import Service from "./components/servicePage";
import Contact from "./components/contactPage";
import Error from "./components/errorPage";
import NavBar from "./components/navbar";
import Footer from "./components/footer";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/service" component={Service} />
          <Route exact path="/contact" component={Contact} />
          <Redirect to="/" />
          <Route component={Error} />
        </Switch>
      </BrowserRouter>
      <Footer />
    </>
  );
}
