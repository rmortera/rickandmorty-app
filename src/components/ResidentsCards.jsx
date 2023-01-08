import axios from "axios";
import React, { useEffect, useState } from "react";

const ResidentsCards = ({ residentsUrl }) => {
  const [resident, setResident] = useState({});

  useEffect(() => {
    axios.get(residentsUrl).then((res) => setResident(res.data));
  }, []);

  console.log(residentsUrl);

  return (
    <div className="resident-card">
      <div className="status">{resident.status} </div>
      <div>
        {" "}
        <img src={resident.image} className="image-resident" />
      </div>
      <div className="resident-info">
        {resident.name}
        <hr />
        <p>
          {" "}
          <span> Species </span>
        </p>
        <b>{resident.species}</b>
        <p>
          {" "}
          <span> Origin </span>
        </p>
        <b>{resident.origin?.name}</b>
        <p>
          {" "}
          <span> Episodes</span>
        </p>
        <b>{resident.episode?.length}</b>
      </div>
    </div>
  );
};

export default ResidentsCards;
