import Button from "../ui/Button/Button";

const ClientTable = ({ clients = [], onEdit, onDelete, onView }) => {
  if (clients.length === 0) {
    return <p>No clients found.</p>;
  }

  return (
    <div className="overflow-x-auto rounded-lg shadow-sm">
      <table className="w-full border-collapse border border-slate-200 dark:border-slate-700">
        <thead className="bg-slate-100 text-slate-800 dark:text-slate-100 dark:bg-slate-800">
          <tr>
            <th className="px-4 py-2 text-left">Name</th>
            <th className="px-4 py-2 text-left">Email</th>
            <th className="px-4 py-2 text-left hidden md:table-cell">Mobile</th>
            <th className="px-4 py-2 text-left">Company</th>
            <th className="px-4 py-2 text-left">Status</th>
            <th className="px-4 py-2 text-left hidden md:table-cell">Notes</th>
            <th className="px-4 py-2 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {clients.map((client) => (
            <tr
              key={client.id}
              className="w-full border-t border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 dark:text-slate-100 cursor-pointer"
              onClick={() => onView(client)}
            >
              <td className="px-4 py-2">{client.name}</td>
              <td className="px-4 py-2">{client.email}</td>
              <td className="px-4 py-2 hidden md:table-cell">{client.phone}</td>
              <td className="px-4 py-2">{client.company}</td>
              <td className="px-4 py-2">{client.status}</td>
              <td className="px-4 py-2 hidden md:table-cell">{client.notes}</td>

              <td className="px-4 py-2 flex gap-2">
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={(e) => {
                    e.stopPropagation(); //Prevent row click
                    onEdit(client);
                  }}
                >
                  Edit
                </Button>
                <Button
                  variant="danger"
                  size="sm"
                  onClick={(e) => {
                    e.stopPropagation();
                    onDelete(client.id);
                  }}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ClientTable;
