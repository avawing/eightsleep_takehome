import SearchBar from "./SearchBar/SearchBar";
import "./App.css";
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">Dog Finder</header>
      <Route exact path="/"></Route>
      <Route path="/:letter"></Route>
      <Route path="/:breed"></Route>
      <Route path="/:breed/:subbreed"></Route>
      <SearchBar />
    </div>
  );
}

export default App;
