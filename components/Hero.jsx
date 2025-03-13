import Image from "next/image";

const Hero = () => {
  return (
    <div
      id="acasa"
      className="bg-hero relative h-screen bg-cover bg-center bg-no-repeat"
    >
      <div className="absolute inset-0 z-0 bg-black/35" />
      <div className="relative flex h-full flex-col items-center justify-center">
        <div className="mb-20">
          <h1 className="font-alexBrush mb-3 font-thin tracking-widest">
            Deniz & Alexandru
          </h1>
          <h4 className="text-center">30 Mai 2026 - Bucuresti</h4>
        </div>
        <div className="absolute bottom-18 h-44 w-44">
          <Image
            src="/assets/our_wedding.gif"
            fill
            alt="Our wedding text"
            unoptimized={true}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
