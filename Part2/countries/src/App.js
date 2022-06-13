import { useState, useEffect } from 'react';
import axios from 'axios';
function App() {
  const [countries, setCountries] = useState([]);
  const [searchList, setSearchList] = useState([]);

  const searchCountriesHandler = (event) => {
    setSearchList(() => {
      return countries.filter(
        (country) =>
          country.name.common
            .toLowerCase()
            .includes(event.target.value.toLowerCase()) &&
          event.target.value !== ''
      );
    });
  };

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const { data } = await axios.get('https://restcountries.com/v3.1/all');
        setCountries(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchCountries();
  }, []);

  return (
    <>
      <p>
        find countries <input onChange={searchCountriesHandler} />
      </p>
      {searchList.length > 10 ? (
        <p>Too many matches, specify another filter</p>
      ) : searchList.length === 1 ? (
        searchList.map((country) => (
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
        ))
      ) : (
        searchList.map((country) => (
          <p key={country.name.common}>{country.name.common}</p>
        ))
      )}
    </>
  );
}

export default App;
