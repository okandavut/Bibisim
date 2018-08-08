import * as React from "react";
import { connect } from "react-redux";
import Home from "../../stories/screens/Home/Home";
import { getStations } from "./actions";

export interface Props {
  getStations: Function;
  isLoading: boolean;
  stations: [];
}
export interface State {}

class HomeContainer extends React.Component<Props, State> {
  componentDidMount() {
      this.props.getStations();
    this.interval = setInterval(() => this.props.getStations(), 5000);
  } 
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  render() {
    return (
      <div className="HomeContainer">
        <Home stations={this.props.stations} isLoading={this.props.isLoading} />
      </div>
    );
  }
}
function bindAction(dispatch) {
  return {
    getStations: () => dispatch(getStations())
  };
}

const mapStateToProps = state => ({
  isLoading: state.homeReducer.isLoading,
  stations: state.homeReducer.stations
});

export default connect(
  mapStateToProps,
  bindAction
)(HomeContainer);
