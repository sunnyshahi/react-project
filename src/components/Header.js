import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button color="green" text="Add" />
    </header>
  );
};

// Header.defaultProps uses the properties if the property is not present
Header.defaultProps = {
  title: "Hello World",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
