import { useState } from "react";
import { AuthContext } from "./AuthContext";
import { demoUser } from "../data/demo/demoUser";

export const AuthProvider = ({ children }) => {
  // Track the registered account (persisted in localStorage)
  const [registeredUser, setRegisteredUser] = useState(() => {
    try {
      const storedAccount = localStorage.getItem("clientflow-user");
      return storedAccount ? JSON.parse(storedAccount) : null;
    } catch {
      return null;
    }
  });

  //   Track active session
  const [user, setUser] = useState(() => {
    try {
      const storedSession = localStorage.getItem("clientflow-session");
      return storedSession ? JSON.parse(storedSession) : null;
    } catch {
      return null;
    }
  });

  const isDemoMode = user?.isDemo === true;
  const isAuthicated = Boolean(user && !isDemoMode);

  // Check if a user is registered
  const isRegistered = !!registeredUser;

  const register = (email, password) => {
    // mock registration

    if (!password || password.length < 6) return false;

    const account = { email, password };
    localStorage.setItem("clientflow-user", JSON.stringify(account));
    setRegisteredUser(account);

    // auto Login after registration

    const session = { email, token: "m-token-456" };
    localStorage.setItem("clientflow-session", JSON.stringify(session));
    setUser(session);
    return true;
  };

  const login = (email, password) => {
    // validation
    if (
      registeredUser &&
      registeredUser.email === email &&
      registeredUser.password === password
    ) {
      const session = { email, token: "m-token-123" };
      localStorage.setItem("clientflow-session", JSON.stringify(session));
      setUser(session);
      return true;
    }

    return false;
  };

  const logout = () => {
    localStorage.removeItem("clientflow-session");
    setUser(null);
  };

  // Create demo Mode
  const enterDemoMode = () => {
    setUser(demoUser);

    localStorage.setItem("clientflow-session", JSON.stringify(demoUser));
  };

  // Exit Demo Mode
  const exitDemoMode = () => {
    if (!isDemoMode) return;
    setUser(null);

    localStorage.removeItem("clientflow-session");
  };

  const resetAuth = () => {
    localStorage.removeItem("clientflow-user");
    localStorage.removeItem("clientflow-session");
    setRegisteredUser(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        registeredUser,
        isRegistered,
        login,
        register,
        logout,
        resetAuth,
        isDemoMode,
        isAuthicated,
        enterDemoMode,
        exitDemoMode,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
