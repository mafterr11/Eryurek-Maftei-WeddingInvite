"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { handleSubmit } from "@/lib/actions";
import { useState } from "react";
import { toast } from "sonner";

// Full validation schema
const fullSchema = z.object({
  nume: z.string().min(2, { message: "Vă rog adăugați-vă numele!" }),
  prenume: z.string().min(2, { message: "Vă rog adăugați-vă prenumele!" }),
  numarPersoane: z.enum(["o persoana", "doua persoane"], {
    message: "Selectați câte persoane!",
  }),
  copii: z.enum(["nu", "1 copil", "2 copii", "3 copii", "4 copii", "5 copii"], {
    message: "Cați copii vor veni?",
  }),
  attending: z.enum(["yes", "no"], { message: "Vă rog completați" }),
});

// Decline validation schema (only name required)
const declineSchema = z.object({
  nume: z.string().min(2, { message: "Vă rog adăugați-vă numele!" }),
  prenume: z.string().min(2, { message: "Vă rog adăugați-vă prenumele!" }),
  attending: z.enum(["yes", "no"]),
});

const Formular = () => {
  const [attending, setAttending] = useState("yes"); // Track button selection
  const [isPending, setIsPending] = useState(false);
  const {
    register,
    handleSubmit: validateForm,
    setValue,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(attending === "yes" ? fullSchema : declineSchema),
  });

  const submitForm = async (formData) => {
    setIsPending(true);
    const res = await handleSubmit(formData);
    if (res) {
      reset();
      attending === "yes"
        ? toast("Confirmarea a fost trimisă. Vă mulțumim!")
        : toast("Mesaj trimis! Ne pare rău ca nu puteți ajunge :(");
    } else {
      toast("Vă rugăm să reincercați");
    }
    setIsPending(false);
  };

  return (
    <div className="relative flex h-full items-center justify-center">
      <form
        onSubmit={validateForm(submitForm)}
        className="border-accentGreen xs:max-md:p-8 flex flex-col items-center gap-8 rounded-xs border-2 bg-[#f8f8f7] p-5 max-md:w-[94%]"
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
            className="w-full cursor-pointer border border-black p-2 text-black"
          />
          {errors.nume && (
            <p className="absolute top-full left-0 text-xs text-red-500">
              {errors.nume.message}
            </p>
          )}
        </div>
        {/* Surname Input */}
        <div className="relative w-full">
          <input
            {...register("prenume")}
            type="text"
            placeholder="Prenumele tău"
            className="w-full cursor-pointer border border-black p-2 text-black"
          />
          {errors.prenume && (
            <p className="absolute top-full left-0 text-xs text-red-500">
              {errors.prenume.message}
            </p>
          )}
        </div>

        {/* Conditional Fields Based on Attendance */}

        <div className="relative w-full">
          <select
            {...register("numarPersoane")}
            className="w-full cursor-pointer border border-black p-2 text-black/50"
          >
            <option value="">Alege numărul de persoane</option>
            <option value="o persoana">O persoană</option>
            <option value="doua persoane">Două persoane</option>
          </select>
          {errors.numarPersoane && (
            <p className="absolute top-full left-0 text-xs text-red-500">
              {errors.numarPersoane.message}
            </p>
          )}
        </div>

        <div className="relative w-full">
          <select
            {...register("copii")}
            className="w-full cursor-pointer border border-black p-2 text-black/50"
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
            <p className="absolute top-full left-0 text-xs text-red-500">
              {errors.copii.message}
            </p>
          )}
        </div>

        {/* Submit Buttons */}
        <div className="mt-3 flex items-center gap-5 max-md:flex-col">
          <button
            type="submit"
            disabled={isPending}
            onClick={() => {
              setValue("attending", "yes");
              setAttending("yes");
            }}
            className="bg-accentGreen flex w-[180px] cursor-pointer items-center justify-center rounded-xs p-2 transition-all hover:scale-95"
          >
            {isPending && attending === "yes" ? (
              <span className="opacity-70">Se trimite...</span>
            ) : (
              "Confirm prezența"
            )}
          </button>

          <button
            type="submit"
            disabled={isPending}
            onClick={() => {
              setValue("attending", "no");
              setAttending("no");
            }}
            className="bg-accentGreen flex w-[180px] cursor-pointer items-center justify-center rounded-xs p-2 transition-all hover:scale-95"
          >
            {isPending && attending === "no" ? (
              <span className="opacity-70">Se trimite...</span>
            ) : (
              "Nu pot să particip"
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Formular;
