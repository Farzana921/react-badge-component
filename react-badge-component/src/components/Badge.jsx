function Badge({ label, value }) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "10px",
        borderRadius: "8px",
        marginBottom: "10px",
        width: "fit-content",
      }}
    >
      <strong>{label}:</strong> {value}
    </div>
  );
}

export default Badge;
