import PropTypes from "prop-types";
import "./Select.scss";
import Select from "react-select";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" }
];

const SelectComponent = () => <Select options={options} />;

Select.propTypes = {
  options: PropTypes.object.isRequired
};

export default SelectComponent;
