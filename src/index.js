import ListBooks from "./containers/ListBooks";
import SelectToggle from "./containers/SelectToggle";
import ListInputs from "./containers/ListInputs";
import ReactDOM from "react-dom";
import "./styles.scss";

const Index = () => {
  return (
    <div>
      <ListBooks />
      <SelectToggle />
      <ListInputs />
    </div>
  );
};

const rootElement = document.getElementById("container");
ReactDOM.render(<Index />, rootElement);
