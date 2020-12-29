import React from "react";
import "../styles/Alert.css";
import PropTypes from "prop-types";

const Alert = (props) => {
  const { message, success } = props;

  return (
    <div className={`alert ${success ? "success" : "error"}`}>{message}</div>
  );
};

export default Alert;

Alert.propTypes = {
  message: PropTypes.string.isRequired,
  success: PropTypes.bool,
};

Alert.defaultProps = {
  success: false,
};
