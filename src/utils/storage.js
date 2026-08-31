const STORAGE_KEY = "clientflow-user";

export const storage = {
  saveUser: (user) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringfy(user));
  },

  getUser: () => {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : null;
  },

  clearUser: () => {
    localStorage.removeItem(STORAGE_KEY);
  },
};
