import React, { useState } from "react";
import LabRbButtons from "./lab/LabRbButtons";
import LabRbAlert from "./lab/LabRbAlert";
import LabRbCard from "./lab/LabRbCard";
import LabRbForm from "./lab/LabRbForm";
import LabRbTable from "./lab/LabRbTable";

type LabKey = "buttons" | "alert" | "card" | "form" | "table";

export default function App() {
  const [lab, setLab] = useState<LabKey>("buttons");

  return (
    <div>
      <div style={{ padding: 16 }}>
        <label style={{ display: "block", marginBottom: 6 }}>Selecciona LAB</label>
        <select value={lab} onChange={(e) => setLab(e.target.value as LabKey)}>
          <option value="buttons">Buttons</option>
          <option value="alert">Alert</option>
          <option value="card">Card</option>
          <option value="form">Form</option>
          <option value="table">Table</option>
        </select>
      </div>

      {lab === "buttons" && <LabRbButtons />}
      {lab === "alert" && <LabRbAlert />}
      {lab === "card" && <LabRbCard />}
      {lab === "form" && <LabRbForm />}
      {lab === "table" && <LabRbTable />}
    </div>
  );
}