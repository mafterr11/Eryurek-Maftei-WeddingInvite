"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { handleSubmit } from "@/lib/actions";
import { useState } from "react";
import { toast } from "sonner";

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
  file: z.any().optional(),
});

const declineSchema = z.object({
  nume: z.string().min(2),
  prenume: z.string().min(2),
  attending: z.enum(["yes", "no"]),
  file: z.any().optional(),
});

const Formular = () => {
  const [attending, setAttending] = useState("yes");
  const [isPending, setIsPending] = useState(false);
  const [fileName, setFileName] = useState("");
  const {
    register,
    handleSubmit: validateForm,
    setValue,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(attending === "yes" ? fullSchema : declineSchema),
  });

  const submitForm = async (data) => {
    const formData = new FormData();
    for (const key in data) {
      if (key !== "file") {
        formData.append(key, data[key]);
      }
    }
    if (data.file && data.file[0]) {
      formData.append("file", data.file[0]);
    }
    setIsPending(true);
    const res = await handleSubmit(formData);
    if (res?.success) {
      reset();
      toast("Confirmarea a fost trimisă!");
    } else {
      toast("Eroare la trimitere.");
    }
    setIsPending(false);
  };

  return (
    <div className="relative flex h-full items-center justify-center">
      <form
        onSubmit={validateForm(submitForm)}
        className="border-accentGreen xs:max-md:p-10 flex flex-col items-center gap-8 rounded-xs border-2 bg-[#f8f8f7] p-5"
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

        {/* FILE SELECT */}
        <div className="relative w-full">
          <input
            type="file"
            {...register("file")}
            onChange={(e) => setFileName(e.target.files?.[0]?.name || "")}
            className="file:bg-accentGreen block w-full cursor-pointer rounded-xs border border-black bg-white text-black transition file:mr-4 file:cursor-pointer file:rounded-xs file:border-0 file:px-4 file:py-2 file:font-semibold file:text-white hover:file:bg-green-700"
          />

          {fileName && (
            <p className="mt-1 truncate text-sm text-gray-600">{fileName}</p>
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
