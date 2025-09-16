import React, { useEffect, useState } from "react";

import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Middle_header from "./comp/middle_header/Middle_header";
import Home from "./pages/home/Home";
import { English } from "../src/Language/English";
import { Marathi } from "../src/Language/Marathi";
import Bottom_Header from "./comp/bottom_header/Bottom_Header";
import Footer from "./comp/footer/Footer";
import MajiVasundhara from "./pages/majivasundhara/MajiVasundhara";

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
        
   
        <Middle_header />
        <Bottom_Header translate={translate} setLang={setLang} lang={lang} />
        <Routes>
          <Route path="/" element={<Home translate={translate}/>} />
          <Route path="/majivasundhara" element={<MajiVasundhara/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
