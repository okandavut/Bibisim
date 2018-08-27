import types from "../../common/types";
const initialState = {
  isLoading: false,
  hasError: false,
  error: null,
  username: "",
  networks : []
};

export default function(state: any = initialState, action: Function) {
  switch (action.type) {
    case types.IS_LOADING:
      return {
        ...state,
        isLoading: action.isLoading
      };
    case types.SET_NETWORKS:
      return{
        ...state,
        networks: action.networks
      };
      case types.SET_ERROR:
      return {
        ...state,
        error: action.error,
        hasError: true
      }
      default:
      return {
        ...state  
      }
  }
}