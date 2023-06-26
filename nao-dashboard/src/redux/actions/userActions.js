// userActions.js
export const logout = () => {
    return (dispatch) => {
      // Aquí realizas las acciones necesarias para cerrar sesión
      // por ejemplo, eliminar el token de autenticación del estado de Redux
      dispatch({ type: 'LOGOUT_SUCCESS' });
      // Redireccionar al usuario a la página de inicio de sesión
      // navigate('/login');
    };
  };
  