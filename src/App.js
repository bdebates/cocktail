import "./App.css";
import SearchPage from "./components/Searchpage/SearchPage";
import FavoritesPage from "./components/FavoritesPage/FavoritesPage";
import LoginPage from "./components/LoginPage/LoginPage";
import SpecialPage from "./components/SpecialPage/SpecialPage";
import {
  BrowserRouter as Router,
  NavLink,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";

function App() {
  return (
    <>
      {/* <SearchPage></SearchPage> */}
      {/* <FavoritesPage></FavoritesPage> */}
      {/* <LoginPage></LoginPage> */}
      {/* <nav>TEST NAV</nav> */}
      {/* <footer>TEST FOOTER</footer> */}
      <Router>
        <nav className="menu">
          <NavLink
            className="text-center link"
            activeClassName="active-link"
            // activeClassName="active"
            to="/login"
          >
            Login
          </NavLink>
          <NavLink
            className="text-center link"
            activeClassName="active-link"
            // activeClassName="active"
            to="/search"
          >
            Search
          </NavLink>
          <NavLink
            className="text-center link"
            activeClassName="active-link"
            // activeClassName="active"
            to="/favorites"
          >
            Favorites
          </NavLink>
          <NavLink
            className="text-center link"
            activeClassName="active-link"
            to="/special"
          >
            Special
          </NavLink>
        </nav>
        <main>
          <Switch>
            <Route path="/login" component={LoginPage} />
            <Route path="/search" component={SearchPage} />
            <Route path="/favorites" component={FavoritesPage} />
            <Route path="/special" component={SpecialPage} />
            <Route path="*">
              <Redirect to="/search"></Redirect>
            </Route>
          </Switch>
        </main>
        <footer>This is a footer</footer>
      </Router>
    </>
  );
}

export default App;
