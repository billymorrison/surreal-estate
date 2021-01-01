import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const AlertBar = styled.div`
  width: 100%;
  padding: 10px;

  ${({ success }) =>
    success
      ? `border: 1px solid green;
      background-color: rgb(202, 250, 198);`
      : `border: 1px solid red;
      background-color: rgb(250, 203, 184);`}
`;

const Alert = (props) => {
  const { message, success } = props;

  return <AlertBar success={success}>{message}</AlertBar>;
};

export default Alert;

Alert.propTypes = {
  message: PropTypes.string.isRequired,
  success: PropTypes.bool,
};

Alert.defaultProps = {
  success: false,
};
