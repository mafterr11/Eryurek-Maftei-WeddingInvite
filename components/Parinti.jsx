import Image from "next/image";

const Parinti = () => {
  return (
    <div className="relative flex flex-col items-center justify-center gap-y-8 overflow-hidden py-16 xl:py-24">
      {/* Flower 1 */}
      <div className="absolute -bottom-14 -left-8 xl:-bottom-19 xl:-left-15">
        <div className="relative h-40 w-40 rotate-[50deg] xl:h-72 xl:w-96">
          <Image
            src="/assets/flower2.png"
            fill
            alt="bujori"
            className="object-cover"
          />
        </div>
      </div>
      {/* Flower 2 */}
      <div className="absolute -top-14 -right-8 xl:-top-19 xl:-right-14">
        <div className="relative h-40 w-40 -rotate-[130deg] xl:h-72 xl:w-96">
          <Image
            src="/assets/flower2.png"
            fill
            alt="bujori"
            className="object-cover"
          />
        </div>
      </div>
      {/* Center flower */}

      <div className="relative flex items-center justify-center">
        <div className="relative mb-8 h-18 w-26 scale-x-[-1] md:w-40">
          <Image
            src="/assets/branch2.png"
            fill
            alt="Branch icon"
            className="object-contain"
          />
        </div>
        <h2>Părinții</h2>
        <div className="relative mb-8 h-18 w-26 md:w-40">
          <Image
            src="/assets/branch2.png"
            fill
            alt="Branch icon"
            className="object-contain"
          />
        </div>
      </div>
      <div className="relative grid grid-cols-1 gap-5 font-bold max-md:text-center md:grid-cols-2">
        <p className="text-lg md:text-xl">Eryurek Tuncay</p>
        <p className="text-lg md:text-xl">Eryurek Catalina</p>
        <p className="text-2xl md:hidden">&</p>
        <p className="text-lg md:text-xl">Maftei Viorel</p>
        <p className="text-lg md:text-xl">Maftei Anisoara</p>
      </div>
    </div>
  );
};

export default Parinti;
