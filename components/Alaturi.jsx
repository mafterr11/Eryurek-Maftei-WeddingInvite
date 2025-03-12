import { Heart } from "lucide-react";

export default function Alaturi() {
  return (
    <section className="relative w-full h-48 md:h-64 bg-cover bg-bottom flex items-center justify-center bg-alaturi bg-fixed">
      <div className="bg-black/30 absolute inset-0" />
      <div className="relative text-center text-white">
        <div className="flex justify-center mb-2">
          <Heart className="w-6 h-6 text-white" />
        </div>
        <h2 className="text-2xl md:text-3xl font-light">
          Vă așteptăm să fiți alături de noi!
        </h2>
        <p className="text-2xl md:text-4xl font-bold mt-2">30 Mai 2026</p>
      </div>
    </section>
  );
}
