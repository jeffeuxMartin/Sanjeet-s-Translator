import React, { useState, useEffect, useCallback } from "react";
import TranslateHeader from "./TranslateHeader";
import TranslateBody from "./TranslateBody";
import axios from "axios";

export default function Translate() {
  const [inputText, setInputText] = useState(""),
    [resultText, setResultText] = useState(""),
    [selectedLanguageKey, setLanguageKey] = useState(""),
    [detectLanguageKey, setdetectedLanguageKey] = useState("");
  const [languagesList, setLanguagesList] = useState([]);
  
  const getLanguageSource = useCallback(() => {
    axios
      .post("https://libretranslate.de/detect", {
        q: inputText,
      })
      .then((response) => {
        let [data] = response.data;
        setdetectedLanguageKey(data.language);
      });
  }, [inputText]);
  
  const handleTranslateTextOnClick = () => {
    setResultText(inputText);
    getLanguageSource();

    let data = {
      q: inputText,
      source: detectLanguageKey,
      target: selectedLanguageKey,
    };
    
    axios.post("https://libretranslate.de/translate", data).then((response) => {
      setResultText(response.data.translatedText);
    });
  };

  useEffect(() => {
    axios.get("https://libretranslate.de/languages").then((response) => {
      setLanguagesList(response.data);
    });

    getLanguageSource();
  }, [inputText, getLanguageSource]);
  
  return (
    <>
      <TranslateHeader className="app-header">
        {"Jeff's Translator"}
      </TranslateHeader>

      <TranslateBody
        className="app-body"
        resultText={resultText}
        languagesList={languagesList}
        handleLanguageKeyOnChange={e => setLanguageKey(e.target.value)}
        handleTranslateTextOnClick={handleTranslateTextOnClick}
        setInputText={setInputText}
      />
    </>
  );
}
