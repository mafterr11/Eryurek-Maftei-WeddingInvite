import { Heart } from "lucide-react";

export default function Alaturi() {
  return (
    <section className="bg-alaturi relative flex h-[30rem] w-full items-center justify-center bg-cover max-md:bg-center bg-no-repeat bg-center bg-center md:h-[30rem]">
      <div className="absolute inset-0  bg-black/30" />
      <div className="relative text-center text-white">
        <div className="mb-2 flex justify-center">
          <Heart className="h-6 w-6 text-white" fill="white" />
        </div>
        <h2 className="text-2xl font-light md:text-3xl">
          Vă așteptăm să fiți alături de noi!
        </h2>
        <p className="mt-2 text-2xl font-bold md:text-4xl">30 Mai 2026</p>
      </div>
    </section>
  );
}
