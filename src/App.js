import './App.css';

import Navbar from './components/navbar'; 
import Hero from './components/hero.js';
import Features from './components/features.js';
import SystemSpecs from './components/systemspec.js';
import Footer from './components/footer.js';
import Contact from './components/contact.js';
import Comparison from './components/comparison.js';
import WhyChoose from './components/why-choose-us.js';
import ProductSpecs from './components/productspec.js';
import OurBrand from './components/brand.js';

function App() {
  return (
    /* 🌐 Di sini kita buat transparent agar background animasi dari App.css tembus sempurna */
    <div className="min-h-screen text-white antialiased">
      <Navbar /> 

      <main>
        <Hero /> 
        <Features />
        <Comparison />
        
        <WhyChoose />
        <ProductSpecs />
        <SystemSpecs />        
        <OurBrand />
        <Contact />
        
        <Footer />
      </main>
    </div>
  );
}

export default App;