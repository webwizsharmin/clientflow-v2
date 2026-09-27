export default function Card({
  title,
  subtitle,
  description,
  actions,
  children,
  className = "",
}) {
  return (
    <div
      className={`bg-white rounded-xl shadow-md overflow-hidden p-4 ${className}`}
    >
      {title && <h3 className="text-lg font-bold">{title}</h3>}
      {subtitle && <p className="text-sm text-gray-500">{subtitle}</p>}
      {description && (
        <p className="text-sm text-gray-700 mt-2">{description}</p>
      )}

      {/* Flexible slot for custom content */}
      {children && <div className="mt-3">{children}</div>}

      {/* Actions (buttons, links, etc.) */}
      {actions && <div className="mt-4 flex gap-2">{actions}</div>}
    </div>
  );
}
