
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Problem } from './components/Problem';
import { Solution } from './components/Solution';
import { HowItWorks } from './components/HowItWorks';
import { Benefits } from './components/Benefits';
import { FAQ } from './components/FAQ';
import { Waitlist } from './components/Waitlist';
import { Footer } from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <HowItWorks />
        <Benefits />
        <FAQ />
        <Waitlist />
      </main>
      <Footer />
    </div>
  );
}

export default App;
