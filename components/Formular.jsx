import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Formular = () => {
  return (
    <div className="relative flex h-full items-center justify-center">
      <form className="border-accentGreen flex flex-col items-center gap-8 rounded-xs border-2 bg-[#f8f8f7] p-5">
        <div className="mb-8 text-center">
          <p className="text-accentGreen font-semibold">RSVP</p>
          <h2 className="bg-accentGreen rounded-xs p-2 text-white">
            Vei participa?
          </h2>
        </div>
        <Select>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Alege numărul de persoane" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="o persoana">O persoana</SelectItem>
            <SelectItem value="doua persoane">Doua persoane</SelectItem>
          </SelectContent>
        </Select>

        <Select>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Vei veni cu copiii?" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="nu">Nu</SelectItem>
            <SelectItem value="1 copil">1 copil</SelectItem>
            <SelectItem value="2 copii">2 copii</SelectItem>
            <SelectItem value="3 copii">3 copii</SelectItem>
            <SelectItem value="4 copii">4 copii</SelectItem>
            <SelectItem value="5 copii">5 copii</SelectItem>
          </SelectContent>
        </Select>

        <Select>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Dorești cazare?" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="da">Da</SelectItem>
            <SelectItem value="nu">Nu</SelectItem>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Alege tipul meniului" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="meniu standard">Meniu standard</SelectItem>
            <SelectItem value="meniu vegetarian">Meniu vegetarian</SelectItem>
          </SelectContent>
        </Select>

        <div className="mt-3 flex items-center gap-5 max-md:flex-col">
          <button className="bg-accentGreen min-w-28 cursor-pointer rounded-xs p-2 transition-all duration-300 ease-in-out hover:scale-95">
            Confirm prezența
          </button>
          <button className="bg-accentGreen min-w-28 cursor-pointer rounded-xs p-2 transition-all duration-300 ease-in-out hover:scale-95">
            Nu pot să particip
          </button>
        </div>
      </form>
    </div>
  );
};

export default Formular;
