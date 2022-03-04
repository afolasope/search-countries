import React from 'react';
import { useGlobalContext } from './context';
import { useState } from 'react';
import { BsSearch } from 'react-icons/bs';

const FormComponent = ({ getCountryValue, countries }) => {
  const { theme } = useGlobalContext();
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const countryValue = input;
    if (countryValue) {
      getCountryValue(countryValue);
    } else return;
  };

  if (input && countries.length === 0) {
    return (
      <div className="error">
        <p>No countries matched your search</p>
      </div>
    );
  }

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <button type="submit" className="search-icon">
        <BsSearch />
      </button>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className={`${theme ? 'search-field dark-mode' : 'search-field'}`}
        placeholder="Search for a country..."
      />
    </form>
  );
};

export default FormComponent;
