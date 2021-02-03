import SearchBar from "./SearchBar/SearchBar";
import "./App.css";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">Dog Finder</header>
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
      </Switch>
    </div>
  );
}

export default App;
