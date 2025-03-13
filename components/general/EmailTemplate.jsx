import * as React from "react";

export const EmailTemplate = ({ nume, numarPersoane, copii, cazare, meniu, attending }) => (
  <div>
    <h1>{attending === "yes" ? "RSVP Confirmation" : "NO ATTENDANCE"}</h1>
    <p><strong>Nume:</strong> {nume}</p>
    {attending === "yes" ? (
      <>
        <p><strong>Număr persoane:</strong> {numarPersoane}</p>
        <p><strong>Copii:</strong> {copii}</p>
        <p><strong>Cazare:</strong> {cazare}</p>
        <p><strong>Meniu:</strong> {meniu}</p>
      </>
    ) : (
      <p>Guest has **declined** the invitation.</p>
    )}
  </div>
);
