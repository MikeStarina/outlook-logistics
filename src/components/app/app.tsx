import React, { useEffect } from "react";
import { useSelector, useDispatch } from "../..";
import { useLocation } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import MainPage from "../../pages/main-page/main-page";
import TempPage from "../../pages/temp-page/first-screen/temp-page";
import AboutPage from "../../pages/about-page/about-page";
import MenuButton from "../menu-button/menu-button";
import Menu from "../menu/menu";
import Footer from "../footer/footer";
import { MAIN_MENU_VISIBILITY } from "../../services/actions/utils-actions";


const App: React.FC = () => {
    const { isMainMenuActive } = useSelector((store) => store.utils);
    
    const { pathname } = useLocation();
    const dispatch = useDispatch();
    useEffect(() => {window.scrollTo(0, 0)}, [pathname]);

    const menuButtonClickHandler = () => {
        dispatch({type: MAIN_MENU_VISIBILITY})
       
    }

   

    

 
    return (
        <>
            {!isMainMenuActive && <MenuButton clickHandler={menuButtonClickHandler} />}
            {isMainMenuActive && <Menu />}
            <Routes>
                <Route path={"/"} element={<MainPage />} />
                <Route path={"/about"} element={<AboutPage />} />
            </Routes>
           
            <Footer />
        </>
    )
} 

export default App;