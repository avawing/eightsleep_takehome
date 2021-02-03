import SearchBar from "./SearchBar/SearchBar";
import "./App.css";
import { Route, Switch, useHistory } from "react-router-dom";
import { FaHome } from "react-icons/fa";

function App() {
  const history = useHistory();
  return (
    <div className="App">
      <header className="App-header">
        <button
          className="app_home_button"
          onClick={(e) => {
            history.push("/");
          }}
        >
          <FaHome />
        </button>
        Dog Finder
      </header>
      <Switch>
        <Route path="/:breed/:subbreed">
          <SearchBar />
        </Route>
        <Route exact path="/:breed">
          <SearchBar />
        </Route>
        <Route exact path="/:letter">
          <SearchBar />
        </Route>
        <Route exact path="/">
          <SearchBar />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
