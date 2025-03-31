import * as React from "react";

export const EmailTemplate = ({
  nume,
  prenume,
  numarPersoane,
  copii,
  attending,
  imageUrl,
}) => (
  <div>
    <h1>{attending === "yes" ? "RSVP Confirmation" : "NO ATTENDANCE"}</h1>
    <p>
      <strong>Nume:</strong> {nume}
    </p>
    <p>
      <strong>Prenume:</strong> {prenume}
    </p>
    {attending === "yes" && (
      <>
        <p>
          <strong>Număr persoane:</strong> {numarPersoane}
        </p>
        <p>
          <strong>Copii:</strong> {copii}
        </p>
        {imageUrl && (
          <p>
            <strong>Imagine:</strong> <a href={imageUrl}>{imageUrl}</a>
          </p>
        )}
      </>
    )}
    {attending === "no" && <p>Guest has declined the invitation.</p>}
  </div>
);
