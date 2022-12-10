import React from 'react';
import styles from './main-page.module.css';


import FirstScreen from '../../components/main-page-components/first-screen/first-screen';


const MainPage: React.FC = () => {

    return (
        <main className={styles.page}>
            <FirstScreen />
        </main>
    )
}

export default MainPage;