import Image from 'next/image';
import Hero from './Components/home/Hero';
import WhyUs from './Components/home/WhyUs';
import HowItWorks from './Components/home/HowItWorks';
import Clients from './Components/home/Clients';
import Bodyup from './Components/home/bodyup';
import Butt from './Components/home/Butt';
import FAQ from './Components/home/accordin';
import NormSlider from './Components/home/norslider';
import StateContextProvider from '@/context/StateContext';
import MainLayout from './Layouts/Main';

export default function Home() {
  return (
    <>
      <StateContextProvider>
        <MainLayout>
          <Hero />
          <main className="max-container w-full flex flex-col">
            <Clients />
            <WhyUs />
            <Bodyup />
            <NormSlider />
            <FAQ />
            <HowItWorks />
            <Butt />
          </main>
        </MainLayout>
      </StateContextProvider>
    </>
  );
}
