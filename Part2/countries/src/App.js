import { useState, useEffect } from 'react';
import axios from 'axios';
import Country from './components/Country';
function App() {
  const [countries, setCountries] = useState([]);
  const [searchList, setSearchList] = useState([]);
  const [showCountry, setShowCountry] = useState({});
  const [show, setShow] = useState(false);

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

  const showCountryHandler = (country) => {
    setShow((prev) => !prev);
    setShowCountry(country);
  };
  return (
    <>
      <p>
        find countries <input onChange={searchCountriesHandler} />
      </p>
      {searchList.length > 10 ? (
        <p>Too many matches, specify another filter</p>
      ) : searchList.length === 1 ? (
        searchList.map((country) => (
          <Country key={country.name.common} country={country} />
        ))
      ) : (
        searchList.map((country) => (
          <div key={country.name.common}>
            {country.name.common}{' '}
            <button onClick={() => showCountryHandler(country)}>
              {show && country === showCountry ? 'hide' : 'show'}
            </button>
            {show &&
              Object.keys(showCountry).length !== 0 &&
              country === showCountry && (
                <Country key={country.name.common} country={country} />
              )}
          </div>
        ))
      )}
    </>
  );
}

export default App;
