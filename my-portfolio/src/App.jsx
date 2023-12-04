import { Route, Switch } from "react-router-dom";
import About from "./Pages/About";
import ContactDetails from "./Pages/ContactDetails";
import Projects from "./Pages/Projects";
import MainNavigation from "./components/layout/MainNavigation";
import HomePage from "./Pages/Home";

function App() {
  return (
    <div>
      <MainNavigation />

      <Switch>
        <Route  path= '/' exact>
          < HomePage/>
        </Route>

        <Route  path= '/about' exact>
          <About />
        </Route>

        <Route path='/projects'>
          <Projects />
        </Route>

        <Route path='/contact'>
          <ContactDetails />
        </Route>

      </Switch>
    </div>
  );
}

export default App;
