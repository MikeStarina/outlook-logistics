import React from 'react';
import styles from './page.module.css';
import { Metadata } from 'next';
import MainContainer from '@/components/container/main-container';
import AboutFirstScreen from '@/components/about-page-components/first-screen/about-first-screen';
import TeamScreen from '@/components/about-page-components/team-screen/team-screen';
import FeedBackScreen from '@/components/about-page-components/feedback-screen/feedback-screen';
import ClientsScreen from '@/components/main-page-components/clients-screen/clients-screen';
import ContactsScreen from '@/components/main-page-components/contacts-screen/contacts-screen';
import SliderScreen from '@/components/about-page-components/slider-screen/slider-screen';


export const metadata: Metadata = {
    title: 'OUTLOOK LOGISTICS | О НАС',
    description: 'Ваш надежный логистический партнер',
}

const AboutPage = () => {

    return (
        <MainContainer>
            <AboutFirstScreen />
            <FeedBackScreen />            
            <TeamScreen />
            <SliderScreen />
            <ClientsScreen />
            <ContactsScreen />
        </MainContainer>
    );
}

export default AboutPage;