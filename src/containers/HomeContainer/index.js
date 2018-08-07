import React, { Component } from "react";
import { connect } from "react-redux";
import Home from '../../stories/screens/Home/Home';
import { setStations, getStations } from "./actions";

export interface Props {
    getStations: Function;
    isLoading: boolean;
    items: [];
    setStations: Function;
}
export interface State { }

class HomePageContainer extends React.Component<Props, State> {
    render() {
        return (
            <div className="HomePageContainer">
                <Home items={this.props.items} />
            </div>
        );
    }
}
function bindAction(dispatch) {
    return {
        getStations: () => dispatch(getStations()),
        setStations: () => dispatch(setStations()),
    };
}

const mapStateToProps = state => ({
    isLoading: state.homeReducer.isLoading,
    items: state.homeReducer.items
});

export default connect(
    mapStateToProps,
    bindAction
)(HomePageContainer);
