import React from 'react';
import styles from './main-page.module.css';


import FirstScreen from '../../components/main-page-components/first-screen/first-screen';
import FeaturesScreen from '../../components/main-page-components/features-screen/features-screen';


const MainPage: React.FC = () => {

    return (
        <main className={styles.page}>
            <FirstScreen />
            <FeaturesScreen />
        </main>
    )
}

export default MainPage;