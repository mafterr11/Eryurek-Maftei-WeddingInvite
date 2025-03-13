"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { handleSubmit } from "@/lib/actions";
import { useState, useEffect } from "react";

// Full validation schema
const fullSchema = z.object({
  nume: z.string().min(2, { message: "Va rog adaugati-va numele" }),
  numarPersoane: z.enum(["o persoana", "doua persoane"], {
    message: "Selectati cate persoane",
  }),
  copii: z.enum(["nu", "1 copil", "2 copii", "3 copii", "4 copii", "5 copii"], {
    message: "Cati copii vor veni?",
  }),
  cazare: z.enum(["da", "nu"], { message: "Este nevoie de cazare?" }),
  meniu: z.enum(["meniu standard", "meniu vegetarian"], {
    message: "Ce tip de meniu doriti?",
  }),
  attending: z.enum(["yes", "no"], { message: "Va rog completati" }),
});

// Decline validation schema (only name required)
const declineSchema = z.object({
  nume: z.string().min(2, { message: "Va rog adaugati-va numele" }),
  attending: z.enum(["yes", "no"]),
});

const Formular = () => {
  const [attending, setAttending] = useState("yes"); // Track which button was clicked

  const {
    register,
    handleSubmit: validateForm,
    setValue,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(attending === "yes" ? fullSchema : declineSchema), // ✅ Change schema dynamically
  });

  const submitForm = async (data) => {
    const res = await handleSubmit(data);
    if (res) reset();
  };

  return (
    <div className="relative flex h-full items-center justify-center">
      <form
        onSubmit={validateForm(submitForm)} // ✅ Correctly submits the form
        className="border-accentGreen flex flex-col items-center gap-8 rounded-xs border-2 bg-[#f8f8f7] p-5"
      >
        <div className="mb-8 text-center">
          <p className="text-accentGreen font-semibold">RSVP</p>
          <h2 className="bg-accentGreen rounded-xs p-2 text-white">
            Vei participa?
          </h2>
        </div>

        {/* Name Input */}
        <div className="relative w-full">
          <input
            {...register("nume")}
            type="text"
            placeholder="Numele tău"
            className="w-full border border-black p-2 text-black"
          />
          {errors.nume && (
            <p className="absolute top-full left-0 mt-1 text-xs leading-tight text-red-500">
              {errors.nume.message}
            </p>
          )}
        </div>

        <>
          <div className="relative w-full">
            <select
              {...register("numarPersoane")}
              className="w-full border border-black p-2 text-black/50"
            >
              <option value="">Alege numărul de persoane</option>
              <option value="o persoana">O persoană</option>
              <option value="doua persoane">Două persoane</option>
            </select>
            {errors.numarPersoane && (
              <p className="absolute top-full left-0 mt-1 text-xs leading-tight text-red-500">
                {errors.numarPersoane.message}
              </p>
            )}
          </div>

          {/* Other Fields */}
          <div className="relative w-full">
            <select
              {...register("copii")}
              className="w-full border border-black p-2 text-black/50"
            >
              <option value="">Vei veni cu copiii?</option>
              <option value="nu">Nu</option>
              <option value="1 copil">1 copil</option>
              <option value="2 copii">2 copii</option>
              <option value="3 copii">3 copii</option>
              <option value="4 copii">4 copii</option>
              <option value="5 copii">5 copii</option>
            </select>
            {errors.copii && (
              <p className="absolute top-full left-0 mt-1 text-xs leading-tight text-red-500">
                {errors.copii.message}
              </p>
            )}
          </div>

          <div className="relative w-full">
            <select
              {...register("cazare")}
              className="w-full border border-black p-2 text-black/50"
            >
              <option value="">Dorești cazare?</option>
              <option value="da">Da</option>
              <option value="nu">Nu</option>
            </select>
            {errors.cazare && (
              <p className="absolute top-full left-0 mt-1 text-xs leading-tight text-red-500">
                {errors.cazare.message}
              </p>
            )}
          </div>

          <div className="relative w-full">
            <select
              {...register("meniu")}
              className="w-full border border-black p-2 text-black/50"
            >
              <option value="">Alege tipul meniului</option>
              <option value="meniu standard">Meniu standard</option>
              <option value="meniu vegetarian">Meniu vegetarian</option>
            </select>
            {errors.meniu && (
              <p className="absolute top-full left-0 mt-1 text-xs leading-tight text-red-500">
                {errors.meniu.message}
              </p>
            )}
          </div>
        </>

        {/* Attendance Confirmation */}
        <input type="hidden" {...register("attending")} value={attending} />

        {/* Submit Buttons */}
        <div className="mt-3 flex items-center gap-5 max-md:flex-col">
          <button
            type="submit"
            onClick={(e) => {
              setValue("attending", "yes");
              setAttending("yes"); // ✅ Update schema without re-rendering
            }}
            className="bg-accentGreen min-w-28 cursor-pointer rounded-xs p-2 transition-all duration-300 ease-in-out hover:scale-95"
          >
            Confirm prezența
          </button>

          <button
            type="submit"
            onClick={(e) => {
              setValue("attending", "no");
              setAttending("no"); // ✅ Only validate name
            }}
            className="bg-accentGreen min-w-28 cursor-pointer rounded-xs p-2 transition-all duration-300 ease-in-out hover:scale-95"
          >
            Nu pot să particip
          </button>
        </div>
      </form>
    </div>
  );
};

export default Formular;
