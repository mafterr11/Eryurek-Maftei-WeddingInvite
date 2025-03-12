import Image from "next/image";

const Noi = () => {
  return (
    <div className=" bg-lightGreen py-16 xl:py-24">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-24 p-6 xl:max-w-[65%] mx-auto ">
        {/* Image Container */}
        <div className="relative w-full md:w-1/2 h-[35rem] z-10">
          <Image
            src="/noi.jpg"
            alt="Example"
            fill
            className="object-cover rounded-sm"
          />
          <div className="absolute top-5 left-5 w-full h-full border-10 border-black/50 -z-[1]"></div>
        </div>

        {/* Text Container */}
        <div className="md:w-1/2 text-left self-center">
          <h2 className="text-2xl font-bold mb-12 ">
            Cu bucurie împărtășim o veste specială:
          </h2>
          <p className="mt-6 ">
            În curând vom face un <strong>pas important</strong> împreună, iar
            ziua aceasta nu ar fi completă fără voi alături.
          </p>
          <p className="mt-6 ">
            <strong>Vă invităm</strong> să ne fiți aproape într-un moment plin
            de emoție, în care drumurile noastre devin unul singur.
          </p>
          <p className="mt-6 ">Așteptăm cu nerăbdare să sărbătorim împreună!</p>
        </div>
      </div>
    </div>
  );
};

export default Noi;
