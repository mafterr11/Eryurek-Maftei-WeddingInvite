import * as React from "react";

export const EmailTemplate = ({ nume, numarPersoane, copii, cazare, meniu }) => (
  <div>
    <h1>RSVP Confirmation</h1>
    <p><strong>Nume:</strong> {nume}</p>
    <p><strong>Număr persoane:</strong> {numarPersoane}</p>
    <p><strong>Copii:</strong> {copii}</p>
    <p><strong>Cazare:</strong> {cazare}</p>
    <p><strong>Meniu:</strong> {meniu}</p>
  </div>
);
