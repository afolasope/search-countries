import React, { useEffect, useState } from 'react';

import Select from 'react-select';
import { useGlobalContext } from './context';

const FilterCountries = ({ regions, getSelectedRegion }) => {
  const { theme } = useGlobalContext();
  const [loadingOptions, setLoadingOptions] = useState(true);

  const options = regions.map((region) => {
    return { value: `${region}`, label: `${region}` };
  });

  const handleChange = (e) => {
    getSelectedRegion(e.value);
  };

  function customTheme(theme) {
    return {
      ...theme,
      colors: {
        ...theme.colors,
        primary: 'transparent',
      },
    };
  }
  const customStyles = {
    control: (base, state) => ({
      ...base,
      background:
        theme === 'light-theme' ? 'hsl(0, 0%, 100%)' : 'hsl(209, 23%, 22%)',
      color:
        theme === 'light-theme' ? 'hsl(0, 0%, 100%)' : 'hsl(209, 23%, 22%)',
    }),
    menu: (base) => ({
      ...base,
      background:
        theme === 'light-theme' ? 'hsl(0, 0%, 100%)' : 'hsl(209, 23%, 22%)',
    }),
    menuList: (base) => ({
      ...base,
      background:
        theme === 'light-theme' ? 'hsl(0, 0%, 100%)' : 'hsl(209, 23%, 22%)',
    }),

    singleValue: (base) => ({
      ...base,
      color:
        theme === 'light-theme' ? 'hsl(209, 23%, 22%)' : 'hsl(0, 0%, 100%)',
    }),
  };

  useEffect(() => {
    if (regions.length > 0) {
      setLoadingOptions(false);
    } else {
      setLoadingOptions(true);
    }
  });

  return (
    <>
      <Select
        name="test"
        id="test"
        className="select"
        onChange={handleChange}
        options={options}
        theme={customTheme}
        placeholder={loadingOptions ? 'Loading Regions...' : 'Select Region'}
        isSearchable
        styles={customStyles}
      ></Select>
    </>
  );
};

export default FilterCountries;
