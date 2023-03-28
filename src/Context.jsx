import { createContext, useContext, useState} from "react";
import EN from "./languages/english.json"
import PTBR from "./languages/portuguese.json"
import ES from "./languages/spanish.json"
export const LanguageContext = createContext()
export const languages = {
    english: {
        id: "EN",
        text: EN
    },
    portuguese: {
        id: "PTBR",
        text: PTBR
    },
    spanish: {
        id: "ES",
        text: ES
    }    
};

const Context = ({children}) => {    
    const [language, setLanguage ] = useState(languages.english)
  return (
    <LanguageContext.Provider value = {{language, setLanguage}}>
        {children}
    </LanguageContext.Provider>
  )
}

export default Context
export const useContextLanguage = () => useContext(LanguageContext)