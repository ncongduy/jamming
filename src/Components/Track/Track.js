import React from "react";
import "./Track.css";

class Track extends React.Component {
  constructor(props) {
    super(props);
  }

  renderAction(isRemoval) {
    if (isRemoval) {
      return <button>-</button>;
    } else {
      return <button>+</button>;
    }
  }

  render() {
    return (
      <div className="Track">
        <div className="Track-information">
          <h3>{this.props.track.name}</h3>
          <p>
            {this.props.track.artist} - {this.props.track.album}
          </p>
        </div>
        <button className="Track-action">{this.renderAction()}</button>
      </div>
    );
  }
}

export default Track;
