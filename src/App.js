import React, { useState, createContext, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import locales from "./locales";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";
import About from "./pages/About/About";

export const LanguageContext = createContext();

function App(props) {
  // language

  const [language, setLang] = useState(props.language);
  function setLanguage(lang) {
    locales.setLanguage(lang);
    setLang(lang);
  }

  const locationObject = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [locationObject])

  return (
    <>
      <LanguageContext.Provider value={[language, setLanguage]}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </LanguageContext.Provider>
    </>
  );
}

export default App;
