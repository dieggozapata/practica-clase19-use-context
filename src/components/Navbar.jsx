import React from 'react'
import "../App.css"
import {useContextLanguage} from '../Context'

const Navbar = ({handleChangeLA}) => {        
    const { language, setLanguage } = useContextLanguage()    
    const {id , text} = language
    return (
        <div className="navbar">            
            <p>{text.home}</p> 
            <p>{text.current}: {id}</p>
            <button onClick={handleChangeLA}>{text.button}</button>
        </div>
    )
}

export default Navbar