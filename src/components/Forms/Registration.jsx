import Input from "../ui/Input";
import Button from "../ui/Button";
import { useState } from "react";

export default function Registration({ title, description }) {
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
    alert("Form submitted successfully!");
  };

  return (
    <div className="w-full max-w-sm sm:max-w-md mx-auto p-4 sm:p-6 bg-white/90 dark:bg-gray-800/25 rounded shadow-md">
      <h2 className="text-2xl sm:text-3xl font-bold mb-2 text-gray-900 dark:text-gray-100">
        {title}
      </h2>
      <p className="text-xs sm:text-sm mb-6 text-gray-600 dark:text-gray-300">
        {description}
      </p>
      <form onSubmit={handleSubmit} className="space-y-4">
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
            className="mr-2"
          />
          <label htmlFor="terms" className="text-sm">
            I agree to the terms of use and privacy policy
          </label>
        </div>

        {error && <p className="text-red-600 text-sm">{error}</p>}

        <Button type="submit" variant="primary" fullWidth>
          Sign Up
        </Button>
      </form>
    </div>
  );
}
