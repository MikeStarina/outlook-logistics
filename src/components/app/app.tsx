import React, { useEffect } from "react";
import { useLocation } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import MainPage from "../../pages/main-page/main-page";
import TempPage from "../../pages/temp-page/first-screen/temp-page";
import MenuButton from "../menu-button/menu-button";
import Footer from "../footer/footer";




const App: React.FC = () => {

    const { pathname } = useLocation();
    useEffect(() => {window.scrollTo(0, 0)}, [pathname]);

 
    return (
        <>
            <MenuButton />
            <Routes>
                <Route path={"/"} element={<MainPage />} />
            </Routes>
            <Footer />
        </>
    )
} 

export default App;