import React from "react";
import Head from "next/head";
import Header from "../header/header";
import Footer from "../footer/footer";
import styles from './main-container.module.css';




const MainContainer: React.FC<any> = ({ children, meta }) => {

    return (
        <>
                <div className={styles.content}>
                    {children}
                </div>
        </>
    );
}

export default MainContainer;