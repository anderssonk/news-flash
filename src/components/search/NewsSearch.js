import React from "react";

const NewsSearch = ({ country }) => {
	const countries = {
		se: "SV",
		de: "DE",
		fr: "FR",
		gb: "UK",
		no: "NO",
		us: "US"
	};
	const countryCodes = Object.keys(countries);
	const countryNames = Object.values(countries);

	const chooseCountry = countryCodes.map((
		country //JSX element option
	) => (
		<option className="poop" key={country} value={country}>
			{countryNames[countryCodes.indexOf(country)]}
		</option>
	));
	return (
		<div>
			<form>
				<select
					className="dropdown"
					onChange={option => country(option.target.value)}
				>
					{chooseCountry}
				</select>
			</form>
		</div>
	);
};

export default NewsSearch;
