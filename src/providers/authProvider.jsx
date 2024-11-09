import { createContext, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext({
  getToken: () => null,
  logout: () => {},
});

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();

  const getToken = () => localStorage.getItem('token');

  const logout = () => {
    localStorage.removeItem('token'); // Remove token from localStorage
    navigate('/login'); // Redirect to login page
  };

  useEffect(() => {
    if (!getToken()) {
      navigate('/login'); // Redirect if no token is found
    }
  }, [navigate]);

  return (
    <AuthContext.Provider value={{ getToken, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
