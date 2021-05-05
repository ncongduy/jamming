import React from "react";
import "./App.css";
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import Playlist from "../Playlist/Playlist";
import { useState } from "react";

function App(props) {
  const [searchResults, setSearchResults] = useState([
    { name: "abc", artist: "abc", album: "123", id: 123 },
    { name: "abc", artist: "abc", album: "123", id: 124 },
  ]);

  return (
    <div>
      <h1>
        Ja<span className="highlight">mmm</span>ing
      </h1>
      <div className="App">
        <SearchBar />
        <div className="App-playlist">
          <SearchResults searchResults={searchResults} />
          <Playlist />
        </div>
      </div>
    </div>
  );
}

export default App;
