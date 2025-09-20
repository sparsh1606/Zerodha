import Awards from "./Awards";
import Education from "./Education";
import Hero from "./Hero";
import Pricing from "./Pricing";
import Stats from "./Stats";
import OpenAcc from "../OpenAcc";

function HomePage() {
  return (
    <>
      <Hero />
      <Awards />
      <Stats />
      <Pricing />
      <Education />
      <OpenAcc />

    </>
  );
}

export default HomePage;