export const login = (credentials) => {
  return (dispatch) => {
    // Simulating login API request
    setTimeout(() => {
      // Simulated successful response
      const response = {
        data: {
          token: 'your-auth-token',
        },
      };
      // Dispatching login success action
      dispatch({ type: 'LOGIN_SUCCESS', payload: response.data.token });
    }, 1000);
  };
};

export const register = (userData) => {
  return (dispatch) => {
    // Simulating registration API request
    setTimeout(() => {
      // Simulated successful response
      const response = {
        data: {
          message: 'User registered successfully',
        },
      };
      // Dispatching register success action
      dispatch({ type: 'REGISTER_SUCCESS', payload: response.data });
    }, 1000);
  };
};
