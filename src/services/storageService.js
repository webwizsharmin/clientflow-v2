const CLIENTS_STORAGE_KEY = "clientflow-clients";

/**
 * Read the clients array from localStorage.
 *
 * localStorage can only store strings, so:
 * 1. Get the stored string
 * 2. Parse it back into JavaScript
 * 3. Return an array
 *
 * If nothing has been stored yet, return an empty array.
 */

export const getClients = () => {
  const storedClients = localStorage.getItem(CLIENTS_STORAGE_KEY);

  if (!storedClients) {
    return [];
  }

  try {
    const clients = JSON.parse(storedClients);

    // Protect the application from malformed stored data.
    return Array.isArray(clients) ? clients : [];
  } catch (error) {
    console.error("Failed to parse clients from localStorage:", error);

    return [];
  }
};

/**
 * Save the complete clients array to localStorage.
 *
 * Convert the JavaScript array into a JSON string
 * because localStorage only stores strings.
 */

export const saveClients = (clients) => {
  localStorage.setItem(CLIENTS_STORAGE_KEY, JSON.stringify(clients));
};

/**
 * Remove all stored clients.
 *
 * Useful during development/testing.
 */
export const clearClients = () => {
  localStorage.removeItem(CLIENTS_STORAGE_KEY);
};
