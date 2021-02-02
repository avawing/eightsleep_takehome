import logo from "./logo.svg";
import DogList from "./Dogs/DogList.jsx";
import SearchBar from "./SearchBar/SearchBar";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">Dog Finder</header>
      <SearchBar />
      <DogList />
    </div>
  );
}

export default App;
