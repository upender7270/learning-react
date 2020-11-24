import React from "react";
import { withRouter } from "react-router-dom";

class CountryList extends React.Component {
  navigateToCountryDetails = event => {
    const { history } = this.props;
    history.push(`/countryList/${event.target.id}`);
  };

  render() {
    return (
      <ul className="flex flex-wrap flex-row max-w-5xl m-auto justify-between">
        {this.props.countries.map(eachCountry => {
          const { alpha3Code } = eachCountry;
          return (
            <li
              id={alpha3Code}
              key={alpha3Code}
              onClick={this.navigateToCountryDetails}
              className="bg-gray-600 text-xl my-5 py-5 w-3/12 mr-4 text-center"
            >
              {eachCountry.name}
            </li>
          );
        })}
      </ul>
    );
  }
}

export default withRouter(CountryList);
