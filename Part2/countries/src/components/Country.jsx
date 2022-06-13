import React from 'react';

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
    </div>
  );
};

export default Country;
