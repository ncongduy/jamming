import React, { useState } from "react";
import "./App.css";
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import Playlist from "../Playlist/Playlist";
import Spotify from "../../util/Spotify";

function App(props) {
  const [searchResults, setSearchResults] = useState([]);

  const [playList, setPlayList] = useState([]);

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

  const savePlaylist = () => {
    const trackURIs = playList.map((track) => track.uri);
    Spotify.savePlaylist(name, trackURIs).then(() => {
      setName("New Playlist");
      setPlayList([]);
    });
  };

  const search = (term) => {
    Spotify.search(term).then((response) => setSearchResults(response));
  };

  return (
    <div>
      <h1>
        Ja<span className="highlight">mmm</span>ing
      </h1>
      <div className="App">
        <SearchBar onSearch={search} />
        <div className="App-playlist">
          <SearchResults searchResults={searchResults} onAdd={addTrack} />
          <Playlist
            playList={playList}
            onRemove={removeTrack}
            name={name}
            onNameChange={updatePlaylistName}
            onSave={savePlaylist}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
