import React from "react";
import styles from './first-screen.module.css';
import firstScreenBg from '../../../../public/firstScreenBg.jpg';
import newbg from '../../../../public/newbg.jpg';
import Image from "next/image";
import Calc from "../../calc/calc";
import MainForm from "@/components/main-form/main-form";






const FirstScreen: React.FC = () => {

    return (

       
        <section className={styles.screen} id='calc'>
            <MainForm />
        </section>
       
    )
}

export default FirstScreen;