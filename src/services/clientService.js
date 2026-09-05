import { getClients, saveClients } from "./storageService";

/**
 * Validate the data required to create/update a client
 *
 * This function belongs here rather than inside a component
 * because business rules should depend on the UI
 */

const validateClient = (clientData) => {
  const errors = {};

  // Name is required.
  if (
    !clientData.name ||
    typeof clientData.name !== "string" ||
    !clientData.name.trim()
  ) {
    errors.name = "client name is required.";
  }

  // Email is required
  if (
    !clientData.email ||
    typeof clientData.email !== "string" ||
    !clientData.email.trim()
  ) {
    errors.email = "Client email is required.";
  }

  // Basic email validation
  if (
    clientData.email &&
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(clientData.email)
  ) {
    errors.email = "Please provide a valid email address.";
  }

  // Status is required
  const validStatuses = ["active", "inactive"];

  if (!validStatuses.includes(clientData.status)) {
    errors.status = "Invalid client status.";
  }

  return errors;
};
/**
 * Throw an error if client validation fails.
 */
const ensureValidateClient = (clientData) => {
  const errors = validateClient(clientData);

  if (Object.keys(errors).length > 0) {
    const error = new Error("Client validation failed.");

    // Attach field-level errors so the UI can eventually
    // display the appropriate message beside each field.
    error.validationErrors = errors;

    throw error;
  }
};

/**
 * CREATE
 *
 * creates a new client and persist the updated collection.
 */

export const createClient = (clientData) => {
  // 1. Validate incoming data.
  ensureValidateClient(clientData);

  // 2. Read the current clients.
  const clients = getClients();

  // 3. Create a new client Object.
  const now = new Date().toISOString();

  const newClient = {
    id: `client_${crypto.randomUUID}`,

    name: clientData.name.trim(),
    email: clientData.email.trim(),
    phone: clientData.phone?.trim() || "",
    company: clientData.company?.trim() || "",
    status: clientData.status,
    notes: clientData.notes?.trim() || "",

    createdAt: now,
    updatedAt: now,
  };

  // 4.Create a new array.
  const updatedClients = [...clients, newClient];

  // 5.Persist the new collection
  saveClients(updatedClients);

  // 6.Return the newly-created client.
  return newClient;
};

/**
 * READ
 *
 * Returns the complete clients collection.
 */
export const getAllClients = () => {
  return getClients();
};

/**
 * UPDATE
 *
 * Finds a client by ID and replaces it with updated data
 */
export const updateClient = (clientId, clientData) => {
  // 1. Validate the incoming data.
  ensureValidateClient(clientData);

  // 2. Get current clients.
  const clients = getClients();

  // 3. Find the client to update
  const existingClient = clients.find((client) => client.id === clientId);

  if (!existingClient) {
    throw new Error("Client not found.");
  }

  // 4. Create the updated object
  const updateClient = {
    ...existingClient,

    name: clientData.name.trim(),
    email: clientData.email.trim(),
    phone: clientData.phone?.trim() || "",
    company: clientData.company?.trim() || "",
    status: clientData.status,
    notes: clientData.notes?.trim() || "",

    // keep the original creation date
    createdAt: existingClient.createdAt,

    // Update the modification date
    updatedAt: new Date().toISOString(),
  };

  // 5. Create a new array
  const updatedClients = clients.map((client) => {
    client.id === clientId ? updateClient : client;
  });

  // 6. Persist
  saveClients(updatedClients);

  // 7. Return the updated object
  return updateClient;
};

/**
 * DELETE
 *
 *
 */
export const deleteClient = (
  clientId,
  { hasInvoicesForClient = () => false, hasTasksForClient = () => false } = {},
) => {
  // 1. Get current clients
  const clients = getClients();

  // 2. Make sure the client exist
  const existingClient = clients.find((client) => client.id === clientId);

  if (!existingClient) {
    throw new Error("Client not found.");
  }

  // 3. Enforce the RESTRICT rule
  if (hasInvoicesForClient(clientId)) {
    throw new Error(
      "Cannot delete this client because invoices are associated with it.",
    );
  }

  if (hasTasksForClient(clientId)) {
    throw new Error(
      "Cannot delete this client because tasks are associated with it",
    );
  }

  // 4. Remove the client by ID
  const updatedClients = clients.filter((client) => client.id !== clientId);

  // 5. Persist
  saveClients(updatedClients);

  return clientId;
};
