import Image from "next/image";

const Noi = () => {
  return (
    <div id="noi-doi" className="bg-lightGreen py-16 xl:py-24">
      <div className="mx-auto flex flex-col items-center gap-24 p-6 md:flex-row md:items-start xl:max-w-[65%]">
        {/* Image Container */}
        <div className="relative z-10 h-[35rem] w-full md:w-1/2">
          <Image
            src="/noi.jpeg"
            alt="Example"
            fill
            className="rounded-sm object-cover"
          />
          <div className="border-accentGreen absolute top-5 left-5 -z-[1] h-full w-full border-10"></div>
        </div>

        {/* Text Container */}
        <div className="self-center text-left md:w-1/2">
          <h2 className="mb-12 text-2xl font-bold">
            Cu bucurie împărtășim o veste specială:
          </h2>
          <p className="mt-6">
            În curând vom face un <strong>pas important</strong> împreună, iar
            ziua aceasta nu ar fi completă fără voi alături.
          </p>
          <p className="mt-6">
            <strong>Vă invităm</strong> să ne fiți aproape într-un moment plin
            de emoție, în care drumurile noastre devin unul singur.
          </p>
          <p className="mt-6">Așteptăm cu nerăbdare să sărbătorim împreună!</p>
        </div>
      </div>
    </div>
  );
};

export default Noi;
