import React from 'react';
import Weather from './Weather';

const Country = ({ country }) => {
  return (
    <div key={country.name.common}>
      <h1>{country.name.common}</h1>
      <p>capital {country.capital}</p>
      <p>area {country.area}</p>
      <h3>lenguages:</h3>
      <ul>
        {Object.values(country.languages).map((lenguage) => (
          <li key={lenguage}>{lenguage}</li>
        ))}
      </ul>
      <img src={country.flags.png} alt={country.flags.png} />
      <Weather
        country={country.name.common}
        latitude={country.latlng[0]}
        longitude={country.latlng[1]}
      />
    </div>
  );
};

export default Country;
