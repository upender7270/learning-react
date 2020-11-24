import React from "react";

import CountryList from "../CountryList";
import CountryListHeader from "../CountryListHeader";

class CountryDashboard extends React.Component {
  state = {
    countries: [],
    searchText: ""
  };

  componentDidMount() {
    fetch("https://restcountries.eu/rest/v2/all")
      .then(response => {
        return response.json();
      })
      .then(json => {
        this.setState({
          countries: json
        });
      });
  }

  render() {
    const themeBgClassName =
      this.props.selectedTheme === "light" ? "bg-white" : "bg-black";
    return (
      <div className={`${themeBgClassName} h-full`}>
        <CountryListHeader
          selectedTheme={this.props.selectedTheme}
          onChangeTheme={this.props.onChangeTheme}
        />
        <CountryList countries={this.state.countries} />
      </div>
    );
  }
}

export default CountryDashboard;
