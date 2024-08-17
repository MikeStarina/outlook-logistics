'use client'
import React, { useEffect, useState } from "react"
import styles from './top-button.module.css'



const TopButton: React.FC = () => {

    const [ visibility, setVisibility ] = useState(false);

    useEffect(() => {
        const scrollFunc = () => {
            const offset = window.scrollY;
            if(offset !== 0) {
                setVisibility(true)
            } else {
                setVisibility(false)
            }
        }
        window.addEventListener('scroll', scrollFunc)
        
        return () => {
            window.removeEventListener('scroll', scrollFunc);
        }
        
    },[])

    const handler = () => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    }

    return (
        <button 
            type='button'
            className={visibility ? styles.button_active : styles.button}
            onClick={handler}
        >
            	&and;
        </button>
    )
}

export default TopButton