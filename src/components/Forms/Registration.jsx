import Input from "../ui/Input";
import Button from "../ui/Button";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

export default function Registration({ title, description }) {
  const { register } = useContext(AuthContext);
  const Navigate = useNavigate();

  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
    cpassword: "",
    terms: false,
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const validateForm = () => {
    if (!formData.fname || !formData.lname) return "Name is required";
    if (!formData.email.includes("@")) return "Invalid email address";
    if (formData.password.length < 6)
      return "Password must be at least 6 characters";
    if (formData.password !== formData.cpassword)
      return "Passwords do not match";
    if (!formData.terms) return "You must accept the terms";
    return null;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      return;
    }
    setError("");

    // Call register from AuthContext
    const success = register(formData.email, formData.password);

    if (success) {
      Navigate("/dashboard");
    } else {
      setError("Registration failed. Please try again.");
    }
  };

  return (
    <div className=" md:fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm z-50 overflow-y-auto">
      <div className="flex min-h-full items-center justify-center">
        <div className="w-full max-w-md mx-4 sm:max-auto my-8 p-6 sm:p-8 bg-white dark:bg-gray-900 rounded-lg shadow-2xl transition-colors duration-300">
          <h2 className="text-2xl sm:text-3xl font-bold mb-2 text-gray-900 dark:text-gray-100">
            {title || "Create Your Account"}
          </h2>
          <p className="text-sm mb-6 text-gray-600 dark:text-gray-400">
            {description || "Sign up to access exclusive features"}
          </p>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="flex flex-col sm:flex-row gap-4">
              <Input
                type="text"
                name="fname"
                label="First Name"
                placeholder="Enter your first name"
                value={formData.fname}
                onChange={handleChange}
                required
              />
              <Input
                type="text"
                name="lname"
                label="Last Name"
                placeholder="Enter your last name"
                value={formData.lname}
                onChange={handleChange}
                required
              />
            </div>
            <Input
              type="email"
              name="email"
              label="Email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <div className="flex flex-col sm:flex-row gap-4">
              <Input
                type="password"
                name="password"
                label="Password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                required
              />
              <Input
                type="password"
                name="cpassword"
                label="Confirm Password"
                placeholder="Confirm your password"
                value={formData.cpassword}
                onChange={handleChange}
                required
              />
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                name="terms"
                id="terms"
                checked={formData.terms}
                onChange={handleChange}
                className="mr-2 accent-blue-600"
              />
              <label htmlFor="terms" className="text-sm text-gray-400">
                I agree to the terms of use and privacy policy
              </label>
            </div>

            {error && <p className="text-red-600 text-sm">{error}</p>}

            <Button
              type="submit"
              variant="primary"
              fullWidth
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md transition-colors duration-200"
            >
              Sign Up
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
