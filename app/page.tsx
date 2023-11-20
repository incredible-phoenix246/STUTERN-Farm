import Image from 'next/image';
import Hero from './Components/home/Hero';
import WhyUs from './Components/home/WhyUs';
import HowItWorks from './Components/home/HowItWorks';
import Clients from './Components/home/Clients';
import Butt from './Components/home/Butt';
import FAQ from './Components/home/accordin';

export default function Home() {
  return (
    <>
      <Hero />
      <main className="max-container w-full flex flex-col">
        <Clients />
        <WhyUs />
        <FAQ/>
        <HowItWorks />
        <Butt />
      </main>
    </>
  );
}
