import React, { useState, useEffect } from "react";
import Input from "../../components/InputComponent";
import Select from "../../components/SelectComponent";
import Consent from "./Consent";
import "../../styles.scss";

export default function Form() {
  //STATES
  const [datas, setDatas] = useState([]);

  //ATTRIBUTES

  //INITIALIZE FUNCTION
  useEffect(() => {
    setDatas([
      {
        type: "",
        label: "IDENTITY",
        name: "",
        option: {
          labelStyle: {
            fontSize: "1.5em",
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
        value: "",
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
        value: "",
        dataPlaceholder: "James",
        option: {
          class: "box_input"
        }
      },
      {
        type: "email",
        label: "Email",
        name: "email",
        value: "",
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
            fontSize: "1.5em",
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
        value: "",
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
            fontSize: "1.5em",
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
        value: "",
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
        value: "",
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
    <div>
      <section>
        <form>
          <div></div>
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
