import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ Children }) => {
  const [user, setUser] = useState(null);

  // Load user from localStorage on mount
  useEffect(() => {
    const storedUser = localStorage.getItem("clientflow-user");
    if (storedUser) setUser(JSON.parse(storedUser));
  }, []);

  const login = (email, password) => {
    // validation
    if (email && password) {
      const mockUser = { email, token: "m-token-123" };
      localStorage.setItem("clientflow-user", JSON.stringify(mockUser));
      setUser(mockUser);
      return true;
    }

    return false;
  };

  const register = (email, password) => {
    // mock registration
    const mockUser = { email, token: "m-token-456" };
    localStorage.setItem("clientflow-user", JSON.stringify(mockUser));
    setUser(mockUser);
    return true;
  };

  const logout = () => {
    localStorage.removeItem("clientflow-user");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {Children}
    </AuthContext.Provider>
  );
};
