import React from "react";
import { withRouter } from "react-router-dom";

import CountryListHeader from "../CountryListHeader";

class CountryDetails extends React.Component {
  state = {
    countryDetails: null,
    countries: []
  };

  componentDidMount() {
    fetch("https://restcountries.eu/rest/v2/all")
      .then(response => {
        return response.json();
      })
      .then(json => {
        this.setCountriesListAndCountryDetails(json);
      });
  }

  setCountriesListAndCountryDetails = json => {
    const alpha3Code = this.props.match.params.countryId;
    const countryDetails = json.find(eachCountry => {
      return eachCountry.alpha3Code === alpha3Code;
    });

    this.setState({
      countries: json,
      countryDetails: countryDetails
    });
  };

  render() {
    const alpha3Code = this.props.match.params.countryId;
    const themeBgClassName =
      this.props.selectedTheme === "light" ? "bg-white" : "bg-black";

    if (this.state.countryDetails === null) {
      return <div className="text-5xl">Loading</div>;
    }
    const { capital, region, name } = this.state.countryDetails;

    return (
      <div className={`${themeBgClassName} h-screen`}>
        <CountryListHeader
          selectedTheme={this.props.selectedTheme}
          onChangeTheme={this.props.onChangeTheme}
        />
        <div
          className={`${themeBgClassName} m-auto w-full h-full flex flex-col justify-center items-center`}
        >
          <div className="bg-gray-600 text-xl py-5 w-3/12 mr-4 text-center">
            {name}
          </div>
          <div className="bg-gray-600 text-xl py-5 w-3/12 mr-4 text-center">
            {alpha3Code}
          </div>
          <div className="bg-gray-600 text-xl py-5 w-3/12 mr-4 text-center">
            {capital}
          </div>
          <div className="bg-gray-600 text-xl py-5 w-3/12 mr-4 text-center">
            {region}
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(CountryDetails);
