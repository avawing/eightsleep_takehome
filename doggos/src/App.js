import SearchBar from "./SearchBar/SearchBar";
import "./App.css";
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Route exact path="/">
        <header className="App-header">Dog Finder</header>
      </Route>
      <Route path="/:{a-z}">
        <header className="App-header">Dog Finder</header>
      </Route>
      <Route path="/:breed">
        <header className="App-header">Dog Finder</header>
      </Route>
      <Route path="/:breed/:subbreed">
        <header className="App-header">Dog Finder</header>
      </Route>
      <SearchBar />
    </div>
  );
}

export default App;
