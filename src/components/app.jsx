import React, { Component } from "react";
import SimpleMap from "./map";
import FlatList from "./flat_list"

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
          <FlatList />
        <div className="map-container">
          <SimpleMap />
        </div>
      </div>
      );
  }
}

export default App;
