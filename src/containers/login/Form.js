import React, { useState, useEffect } from "react";
import Input from "../../components/InputComponent";
import { Image } from "react-native";
import Consent from "./Consent";
import "../../styles.scss";

export default function Form() {
  //STATES
  const [datas, setDatas] = useState([]);

  //ATTRIBUTES
  const title = "form react natif";

  //INITIALIZE FUNCTION
  useEffect(() => {
    setDatas([
      {
        type: "",
        label: "IDENTITY",
        name: "",
        option: {
          labelStyle: {
            fontSize: "1.2em",
            fontWeight: "bold",
            textAlign: "center",
            display: "block",
            padding: "1em 0 0 0"
          },
          inputStyle: {
            display: "none"
          }
        }
      },
      {
        type: "text",
        label: "Last Name",
        name: "last_name",
        value: "-",
        dataPlaceholder: "BOND",
        option: {
          class: "box_input",
          required: true,
          minLength: "3",
          maxLength: "15"
        }
      },
      {
        type: "text",
        label: "First Name",
        name: "first_name",
        dataPlaceholder: "James",
        option: {
          class: "box_input"
        }
      },
      {
        type: "email",
        label: "Email",
        name: "email",
        value: "My Email",
        dataPlaceholder: "bond.james@mail.com",
        option: {
          class: "box_input",
          required: true
        }
      },
      {
        type: "text",
        label: "AGE",
        name: "age",
        option: {
          labelStyle: {
            fontSize: "1.2em",
            fontWeight: "bold",
            textAlign: "center",
            display: "block",
            padding: "1em 0 0 0"
          },
          inputStyle: {
            display: "none"
          }
        }
      },
      {
        type: "radio",
        label: "-18ans",
        name: "age",
        option: {
          checkedRadio: "checked",
          idRadio: "not_has_18",
          class: "box_radio"
        }
      },
      {
        type: "radio",
        label: "+18ans",
        name: "age",
        option: {
          idRadio: "has_18",
          class: "box_radio"
        }
      },
      {
        type: "",
        label: "SECURITY",
        name: "",
        option: {
          labelStyle: {
            fontSize: "1.2em",
            fontWeight: "bold",
            textAlign: "center",
            display: "block",
            padding: "1em 0 0 0"
          },
          inputStyle: {
            display: "none"
          }
        }
      },
      {
        type: "password",
        label: "Password",
        name: "password",
        value: "password",
        option: {
          class: "box_input",
          required: true,
          autoComplete: "off"
        }
      },
      {
        type: "button",
        name: "",
        label: "",
        option: {
          inputStyle: {
            display: "none"
          }
        }
      }
    ]);
  }, []);

  //EVENTS

  //RENDER COMPONENT IN ID "list_books"
  return (
    <div id="form-react-natif">
      <div className="box-logo">
        <Image
          source={
            "https://egerie-software.com/wp-content/themes/egerie/img/egerie-logo.svg"
          }
        />
      </div>
      <section>
        <form>
          <h1>{title.toUpperCase()}</h1>
          <ul>
            {datas.map((data, key) => (
              <Input
                key={key}
                dataLabel={data.label}
                dataType={data.type}
                dataName={data.name}
                dataPlaceholder={data.dataPlaceholder}
                dataOption={data.option}
                dataValue={data.value}
              />
            ))}
          </ul>
          <Consent />
        </form>
      </section>
    </div>
  );
}
