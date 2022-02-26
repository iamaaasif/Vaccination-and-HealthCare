import { Component } from "react";
import { Map, GoogleApiWrapper, MapContainer } from "google-maps-react";

class Hospital extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        style={{ width: "100%", height: "100%" }}
        zoom={10}
        initialCenter={{
          lat: 23.849983,
          lng: 90.258125,
        }}
      />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyBa2ngwbdYzLNtr2Lc-No_UwlHZmtcjepo",
})(MapContainer);
