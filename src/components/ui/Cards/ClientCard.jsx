import Card from "./Card";
import Button from "../Button";

export default function ClientCard({ name, email, company, status }) {
  return (
    <Card
      title={name}
      subtitle={company}
      description={`Email: ${email} | Status: ${status}`}
      actions={
        <>
          <Button variant="primary">Edit</Button>
          <Button variant="danger">Delete</Button>
        </>
      }
    />
  );
}
