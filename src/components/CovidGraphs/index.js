/* global covid19 */

import React from "react";
import {
  LineChart,
  AreaChart,
  BarChart,
  PieChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Line,
  ComposedChart,
  Area,
  Bar
} from "recharts";
import { withRouter } from "react-router-dom";
import "./index.css";

class CovidGraphs extends React.Component {
  state = {
    data: []
  };
  componentDidMount() {
    const countryId = this.props.match.params.countryId;
    const data = covid19.data();
    const countrySpecificData = data
      .filter(x => x.country_iso3 === countryId)
      .groupByDate();
    this.setState({
      data: countrySpecificData
    });
  }
  render() {
    if (this.state.data.length === 0) {
      return <div>Loading</div>;
    }
    return (
      <div className="graph-container">
        <LineChart
          width={730}
          height={250}
          data={this.state.data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="deaths"
            stroke="#8884d8"
            fill="#8884d8"
          />
          <Line
            type="monotone"
            dataKey="confirmed"
            stroke="#82ca9d"
            fill="#82ca9d"
          />
          <Line
            type="monotone"
            dataKey="recovered"
            stroke="#ffc658"
            fill="#ffc658"
          />
        </LineChart>
      </div>
    );
  }
}

export default withRouter(CovidGraphs);
