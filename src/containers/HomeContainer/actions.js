import types from "../../common/types";

export function setIsLoading(isLoading: boolean) {
  return {
    isLoading: isLoading,
    type: types.IS_LOADING
  }
}

export function setStations(stations: Array<Object>) {
  return {
    stations: stations,
    type: types.SET_STATIONS
  };
}

export function setError(exceptıon: Object) {
  return {
    type: types.SET_ERROR,
    error: exceptıon
  };
}

export function getStations() {
  return dispatch => {
    fetch("https://api.citybik.es/v2/networks/baksi-bisim")
      .then(res => res.json())
      .then(result => {
        dispatch(setStations(result.network.stations));
      }).catch(error => {
        dispatch(setError(error));
      });
  };
}