import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';
import Country from './comporents/Country/Country';
import Population from './comporents/Population/Population';

function App() {
  const [country , setCountry] = useState([]);
  const [addCty , setCty] = useState([]);
  useEffect( () =>{
      fetch('https://restcountries.eu/rest/v2/all')
      .then(res => res.json())
      .then(data => setCountry(data))
  },[])

  const handleAddCountry = (country) => {
    const totalCountry = [...addCty , country];
        setCty(totalCountry);
  }
  const h1Style = {
    textAlign: 'center',
  }
  return (
    <div>
        <h1 style={h1Style}>Country loaded : {country.length}</h1>
        {/* <h1>Total Country : {addCty.length}</h1> */}
        <Population Population= {addCty} > </Population>
            {
                country.map(country => <Country handleAddCountry={handleAddCountry} country={country} key={country.alpha3Code}> </Country>)
            }
    </div>
  );
}

export default App;
