import { useState } from "react";
import { AuthContext } from "./authContext";

export const AuthProvider = ({ Children }) => {
  const [user, setUser] = useState(() => {
    try {
      const storedUser = localStorage.getItem("clientflow-user");
      return storedUser ? JSON.parse(storedUser) : null;
    } catch {
      return null;
    }
  });

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

    if (!password || password.length < 6) return false;
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
