const initialState = {
    searchTerm: '',
  };
  
  export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_SEARCH_TERM':
        return {
          ...state,
          searchTerm: action.payload,
        };
      default:
        return state;
    }
  };
  