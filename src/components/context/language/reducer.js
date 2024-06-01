// import AsyncStorage from '@react-native-async-storage/async-storage';
export const lngReducer = (state, action) => {
  // console.log('reducer', action.payload)
  // console.log("action.name",action.name)
  // await AsyncStorage.setItem('selected_language', action.payload.name)

  switch (action.type) {
    case "TOGGLE": {
      localStorage.setItem("language", action.payload.name);
      console.log('action.payload.name', action.payload.name);
      console.log('action.payload.language', action.payload.language);
      // localStorage.setItem("language", action.payload.language);
      return {
        ...state,
        language: action.payload.language,
        name: action.payload.name,
        _isLoading: action.payload._isLoading
      };
    }
    default:
      return state;
  }
};
