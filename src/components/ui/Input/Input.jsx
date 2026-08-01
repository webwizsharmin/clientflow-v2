const Input = ({
  type = "text",
  label,
  placeholder,
  value,
  onchange,
  error,
  required = false,
}) => {
  const id = label.toLowerCase().replace(/\s+/g, "-");

  return (
    <div className="mb-4">
      {label && (
        <label
          htmlFor={id}
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          {label}
          {required && <span className="text-red-500">*</span>}
        </label>
      )}

      <input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onchange={onchange}
        required={required}
        className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 ${error ? "border-red-500" : "border-gray-300"}`}
      />

      {error && <p className="mt-1 text-sm text-red-500"> {error} </p>}
    </div>
  );
};

export default Input;
