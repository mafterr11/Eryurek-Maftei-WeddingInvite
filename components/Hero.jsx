import Image from "next/image";

const Hero = () => {
  return (
    <div
      id="acasa"
      className="bg-hero relative h-screen bg-cover bg-center bg-no-repeat"
    >
      <div className="absolute inset-0 z-0 bg-black/30" />
      <div className="relative flex h-full flex-col items-center justify-center">
        <div className="mb-20 flex flex-col items-center">
          <h1 className="font-alexBrush mb-3 font-thin tracking-widest">
            Deniz & Alexandru
          </h1>
          <h3 className="text-center max-md:text-2xl mb-6">30 Mai 2026</h3>
          <h5 className="text-center">Dress code: smart casual</h5>
          <h5 className="text-center">Fără tocuri. Distracția e prioritară.</h5>
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
