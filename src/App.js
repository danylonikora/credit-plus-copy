import React, { useState, createContext } from "react";
import { Routes, Route } from "react-router-dom";
import locales from "./locales";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";

export const LanguageContext = createContext();

function App() {
  let [language, setLang] = useState(locales.getLanguage());

  function setLanguage(lang) {
    locales.setLanguage(lang);
    setLang(lang);
  }

  return (
    <>
      <LanguageContext.Provider value={[language, setLanguage]}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </LanguageContext.Provider>
    </>
  );
}

export default App;
