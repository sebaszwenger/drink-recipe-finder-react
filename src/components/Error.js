import PropTypes from "prop-types";

const Error = ({ message }) => {
  return (
    <div>
      <p className="my-3 p-2 text-center alert-primary alert">{message}</p>
    </div>
  );
};

Error.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Error;
