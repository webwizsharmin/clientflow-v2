import { useState } from "react";
import Input from "../ui/Input";
import Button from "../ui/Button/Button";

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
    <form
      onSubmit={handleSubmit}
      className="flex-1 overflow-y-auto p-6 space-y-6"
    >
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 text-gray-700 dark:text-gray-300">
        <Input
          name="name"
          label="Full Name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Client name"
          required
        />
        <Input
          name="email"
          type="email"
          label="Email"
          value={formData.email}
          onChange={handleChange}
          placeholder="jane@company.com"
          required
        />
        <Input
          name="phone"
          label="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="+91 12345-12345"
        />
        <Input
          name="company"
          label="Company"
          value={formData.company}
          onChange={handleChange}
          placeholder="Street, City, Country"
        />
        <div>
          <label className="form-label text-slate-700 dark:text-slate-200">
            Status
          </label>
          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="form-select w-full px-3 py-2 border rounded-md shadow-sm bg-white dark:bg-slate-800 border-gray-300 dark:border-slate-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-1 focus:ring-blue-500"
          >
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>

        <div className="md:col-span-2">
          <label className="form-label text-slate-700 dark:text-slate-200">
            Notes
          </label>

          <textarea
            name="notes"
            value={formData.notes}
            onChange={handleChange}
            placeholder="Notes"
            className="w-full px-3 py-2 border rounded-md shadow-sm bg-white dark:bg-slate-800 border-gray-300 dark:border-slate-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>
      </div>

      <div className="flex flex-col-reverse gap-3 border-t border-slate-200 dark:border-slate-700 pt-6 sm:flex-row sm:justify-end">
        <Button variant="secondary" type="button" onClick={onCancel}>
          Cancel
        </Button>
        <Button variant="primary" type="submit">
          {isEditing ? "Update Client" : "Save Client"}
        </Button>
      </div>
    </form>
  );
};

export default ClientForm;
