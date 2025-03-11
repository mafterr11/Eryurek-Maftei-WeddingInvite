import Image from "next/image";

const parinti = [
  {
    name: "Maftei Viorel",
  },
  {
    name: " Maftei Anisoara",
  },
  {
    name: "Eryurek Tuncay",
  },
  {
    name: " Eryurek Catalina",
  },
];

const Parinti = () => {
  return (
    <div className="py-12 flex flex-col items-center justify-center gap-y-8 bg-accentGreen relative overflow-hidden">
      <div className="absolute mx-auto z-0">
        <Image
          src="/assets/flowers2.svg"
          width={1000}
          height={1000}
          alt="bujori"
          className="object-cover opacity-10"
        />
      </div>
      {/* Flower 1 */}
      <div className="absolute -bottom-14 -left-8 xl:-bottom-17 xl:-left-12">
        <div className="relative w-40 h-40 xl:w-80 xl:h-64 rotate-[50deg]">
          <Image
            src="/assets/flower.png"
            fill
            alt="bujori"
            className="object-cover"
          />
        </div>
      </div>
      {/* Flower 2 */}
      <div className="absolute -top-14 -right-8 xl:-top-20 xl:-right-12">
        <div className="relative  w-40 h-40 xl:w-80 xl:h-64 -rotate-[125deg]">
          <Image
            src="/assets/flower.png"
            fill
            alt="bujori"
            className="object-cover"
          />
        </div>
      </div>
      {/* Center flower */}

      <h2 className="relative  ">Părinții</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 font-bold relative max-md:text-center ">
        {parinti.map((p) => (
          <p key={p.name} className="">
            {p.name}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Parinti;
