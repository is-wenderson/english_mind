import React, { useState, useEffect } from 'react';
import Header from './components/Header/Header.jsx';
// ... mantenha seus outros imports (Hero, Feedbacks, etc) ...
// Se você ainda não tem os imports das outras seções, deixe comentado por enquanto
import Hero from './components/Hero/Hero.jsx';
import Diferenciais from './components/Diferenciais/Diferenciais.jsx';
import Material from './components/Material/Material.jsx';
import Feedbacks from './components/Feedbacks/Feedbacks.jsx';
import ComoFunciona from './components/ComoFunciona/ComoFunciona.jsx';
import CTA_Final from './components/CTA_Final/CTA_Final.jsx';
import Footer from './components/Footer/Footer.jsx';


function App() {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <div>
      <Header theme={theme} toggleTheme={toggleTheme} />  
      <Hero />
      <Diferenciais />
      <Feedbacks />
      <Material />
      <ComoFunciona />
      <CTA_Final />
      <Footer />
    </div>
  )
}

export default App;