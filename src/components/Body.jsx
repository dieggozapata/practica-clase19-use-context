import React from 'react'
import {useContextLanguage} from '../Context'
const Body = () => {    
    const { language, setLanguage } = useContextLanguage()
    const {text} = language
    return (
        <div>            
            <h1>{text.title}</h1>
            <p>{text.description}</p>
        </div>
    )
}

export default Body