import * as React from "react";

export const EmailTemplate = ({
  nume,
  prenume,
  numarPersoane,
  copii,
  attending,
}) => (
  <div>
    <h1>{attending === "yes" ? "RSVP Confirmation" : "NO ATTENDANCE"}</h1>
    <p>
      <strong>Nume:</strong> {nume}
    </p>
    <p>
      <strong>Nume:</strong> {prenume}
    </p>
    {attending === "yes" ? (
      <>
        <p>
          <strong>Număr persoane:</strong> {numarPersoane}
        </p>
        <p>
          <strong>Copii:</strong> {copii}
        </p>
      </>
    ) : (
      <p>Guest has **declined** the invitation.</p>
    )}
  </div>
);
