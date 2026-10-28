import Header from '@/sections/Header';
import Hero from '@/sections/Hero';
import Diferenciais from '@/sections/Diferenciais';
import Estrutura from '@/sections/Estrutura';
import Comunidade from '@/sections/Comunidade';
import CtaFinal from '@/sections/CtaFinal';
import Localizacao from '@/sections/Localizacao';
import Footer from '@/sections/Footer';
import FloatingWhatsapp from '@/components/FloatingWhatsapp';
import MobileCtaBar from '@/components/MobileCtaBar';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Diferenciais />
        <Estrutura />
        <Comunidade />
        <CtaFinal />
        <Localizacao />
      </main>
      <Footer />
      <FloatingWhatsapp />
      <MobileCtaBar />
    </>
  );
}
