const STORAGE_KEY = "clientflow-user";
const SESSION_KEY = "clientflow-session";

export const storage = {
  saveUser: (user) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
  },

  getUser: () => {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : null;
  },

  clearUser: () => {
    localStorage.removeItem(STORAGE_KEY);
  },

  // Active session
  saveSession: (session) => {
    localStorage.setItem(SESSION_KEY, JSON.stringify(session));
  },

  getSession: () => {
    const data = localStorage.getItem(SESSION_KEY);
    return data ? JSON.parse(data) : null;
  },

  clearSession: () => {
    localStorage.removeItem(SESSION_KEY);
  },

  // Reset Everything (refresh start)
  resetAuth: () => {
    localStorage.removeItem(STORAGE_KEY);
    localStorage.removeItem(SESSION_KEY);
  },
};
