import Books from "./containers/Books";
import Form from "./containers/login/Form";
import ReactDOM from "react-dom";
import "./styles.scss";

const Index = () => {
  return (
    <div>
      <Books />
      <Form />
    </div>
  );
};

const rootElement = document.getElementById("container");
ReactDOM.render(<Index />, rootElement);
