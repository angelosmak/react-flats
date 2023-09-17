import React, { Component } from "react";
import SimpleMap from "./map";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="flat-list">
          <h2>haha</h2>
        </div>
        <div className="map-container">
          <SimpleMap />
        </div>
      </div>
      );
  }
}

export default App;
