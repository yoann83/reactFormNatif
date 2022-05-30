import React, { useState, useEffect } from "react";
import Input from "../components/Input";

export default function ListInputs() {
  //STATES
  const [datas, setDatas] = useState([]);

  //ATTRIBUTES
  const title = "Fields";

  //INITIALIZE FUNCTION
  useEffect(() => {
    setDatas([
      {
        id: "1",
        type: "text",
        label: "Name",
        name: "last_name",
        dataPlaceholder: "BOND",
        value: "Nom",
        option: {
          required: true,
          minLength: "1"
        }
      },
      {
        id: "2",
        type: "text",
        label: "First Name",
        name: "first_name",
        dataPlaceholder: "James",
        value: "Prénom",
        option: {
          minLength: "1"
        }
      },
      {
        id: "3",
        type: "radio",
        label: "-18ans",

        name: "age",
        value: "oui",
        option: {}
      },
      {
        id: "4",
        type: "radio",
        label: "+18ans",
        name: "age",
        value: "non",
        option: {}
      }
    ]);
  }, []);

  //EVENTS

  //RENDER COMPONENT IN ID "list_books"
  return (
    <section>
      <h1>{title.toLocaleUpperCase()}</h1>
      <div>
        <ul>
          {datas.map((data, key) => (
            <Input
              key={key}
              dataId={data.id}
              dataLabel={data.label}
              dataType={data.type}
              dataName={data.name}
              dataPlaceholder={data.dataPlaceholder}
              dataOption={data.option}
              dataValue={data.value}
            />
          ))}
          <Input
            key="10"
            dataId="10"
            dataLabel="PassWord"
            dataType="PassWord"
            dataName="PassWord"
            dataPlaceholder="Enter your PassWord"
            dataOption=""
            dataValue=""
          />
        </ul>
      </div>
    </section>
  );
}
