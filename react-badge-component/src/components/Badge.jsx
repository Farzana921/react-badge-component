function Badge({ label, value, color }) {
  return (
    <div
      style={{
        border: `1px solid ${color}`,
        color: color,
        padding: "10px 14px",
        borderRadius: "12px",
        marginBottom: "10px",
        width: "fit-content",
      }}
    >
      <strong>{label}:</strong> {value}
    </div>
  );
}

export default Badge;
