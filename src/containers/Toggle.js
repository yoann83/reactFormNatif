import React, { useState } from "react";
import ToggleSwitch from "../components/ToggleSwitch";

export default function Toggle() {
  //STATES
  const [select, setSelect] = useState(false);
  const [performance, setPerformance] = useState(false);
  const [contenu, setContenu] = useState(false);

  //ATTRIBUTES

  //INITIALIZE FUNCTION

  //EVENTS
  const handleChange = (checked) => {
    setSelect(checked);
    if (!checked) {
      setPerformance(false);
      setContenu(false);
    }
  };

  //RENDER COMPONENT IN ID "list_books"
  return (
    <div>
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
        <label htmlFor="contenu"> Contenu</label>
      </div>
    </div>
  );
}
