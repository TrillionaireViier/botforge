import { createContext, useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();
const API_URL = '/api'; // Use relative path so Vite proxy handles it

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem('botforge_user');
    return saved ? JSON.parse(saved) : null;
  });
  
  const navigate = useNavigate();

  // Automatically sync user with backend on load
  useEffect(() => {
    const token = localStorage.getItem('botforge_token');
    if (token) {
      fetch(`${API_URL}/user`, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Accept': 'application/json'
        }
      })
      .then(res => res.json())
      .then(data => {
        if (data && data.id) {
          // Frontend tier sync after webhook updates it in DB
          setUser(data);
          localStorage.setItem('botforge_user', JSON.stringify(data));
        }
      })
      .catch(err => console.error('Failed to sync user:', err));
    }
  }, []);

  const login = async (email, password) => {
    try {
      const response = await fetch(`${API_URL}/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });

      if (response.ok) {
        const data = await response.json();
        setUser(data.user);
        localStorage.setItem('botforge_user', JSON.stringify(data.user));
        localStorage.setItem('botforge_token', data.token);
        navigate(data.user.role === 'admin' ? '/admin' : '/user');
        return true;
      }
      return false;
    } catch (error) {
      console.error('Login error:', error);
      return false;
    }
  };

  const register = async (email, password) => {
    try {
      const response = await fetch(`${API_URL}/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });
      return response.ok;
    } catch (error) {
      console.error('Register error:', error);
      return false;
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('botforge_user');
    localStorage.removeItem('botforge_token');
    navigate('/login');
  };

  return (
    <AuthContext.Provider value={{ user, setUser, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
