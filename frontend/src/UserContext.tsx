import React, { createContext, useContext, useState, ReactNode } from "react";

// Define a User type
interface User {
  user_id: BigInteger;
  username: string;
  password: string;
  is_admin: boolean;
}

// Define the shape of the context value
interface UserContextType {
  user: User | null;
  login: (userData: User) => void;
  logout: () => void;
  register: (userData: User) => void;
}

// Create a Context with a default value
const UserContext = createContext<UserContextType | undefined>(undefined);

// Create a Provider Component
export const UserProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);

  const login = (userData: User) => setUser(userData);
  const logout = () => setUser(null);
  const register = (userData: User) => setUser(userData);

  return (
    <UserContext.Provider value={{ user, login, logout, register }}>
      {children}
    </UserContext.Provider>
  );
};

// Custom hook to use the UserContext
export const useUser = (): UserContextType => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
