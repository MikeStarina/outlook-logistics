import React from 'react';
import styles from './main-page.module.css';


import FirstScreen from '../../components/main-page-components/first-screen/first-screen';
import FeaturesScreen from '../../components/main-page-components/features-screen/features-screen';
import CalcScreen from '../../components/main-page-components/calc-screen/calc-screen';
import StagesScreen from '../../components/main-page-components/stages-screen/stages-screen';
import AboutScreen from '../../components/main-page-components/about-screen/about-screen';


const MainPage: React.FC = () => {

    return (
        <main className={styles.page}>
            <FirstScreen />
            <FeaturesScreen />
            <CalcScreen />
            <StagesScreen />
            <AboutScreen />
        </main>
    )
}

export default MainPage;