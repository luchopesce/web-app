import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from '../features/authSlice';
import { AuthContext } from '../context/AuthContext';

const AuthProvider = ({ children }) => {
  const dispatch = useDispatch();
  const authState = useSelector((state) => state.auth);

  const handleLogin = (id = "", name = "", rol = "", email = "", avatar = "") => {
    dispatch(login({ id, name, rol, email, avatar }));
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <AuthContext.Provider value={{
      ...authState,
      login: handleLogin,
      logout: handleLogout,
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
