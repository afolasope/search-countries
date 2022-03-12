import { useState, useEffect } from 'react';
import CountriesRender from './getCountries';
import FormContainer from './Form';
import FilterCountries from './FilterCountries';
import { Header } from './Header';

function Home() {
  const [loading, setLoading] = useState(true);

  const [countries, setCountries] = useState([]); // this is the value that may be changed (i.e the value of the country may be changed). The array may be altered the show a single country card
  const [allCountries, setAllCountries] = useState([]); // the array to filter each regions
  const [categories, setCategories] = useState([]);

  const getData = async () => {
    try {
      const info = await fetch('https://restcountries.com/v2/all');
      const response = await info.json();
      if (response) {
        setCountries(response);
        setAllCountries(response);
        formatCategories(response);
        setLoading(false);
      } else {
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  const formatCategories = (countries) => {
    const newCategories = [
      ...new Set(
        countries.map((item) => {
          return item.region;
        })
      ),
    ];
    setCategories(newCategories);
  };
  const getSelectedRegion = (selectedRegion) => {
    const filteredCountries = allCountries.filter((country) => {
      return country.region === selectedRegion;
    });
    setCountries(filteredCountries);
  };

  const getCountryValue = async (value) => {
    try {
      const info = await fetch(`https://restcountries.com/v2/name/${value}`);
      const response = await info.json();
      console.log(response);

      if (response) {
        setCountries(response);
      } else if (!response) {
        setCountries([]);
      }
    } catch (error) {
      setCountries([]);
    }
  };

  return (
    <>
      <Header />
      <section className="section-center">
        <div className="search-header ">
          <div className="form-section">
            <FormContainer
              getCountryValue={getCountryValue}
              countries={countries}
            />
          </div>
          <div className="filter-container">
            <FilterCountries
              regions={categories}
              getSelectedRegion={getSelectedRegion}
            />
          </div>
        </div>

        <div className="loading">
          {loading && <h3>loading countries...</h3>}
        </div>
        <div className="render-section">
          <CountriesRender countries={countries} />
        </div>
      </section>
    </>
  );
}

export default Home;
