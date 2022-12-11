import React, { useEffect } from "react";
import { useLocation } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import MainPage from "../../pages/main-page/main-page";
import MenuButton from "../menu-button/menu-button";
import Footer from "../footer/footer";




const App: React.FC = () => {

    const location = useLocation()


    useEffect(() => {window.scrollTo(0, 0)}, [location]);

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