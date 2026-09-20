import { Toaster } from 'sonner';
import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Capabilities from './sections/Capabilities';
import Services from './sections/Services';
import Portfolio from './sections/Portfolio';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0e1a] text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Capabilities />
        <Services />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: '#0f1729',
            border: '1px solid #1e293b',
            color: '#fff',
          },
        }}
      />
    </div>
  );
}
