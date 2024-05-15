// src/context/AuthContext.tsx
import React, { createContext, useState, useEffect, useContext, ReactNode } from 'react';
import { getToken, removeToken, setToken } from '../../utils/auth';
import { CustomerUser } from '../../models/CustomerUser';

// Define la interfaz para el contexto de autenticación
interface AuthContextType {
  user: CustomerUser | null;
  login: (user: CustomerUser, token: string) => void;
  logout: () => void;
}

// Define la interfaz para las props del AuthProvider
interface AuthProviderProps {
  children: ReactNode;
}

// Crea el contexto con un valor inicial undefined
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Define el AuthProvider, que recibe las props y usa children
export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<CustomerUser | null>(null);

  useEffect(() => {
    const token = getToken();
    if (token) {
      // Recuperar la información del usuario usando el token
      // setUser(user); // Asigna la información del usuario recuperada
    }
  }, []);

  const login = (user: CustomerUser, token: string) => {
    setToken(token);
    setUser(user);
  };

  const logout = () => {
    removeToken();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook personalizado para usar el contexto de autenticación
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
