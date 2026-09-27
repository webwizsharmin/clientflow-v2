import Button from "../ui/Button/Button";

const ClientTable = ({ clients = [], onEdit, onDelete, onView }) => {
  if (clients.length === 0) {
    return <p>No clients found.</p>;
  }

  return (
    <div className=" overflow-x-auto rounded-lg shadow-sm">
      <table className="min-w-full text-sm border-collapse border border-slate-200 dark:border-slate-700">
        <thead className="bg-slate-100 text-slate-800 dark:text-slate-100 dark:bg-slate-800">
          <tr>
            <th className="px-4 py-2 text-left">Name</th>
            <th className="px-2 py-1 text-left sm:px-4 sm:py-2 hidden md:table-cell">
              Email
            </th>
            <th className="px-4 py-2 text-left hidden md:table-cell">Mobile</th>
            <th className="px-4 py-2 text-left hidden md:table-cell">
              Company
            </th>
            <th className="px-4 py-2 text-left">Status</th>
            <th className="px-4 py-2 text-left hidden md:table-cell">Notes</th>
            <th className="px-4 py-2 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {clients.map((client) => (
            <tr
              key={client.id}
              className="border-t border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 dark:text-slate-100 cursor-pointer"
              onClick={() => onView(client)}
            >
              <td className="px-4 py-2">{client.name}</td>
              <td className="px-4 py-2 hidden md:table-cell">{client.email}</td>
              <td className="px-4 py-2 hidden md:table-cell">{client.phone}</td>
              <td className="px-4 py-2 hidden md:table-cell">
                {client.company}
              </td>
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
