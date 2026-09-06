/**
 * Custom hook responsible for the React-side Client state.
 *
 * The hook acts as the bridge between:
 *
 * UI -> React state ->Client service
 */

import { useCallback, useEffect, useState } from "react";
import {
  createClient,
  getAllClients,
  updateClient as updateClientService,
  deleteClient as deleteClientService,
} from "../services/clientService";

export const useClients = () => {
  // React state
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // READ
  const loadClients = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      const storedClients = getAllClients();

      setClients(storedClients);
    } catch (error) {
      console.error("Failed to load clients:", error);

      setError(error.message);
    } finally {
      setLoading(false);
    }
  }, []);

  // Load clients when the hook first runs.
  useEffect(() => {
    (async () => {
      await loadClients();
    })();
  }, [loadClients]);

  // CREATE
  const addClient = useCallback((clientData) => {
    try {
      setError(null);

      // service handles validation, ID generation,
      // Persistence, and object creation
      const newClient = createClient(clientData);

      // Update React state with the new client
      setClients((currentClients) => [...currentClients, newClient]);
      return newClient;
    } catch (error) {
      console.error("Failed to create client:", error);

      setError(error);

      // Let the component decide how to display the error
      throw error;
    }
  }, []);

  // UPDATE
  const updateClient = useCallback((clientId, clientData) => {
    try {
      setError(null);

      // Service performs the actual business operation.
      const updatedClient = updateClientService(clientId, clientData);

      // Replace the matching client in the React state
      setClients((currentClients) => {
        currentClients.map((client) =>
          client.id === clientId ? updatedClient : client,
        );
      });

      return updatedClient;
    } catch (error) {
      console.error("Failed to update client:", error);

      setError(error);

      throw error;
    }
  }, []);

  // DELETE
  const deleteClient = useCallback((clientId, relationshipChecks) => {
    try {
      setError(null);

      // Service checks the Restrict rule and performs deletion.
      deleteClientService(clientId, relationshipChecks);

      // Remove the client from React state.
      setClients((currentClients) =>
        currentClients.filter((client) => client.id !== clientId),
      );
    } catch (error) {
      console.error("Failed to delete client:", error);

      setError(error);

      throw error;
    }
  }, []);

  //   Public API of this hook

  return {
    clients,
    loading,
    error,

    loadClients,
    addClient,
    updateClient,
    deleteClient,
  };
};
