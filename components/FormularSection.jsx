import Formular from "./Formular";

const FormularSection = () => {
  return (
    <div
      id="confirmare"
      className="bg-newlyWeds relative mb-26 min-h-screen bg-cover bg-center bg-no-repeat py-20 md:min-h-[70vh] xl:mb-[10rem]"
    >
      <div className="absolute inset-0 bg-black/30" />
      <Formular />
    </div>
  );
};

export default FormularSection;
