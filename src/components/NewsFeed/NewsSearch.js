import React from "react";

const NewsSearch = ({ setCountryCode }) => {
  const countries = {
    se: "Sweden",
    de: "Germany",
    fr: "France",
    gb: "United Kingdom",
    no: "Norway",
    us: "United States"
  };
  const countryCodes = Object.keys(countries);
  const countryNames = Object.values(countries);

  const chooseCountry = countryCodes.map((
    country //JSX element option
  ) => (
    <option key={country} value={country}>
      {" "}
      {countryNames[countryCodes.indexOf(country)]}
    </option>
  ));
  return (
    <div>
      <form>
        <select onChange={option => setCountryCode(option.target.value)}>
          {chooseCountry}
        </select>
      </form>
    </div>
  );
};

export default NewsSearch;
