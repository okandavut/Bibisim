import * as React from "react";
import { connect } from "react-redux";
import Home from "../../stories/screens/Home/Home";
import { getStations,setIsLoading } from "./actions";

export interface Props {
  getStations: Function;
  isLoading: boolean;
  stations: [];
  setIsLoading: Function;
}
export interface State {}

class HomeContainer extends React.Component<Props, State> {
  componentDidMount() {
    this.props.setIsLoading(true);
    const { id } = this.props.match.params
  setTimeout(() => {
    this.props.getStations(id);
    this.props.setIsLoading(false);
    this.interval = setInterval(() => this.props.getStations(), 500000);//5dakikada bir kontrol
  }, 3000);
    
    
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
    getStations: (id) => dispatch(getStations(id)),
    setIsLoading: (state) => dispatch(setIsLoading(state))
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
