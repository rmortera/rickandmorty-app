import { useEffect, useState } from "react";
import "./style.css";
import axios from "axios";
import ResidentsCards from "./components/ResidentsCards";
import rick from "./assets/img/625912.jpg";

function App() {
  const [locationId, setLocationId] = useState({});
  const [searchId, setSearchId] = useState("");

  useEffect(() => {
    const randomLocation = Math.floor(Math.random() * 126 + 1);
    axios
      .get(`https://rickandmortyapi.com/api/location/${randomLocation}`)
      .then((res) => setLocationId(res.data));
  }, []);

  console.log(locationId);

  const searchLocation = () => {
    axios
      .get(`https://rickandmortyapi.com/api/location/${searchId}`)
      .then((res) => setLocationId(res.data));
  };

  return (
    <div className="App">
      <div className="image">
        <img src={rick} />
      </div>
      <div className="input-btn">
        <input
          className="input"
          type="text"
          placeholder="type a location id"
          value={searchId}
          onChange={(e) => setSearchId(e.target.value)}
        />{" "}
        <button onClick={searchLocation}>Search Location</button>
      </div>

      <div className="location-info">
        <p>
          {" "}
          <b> Name: </b> <br />
          {locationId.name}
        </p>
        <p>
          <b>Type:</b> <br /> {locationId.type}
        </p>
        <p>
          <b>Dimension:</b> <br />
          {locationId.dimension}
        </p>
        <p>
          <b>Population:</b> <br />
          {locationId.residents?.length}
        </p>
      </div>

      <ul className="residents-list">
        {locationId.residents?.map((residents) => (
          <ResidentsCards residentsUrl={residents} key={residents} />
        ))}
      </ul>
    </div>
  );
}

export default App;
