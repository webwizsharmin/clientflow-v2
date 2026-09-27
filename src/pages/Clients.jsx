import { useState } from "react";
import { useClients } from "../hooks/useClients";
import ClientForm from "../components/clients/ClientForm";
import ClientTable from "../components/clients/ClientTable";
import Button from "../components/ui/Button/Button";
import Modal from "../components/ui/Modal";
import ViewClientModal from "../components/clients/ViewClientModal";
import StatCard from "../components/ui/Cards/StatCard";
import { Briefcase, CheckCircle, User, XCircle } from "@boxicons/react";

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
  const [isViewOpen, setIsViewOpen] = useState(false);
  const [viewClient, setViewClient] = useState(null);

  // Search + filter state
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

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

  const handleViewClient = (client) => {
    setViewClient(client);
    setIsViewOpen(true);
  };

  const handleCloseView = () => {
    setIsViewOpen(false);
    setViewClient(null);
  };

  // Loading state
  if (loading) return <p>Loading clients...</p>;

  // Stats
  const totalClients = clients.length;
  const activeCount = clients.filter((c) => c.status === "active").length;
  const inactiveCount = clients.filter((c) => c.status === "inactive").length;
  const companyCount = new Set(clients.map((c) => c.company)).size;

  // Filter + search
  const filteredClients = clients.filter((c) => {
    const matchesSearch =
      c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus =
      statusFilter === "all" ? true : c.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  // Page
  return (
    <section className="space-y-6">
      <header className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-slate-800 dark:text-slate-300">
          Clients
        </h1>
        <Button variant="primary" onClick={handleAddClick}>
          + Add Client
        </Button>
      </header>

      {/* Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          icon={User}
          title="Total Clients"
          amount={totalClients}
          compare={`${activeCount} active`}
          compareType="up"
        />

        <StatCard
          icon={CheckCircle}
          title="Active Clients"
          amount={activeCount}
          compare={`${inactiveCount} inactive`}
          compareType="neutral"
        />

        <StatCard
          icon={XCircle}
          title="Inactive Clients"
          amount={inactiveCount}
          compare="Retention focus"
          compareType="down"
        />

        <StatCard
          icon={Briefcase}
          title="Companies"
          amount={companyCount}
          compare="Unique organization"
          compareType="neutral"
        />
      </div>

      {/* Search + Filter Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-slate-50 dark:bg-slate-800 p-4 rounded-lg shadow-sm">
        <input
          type="text"
          placeholder="Search by name or email..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-1 px-3 py-2 border rounded-md shadow-sm bg-white dark:bg-slate-900 border-gray-300 dark:border-slate-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="w-full sm:w-40 px-3 py-2 border rounded-md shadow-sm bg-white dark:bg-slate-900 border-gray-300 dark:border-slate-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-1 focus:ring-blue-500"
        >
          <option value="all">All Status</option>
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select>
      </div>

      {error && (
        <p className="text-red-500">{error.message || String(error)}</p>
      )}

      <ClientTable
        clients={filteredClients}
        onEdit={handleEditClick}
        onDelete={deleteClient}
        onView={handleViewClient}
      />

      {/* Form Modal */}
      <Modal
        isOpen={isFormOpen}
        onClose={handleCloseForm}
        title={selectedClient ? "Edit Client" : "Add Client"}
      >
        <ClientForm
          client={selectedClient}
          onSubmit={handleFormSubmit}
          onCancel={handleCloseForm}
        />
      </Modal>

      {/* View Modal */}
      <ViewClientModal
        client={viewClient}
        isOpen={isViewOpen}
        onClose={handleCloseView}
      />
    </section>
  );
};

export default Clients;
