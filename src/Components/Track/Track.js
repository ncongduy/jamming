import React from "react";
import "./Track.css";

function Track(props) {
  const addTrack = () => {
    props.onAdd(props.track);
  };

  const renderAction = () => {
    if (props.isRemoval) {
      return <button>-</button>;
    } else {
      return <button onClick={addTrack}>+</button>;
    }
  };

  return (
    <div className="Track">
      <div className="Track-information">
        <h3>{props.track.name}</h3>
        <p>
          {props.track.artist} - {props.track.album}
        </p>
      </div>

      <button className="Track-action">{renderAction()}</button>
    </div>
  );
}

export default Track;
