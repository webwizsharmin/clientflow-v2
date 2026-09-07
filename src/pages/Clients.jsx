import { useState } from "react";
import { useClients } from "../hooks/useClients";
import ClientForm from "../components/clients/ClientForm";
import ClientTable from "../components/clients/ClientTable";

const Clients = () => {
  // Client application state/actions
  const { clients, loading, error, addClient, updateClient, deleteClient } =
    useClients();

  // UI State

  // Is the modal open?
  const [isFormOpen, setIsFormOpen] = useState(false);

  // which client are we editing ?
  // null means we are creating a new clients.
  const [selectedClient, setSelectedClient] = useState(null);

  // Open form for creating
  const handleAddClick = () => {
    setSelectedClient(null);
    setIsFormOpen(true);
  };

  // open form for editing
  const handleEditClick = (client) => {
    setSelectedClient(client);
    setIsFormOpen(true);
  };

  // Close form
  const handleCloseForm = () => {
    setIsFormOpen(false);
    setSelectedClient(null);
  };

  // Form submission
  const handleFormSubmit = (formData) => {
    if (selectedClient) {
      // EDIT MODE
      updateClient(selectedClient.id, formData);
    } else {
      // CREATE MODE
      addClient(formData);
    }

    // Close modal after successful operation
    handleCloseForm();
  };

  // Loading state
  if (loading) {
    return <p>Loading clients...</p>;
  }

  // Page
  return (
    <section>
      <header>
        <h1>Clients</h1>
        <button onClick={handleAddClick}>+ Add client</button>
      </header>

      {error && <p>{error.message || error}</p>}

      <ClientTable
        client={clients}
        onEdit={handleEditClick}
        onDelete={deleteClient}
      />

      {isFormOpen && (
        <ClientForm
          client={selectedClient}
          onSubmit={handleFormSubmit}
          onCancel={handleCloseForm}
        />
      )}
    </section>
  );
};

export default Clients;
