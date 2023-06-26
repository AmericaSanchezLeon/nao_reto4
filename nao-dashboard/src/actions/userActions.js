// userActions.js

export const addUser = (userData) => {
    return (dispatch) => {
      // Perform API request to add the user
      // You can use libraries like Axios or fetch to make the API call
  
      // For demonstration purposes, we're just logging the user data
      console.log('Adding user:', userData);
  
      // Dispatch an action to update the Redux state with the new user
      dispatch({
        type: 'ADD_USER',
        payload: userData,
      });
    };
  };
  