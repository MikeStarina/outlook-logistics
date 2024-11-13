import React from "react";
import styles from './main-container.module.css';




const MainContainer: React.FC<any> = ({ children }) => {

    return (
        <>
                <div className={styles.content}>
                    {children}
                </div>
        </>
    );
}

export default MainContainer;