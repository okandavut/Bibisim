import * as React from "react";
import { connect } from "react-redux";
import Index from "../../stories/screens/Index/Index";
import { getNetworks, setIsLoading } from "./actions";

export interface Props {
  getNetworks: Function;
  isLoading: boolean;
  networks: [];
  setIsLoading: Function;
}
export interface State {}

class IndexContainer extends React.Component<Props, State> {
  componentDidMount() {
    this.props.setIsLoading(true);
    setTimeout(() => {
      if (this.props.networks.length === 0) {
        this.props.getNetworks();
        this.props.setIsLoading(false);
        this.interval = setInterval(() => this.props.getNetworks(), 500000);
      }
    }, 3000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  render() {
    return (
      <div className="IndexContainer">
        <Index
          networks={this.props.networks}
          isLoading={this.props.isLoading}
        />
      </div>
    );
  }
}
function bindAction(dispatch) {
  return {
    getNetworks: () => dispatch(getNetworks()),
    setIsLoading: state => dispatch(setIsLoading(state))
  };
}

const mapStateToProps = state => ({
  isLoading: state.indexReducer.isLoading,
  networks: state.indexReducer.networks
});

export default connect(
  mapStateToProps,
  bindAction
)(IndexContainer);
