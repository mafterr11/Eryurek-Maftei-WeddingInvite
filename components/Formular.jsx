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
    <div className='relative flex items-center justify-center h-full'>
      <form className='flex flex-col items-center gap-8 p-5 border-2 rounded-xs border-accentGreen bg-[#f8f8f7]'>
        <div className='text-center mb-8'>
          <p className='text-accentGreen font-semibold'>RSVP</p>
          <h2 className='text-black'>Vei participa?</h2>
        </div>
        <Select>
          <SelectTrigger className='w-full'>
            <SelectValue placeholder='Alege numărul de persoane' />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value='o persoana'>O persoana</SelectItem>
            <SelectItem value='doua persoane'>Doua persoane</SelectItem>
          </SelectContent>
        </Select>

        <Select>
          <SelectTrigger className='w-full'>
            <SelectValue placeholder='Vei veni cu copiii?' />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value='nu'>Nu</SelectItem>
            <SelectItem value='1 copil'>1 copil</SelectItem>
            <SelectItem value='2 copii'>2 copii</SelectItem>
            <SelectItem value='3 copii'>3 copii</SelectItem>
            <SelectItem value='4 copii'>4 copii</SelectItem>
            <SelectItem value='5 copii'>5 copii</SelectItem>
          </SelectContent>
        </Select>

        <Select>
          <SelectTrigger className='w-full'>
            <SelectValue placeholder='Dorești cazare?' />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value='da'>Da</SelectItem>
            <SelectItem value='nu'>Nu</SelectItem>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className='w-full'>
            <SelectValue placeholder='Alege tipul meniului' />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value='meniu standard'>Meniu standard</SelectItem>
            <SelectItem value='meniu vegetarian'>Meniu vegetarian</SelectItem>
          </SelectContent>
        </Select>

        <div className='flex items-center gap-5 mt-3'>
          <button className='cursor-pointer hover:scale-95 transition-all ease-in-out duration-300 p-2 min-w-28 bg-accentGreen rounded-xs'>
            Confirm prezența
          </button>
          <button className='cursor-pointer hover:scale-95 transition-all ease-in-out duration-300 p-2 min-w-28 bg-accentGreen rounded-xs'>
            Nu pot să particip
          </button>
        </div>
      </form>
    </div>
  );
};

export default Formular;
