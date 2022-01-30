import React, { useEffect } from 'react';
import { useState } from "react";
import './App.css';
import axios from 'axios';
function App() {


  const [Lat, setLatitude] = useState('');
  const [Long, setLongitude] = useState('');
  const [allLocations, setAllLocations] = useState([]);
  const [loader, setLoader] = useState(false)


  useEffect(() => {
    getLocation()
  })

  const getLocation = async () => {

    await navigator.geolocation.getCurrentPosition((position) => {

      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude)
    });
  };


  const getAllLocations = async () => {
    setLoader(true)


    try {
      const res = await axios("getAllLocations");
      const body = await res.data;
      setAllLocations(body)
      setLoader(false)
    } catch (error) {
      setLoader(false)
    }
  }


  const check = async () => {

    setLoader(true);

    try {

      const body = {
        Lat,
        Long
      }

      await axios.post('/getLocation', body);

      setLoader(false)
    } catch (error) {
      setLoader(false)
    }

  }


  if (loader) {

    return (
      <div className="App">
        <p>Spasi...</p>
      </div>
    )

  }
  return (
    <div className="App">

      <h1>Your location</h1>
      <p>latitude--{Lat}</p>
      <p>longitude--{Long}</p>

      <button className="Get-All" onClick={getAllLocations}>Get All Locations</button>
      <button className="Check" onClick={check}>Add my current location</button>



      <div className="All-Locations">
        {
          allLocations.map((item, index) => {

            return (
              <div key={String(index)}>
                <span>{index}</span>
                <i>Latitude--{item.Latitude}</i>
                <i>Longitude--{item.Latitude}</i>
              </div>
            )
          })
        }
      </div>
    </div>
  );
}

export default App;