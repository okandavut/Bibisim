import types from "../../common/types";

export function setIsLoading(isLoading: boolean) {
  return {
    isLoading: isLoading,
    type: types.IS_LOADING
  }
}

export function setNetworks(networks: Array<Object>) {
  return {
    networks: networks,
    type: types.SET_NETWORKS
  };
}

export function setError(exceptıon: Object) {
  return {
    type: types.SET_ERROR,
    error: exceptıon
  };
}

export function getNetworks() {
  return dispatch => {
    fetch("https://api.citybik.es/v2/networks")
      .then(res => res.json())
      .then(result => {
        dispatch(setNetworks(result.networks));
      }).catch(error => {
        dispatch(setError(error));
      });
  };
}