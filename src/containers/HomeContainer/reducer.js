import types from "../../common/types";
const initialState = {
  isLoading: false,
  hasError: false,
  error: null,
  username: "",
  stations : []
};

export default function(state: any = state, action: Function) {
  switch (action.type) {
    case types.IS_LOADING:
      return {
        ...state,
        isLoading: action.isLoading
      };
    case types.SET_STATIONS:
      return{
        ...state,
        stations: action.stations
      };
      case types.SET_ERROR:
      return {
        ...state,
        error: action.error,
        hasError: true
      }
      default:
      return {
        ...state      }
  }
}