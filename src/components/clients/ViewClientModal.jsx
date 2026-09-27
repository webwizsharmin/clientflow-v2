import Button from "../ui/Button/Button";
import Modal from "../ui/Modal";

const ViewClientModal = ({ client, isOpen, onClose }) => {
  if (!client) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Client Details">
      <div className="space-y-2 text-slate-700 dark:text-slate-300">
        <p>
          <strong>Name:</strong>
          <span> {client.name}</span>
        </p>
        <p>
          <strong>Email:</strong>
          <span> {client.email}</span>
        </p>
        <p>
          <strong>Phone:</strong> <span> {client.phone}</span>
        </p>
        <p>
          <strong>Company:</strong>
          <span> {client.company}</span>
        </p>
        <p>
          <strong>Status:</strong>
          <span> {client.status}</span>
        </p>
        <p>
          <strong>Notes:</strong>
          <span> {client.notes}</span>
        </p>
      </div>
      <div className="mt-4 flex justify-end">
        <Button variant="secondary" onClick={onClose}>
          Close
        </Button>
      </div>
    </Modal>
  );
};

export default ViewClientModal;
