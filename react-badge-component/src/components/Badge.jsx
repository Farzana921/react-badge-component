import PropTypes from "prop-types";

function Badge({ label, value }) {
  return (
    <p>
      <strong>{label}:</strong> {value}
    </p>
  );
}

Badge.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default Badge;
