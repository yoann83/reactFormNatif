import React, { useState } from "react";
import ToggleSwitch from "../components/ToggleSwitch";

export default function SelectToggle() {
  //STATES
  const [select, setSelect] = useState(false);
  const [performance, setPerformance] = useState(false);
  const [contenu, setContenu] = useState(false);
  const [publicitaire, setPublicitaire] = useState(false);

  //ATTRIBUTES
  const title = "Toggle";

  //EVENTS
  const handleChange = (checked) => {
    setSelect(checked);
    if (!checked) {
      setPerformance(false);
      setContenu(false);
      setPublicitaire(false);
    }
  };

  //INITIALIZE FUNCTION

  //RENDER COMPONENT IN ID "select_toggle"
  return (
    <section>
      <h1>{title.toLocaleUpperCase()}</h1>
      <div>
        <ToggleSwitch id="select" checked={select} onChange={handleChange} />
        <label htmlFor="select"> Accept cookies</label>
      </div>
      <div>
        <ToggleSwitch
          id="performance"
          small
          disabled={!select}
          checked={performance}
          onChange={setPerformance}
        />
        <label htmlFor="performance"> Performance</label>
      </div>
      <div>
        <ToggleSwitch
          id="contenu"
          small
          disabled={!select}
          checked={contenu}
          onChange={setContenu}
        />
        <label htmlFor="contenu"> Content</label>
      </div>
      <div>
        <ToggleSwitch
          id="publicitaire"
          small
          disabled={!select}
          checked={publicitaire}
          onChange={setPublicitaire}
        />
        <label htmlFor="publicitaire"> Advertising</label>
      </div>
    </section>
  );
}
