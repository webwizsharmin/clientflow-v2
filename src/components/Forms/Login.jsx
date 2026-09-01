import { useContext, useState } from "react";
import Input from "../ui/Input";
import Button from "../ui/Button";
import { AuthContext } from "../../context/authContext";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Invalid email address";
    }

    if (!password) {
      newErrors.password = "password is required";
    } else if (password.length < 6) {
      newErrors.password = "password must be at least 6 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      const success = login(email, password);
      if (success) {
        navigate("/dashboard");
      } else {
        alert("Login failed");
      }
    }
  };

  return (
    <form
      className="bg-white/80 w-full max-w-sm  mx-auto rounded shadow-md p-6"
      onSubmit={handleSubmit}
    >
      <h2 className="text-2xl font-bold mb-2">Login</h2>

      <Input
        type="email"
        label="Email"
        placeholder="you@example.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        error={errors.email}
        required
      />
      <Input
        type="password"
        label="Password"
        placeholder="......"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        error={errors.password}
        required
      />

      <Button type="submit" variant="primary" size="md" fullWidth>
        Sign In
      </Button>
    </form>
  );
}
