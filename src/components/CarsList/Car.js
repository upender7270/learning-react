import React from "react";

const carStatusConstants = {
  stopped: "STOPPED",
  running: "RUNNING"
};
class Car extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: carStatusConstants.stopped,
      speed: 0
    };
  }

  onStartStop = () => {
    const { stopped } = carStatusConstants;
    if (this.state.status === stopped) {
      this.setState({
        status: "RUNNING"
      });
    } else {
      this.setState({
        status: stopped
      });
    }
  };

  displayStartStopBtnText = () => {
    if (this.state.status === "RUNNING") {
      return "Stop";
    }
    return "Start";
  };

  displayCarStatus = () => {};

  render() {
    const { onRemoveCar, id } = this.props;
    const { status } = this.state;
    return (
      <div className="car">
        <span>CarId:{id}</span>
        <button className="default-btn" onClick={this.onStartStop}>
          {this.displayStartStopBtnText()}
        </button>
        <button className="default-btn" disabled={status === "STOPPED"}>
          Accelerate
        </button>
        <button className="default-btn">Decelerate</button>
        <span>Status:</span>
        <button className="default-btn" id={id} onClick={onRemoveCar}>
          Remove:
        </button>
      </div>
    );
  }
}

export default Car;
