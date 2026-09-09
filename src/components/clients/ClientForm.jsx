import { useState } from "react";

const ClientForm = ({ client, onSubmit, onCancel }) => {
  // Determine whether we're editing
  const isEditing = Boolean(client);

  // Form state
  const [formData, setFormData] = useState({
    name: client?.name || "",
    email: client?.email || "",
    phone: client?.phone || "",
    company: client?.company || "",
    status: client?.status || "active",
    notes: client?.notes || "",
  });

  // Handle input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((currentData) => ({
      ...currentData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    // Give the completed form data to the parent
    onSubmit(formData);
  };

  return (
    <div>
      <h2>{isEditing ? "Edit Client" : "Add Client"}</h2>

      <form onSubmit={handleSubmit}>
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Client name"
        />
        <input
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
        />
        <input
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="phone"
        />
        <input
          name="company"
          value={formData.company}
          onChange={handleChange}
          placeholder="Company"
        />

        <select name="status" value={formData.status} onChange={handleChange}>
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select>

        <textarea
          name="notes"
          value={formData.notes}
          onChange={handleChange}
          placeholder="Notes"
        />

        <button type="button" onClick={onCancel}>
          Cancel
        </button>

        <button type="submit">
          {isEditing ? "Update client" : "Create client"}
        </button>
      </form>
    </div>
  );
};

export default ClientForm;
