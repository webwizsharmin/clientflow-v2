const ClientTable = ({ clients, onEdit, onDelete }) => {
  if (clients.length === 0) {
    return <p>No clients found.</p>;
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Company</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {clients.map((client) => (
          <tr key={client.id}>
            <td>{client.name}</td>
            <td>{client.email}</td>
            <td>{client.company}</td>
            <td>{client.status}</td>

            <td>
              <button onClick={() => onEdit(client)}>Edit</button>
              <button onClick={() => onDelete(client.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ClientTable;
