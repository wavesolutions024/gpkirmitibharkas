import React, { useEffect, useState } from "react";

import "./App.scss";
import { BrowserRouter, Routes } from "react-router-dom";
import Top_header from "./comp/top_header/Top_header";
import Middle_header from "./comp/middle_header/Middle_header";
import Home from "./pages/home/Home";
import { English } from "../src/Language/English";
import { Marathi } from "../src/Language/Marathi";
import Bottom_Header from "./comp/bottom_header/Bottom_Header";

function App() {
  const [translate, setTranslate] = useState(English);
  const [lang,setLang] = useState("English")



  useEffect(()=>{
  if(lang === "English"){
    setTranslate(English);
  }else if(lang === "Marathi"){
    setTranslate(Marathi)
  }
  },[lang])

  return (
    <div className="app">
      <BrowserRouter>
        <Home />
        <Top_header  setLang={setLang} lang={lang} />
        <Middle_header />
        <Bottom_Header translate={translate} />
        <Routes></Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
