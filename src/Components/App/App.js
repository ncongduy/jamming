import React from "react";
import "./App.css";
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import Playlist from "../Playlist/Playlist";
import { useState } from "react";

function App(props) {
  const [searchResults, setSearchResults] = useState([
    { name: "Minun ystävä", artist: "Nhi", album: "1", id: 1 },
    { name: "Tình Nồng", artist: "Duy", album: "2", id: 2 },
  ]);

  const [playList, setPlayList] = useState([
    {
      name: "Nothing gonna change my love for you",
      artist: "Duy - Nhi",
      album: "3",
      id: 3,
    },
    { name: "Thằng cuội", artist: "Chú bé", album: "4", id: 4 },
    { name: "Rock", artist: "Roll", album: "5", id: 5 },
  ]);

  const [name, setName] = useState("New Playlist");

  const addTrack = (track) => {
    if (playList.find((trackPlayList) => trackPlayList.id === track.id)) {
      return;
    } else {
      setPlayList((prev) => [track, ...prev]);
    }
  };

  const removeTrack = (track) => {
    setPlayList(
      playList.filter((trackPlayList) => trackPlayList.id !== track.id)
    );
  };

  const updatePlaylistName = (name) => {
    setName(name);
  };

  return (
    <div>
      <h1>
        Ja<span className="highlight">mmm</span>ing
      </h1>
      <div className="App">
        <SearchBar />
        <div className="App-playlist">
          <SearchResults searchResults={searchResults} onAdd={addTrack} />
          <Playlist
            playList={playList}
            onRemove={removeTrack}
            name={name}
            onNameChange={updatePlaylistName}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
