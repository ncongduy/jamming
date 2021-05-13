import React from "react";
import "./Track.css";

function Track(props) {
  const addTrack = () => {
    props.onAdd(props.track);
  };

  const removeTrack = () => {
    props.onRemove(props.track);
  };

  const renderAction = () => {
    if (props.isRemoval) {
      return <button onClick={removeTrack}>-</button>;
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

      <div className="Track-action">{renderAction()}</div>
    </div>
  );
}

export default Track;
