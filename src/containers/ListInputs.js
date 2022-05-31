import React, { useState, useEffect } from "react";
import Input from "../components/Input";

export default function ListInputs() {
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
            padding: "1em 0"
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
        dataPlaceholder: "BOND",
        value: "Nom",
        option: {
          class: "box_input",
          required: true,
          minLength: "2",
          maxLength: "15"
        }
      },
      {
        type: "text",
        label: "First Name",
        name: "first_name",
        dataPlaceholder: "James",
        value: "Prénom",
        option: {
          class: "box_input"
        }
      },
      {
        type: "email",
        label: "Email",
        name: "email",
        dataPlaceholder: "bond.james@mail.com",
        value: "Nom",
        option: {
          class: "box_input",
          required: true,
          minLength: "2"
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
            padding: "1em 0"
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
        value: "16",
        option: {
          class: "box_input"
        }
      },
      {
        type: "radio",
        label: "+18ans",
        name: "age",
        value: "19",
        option: {
          class: "box_input"
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
            padding: "1em 0"
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
        option: {
          class: "box_input",
          required: true,
          autoComplete: "off"
        }
      },
      {
        type: "password",
        label: "Confim Password",
        name: "confimPassword",
        option: {
          class: "box_input",
          required: true,
          autoComplete: "off"
        }
      }
    ]);
  }, []);

  //EVENTS

  //RENDER COMPONENT IN ID "list_books"
  return (
    <section>
      <div>
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
      </div>
    </section>
  );
}
