"use client";

import { useFormStatus } from "react-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useActionState, useState } from "react";
import { handleSubmit } from "@/lib/actions";

// Zod validation schema
const formSchema = z.object({
  nume: z.string().min(2, "Numele este obligatoriu"),
  numarPersoane: z.enum(["o persoana", "doua persoane"]),
  copii: z.enum(["nu", "1 copil", "2 copii", "3 copii", "4 copii", "5 copii"]),
  cazare: z.enum(["da", "nu"]),
  meniu: z.enum(["meniu standard", "meniu vegetarian"]),
  attending: z.enum(["yes", "no"]), // Attendance confirmation
});


const Formular = () => {
  const [formState, formAction] = useActionState(handleSubmit, {});
  const { pending } = useFormStatus();
  const [attending, setAttending] = useState("yes");

  const {
    register,
    handleSubmit: validateForm,
    formState: { errors },
  } = useForm({ resolver: zodResolver(formSchema) });

  return (
    <div className="relative flex h-full items-center justify-center">
      <form action={formAction} className="border-accentGreen flex flex-col items-center gap-8 rounded-xs border-2 bg-[#f8f8f7] p-5">
        <div className="mb-8 text-center">
          <p className="text-accentGreen font-semibold">RSVP</p>
          <h2 className="bg-accentGreen rounded-xs p-2 text-white">
            Vei participa?
          </h2>
        </div>

        {/* Name Input */}
        <input
          {...register("nume")}
          type="text"
          placeholder="Numele tău"
          className="border p-2 w-full border-black text-black"
        />
        {errors.nume && <p className="text-red-500">{errors.nume.message}</p>}

        {/* Number of People */}
        <select {...register("numarPersoane")} className="border p-2 w-full border-black text-black/50">
          <option value="">Alege numărul de persoane</option>
          <option value="o persoana">O persoană</option>
          <option value="doua persoane">Două persoane</option>
        </select>
        {errors.numarPersoane && <p className="text-red-500">{errors.numarPersoane.message}</p>}

        {/* Children Count */}
        <select {...register("copii")} className="border p-2 w-full border-black text-black/50">
          <option value="">Vei veni cu copiii?</option>
          <option value="nu">Nu</option>
          <option value="1 copil">1 copil</option>
          <option value="2 copii">2 copii</option>
          <option value="3 copii">3 copii</option>
          <option value="4 copii">4 copii</option>
          <option value="5 copii">5 copii</option>
        </select>
        {errors.copii && <p className="text-red-500">{errors.copii.message}</p>}

        {/* Accommodation */}
        <select {...register("cazare")} className="border p-2 w-full border-black text-black/50">
          <option value="">Dorești cazare?</option>
          <option value="da">Da</option>
          <option value="nu">Nu</option>
        </select>
        {errors.cazare && <p className="text-red-500">{errors.cazare.message}</p>}

        {/* Menu Type */}
        <select {...register("meniu")} className="border p-2 w-full border-black text-black/50">
          <option value="">Alege tipul meniului</option>
          <option value="meniu standard">Meniu standard</option>
          <option value="meniu vegetarian">Meniu vegetarian</option>
        </select>
        {errors.meniu && <p className="text-red-500">{errors.meniu.message}</p>}

        {/* Attendance Confirmation */}
        <input type="hidden" {...register("attending")} value={attending} />

        {/* Submit Buttons */}
        <div className="mt-3 flex items-center gap-5 max-md:flex-col">
          <button
            type="submit"
            onClick={() => setAttending("yes")}
            className="bg-accentGreen min-w-28 cursor-pointer rounded-xs p-2 transition-all duration-300 ease-in-out hover:scale-95"
            disabled={pending}
          >
            {pending ? "Se trimite..." : "Confirm prezența"}
          </button>
          <button
            type="submit"
            onClick={() => setAttending("no")}
            className="bg-accentGreen min-w-28 cursor-pointer rounded-xs p-2 transition-all duration-300 ease-in-out hover:scale-95"
            disabled={pending}
          >
            {pending ? "Se trimite..." : "Nu pot să particip"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Formular;
