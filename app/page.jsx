import Alaturi from "@/components/Alaturi";
import Countdown from "@/components/Countdown";
import Eveniment from "@/components/Eveniment";
import FormularSection from "@/components/FormularSection";
import Hero from "@/components/Hero";
import Noi from "@/components/Noi";
import Parinti from "@/components/Parinti";

const Home = () => {
  return (
    <>
      <Hero />
      <Noi />
      <Countdown />
      <Parinti />
      <Alaturi />
      <Eveniment />
      <FormularSection />
    </>
  );
};

export default Home;
