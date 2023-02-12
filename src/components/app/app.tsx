import React, { useEffect } from "react";
import { useSelector, useDispatch } from "../..";
import { useLocation } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import MainPage from "../../pages/main-page/main-page";
import FeaturesPage from "../../pages/features-page/features-page";
import FeatureLayoutPage from "../../pages/fearture-layout-page/feature-layout-page";
import AboutPage from "../../pages/about-page/about-page";
import BlogFeedPage from "../../pages/blog-feed-page/blog-feed-page";
import MenuButton from "../menu-button/menu-button";
import Menu from "../menu/menu";
import Footer from "../footer/footer";
import Popup from "../popup/popup";
import { MAIN_MENU_VISIBILITY } from "../../services/actions/utils-actions";
import { getFeatures } from "../../services/actions/features-actions";
import ContactsPage from "../../pages/contacs-page/contacts-page";
import useWindowSize from "../../utils/useWindowSize";
import useScrollData from "../../utils/useScrollData";



const App: React.FC = () => {
    
    const { isMainMenuActive, isPopupVisible } = useSelector((store) => store.utils);
    const { pathname } = useLocation();
    const dispatch = useDispatch();
    useEffect(() => {window.scrollTo(0, 0)}, [pathname]);

    const menuButtonClickHandler = () => {
        dispatch({type: MAIN_MENU_VISIBILITY})
       
    }

    useScrollData((scrollData) => {
        //console.log(scrollData);
    })

    



    



   

    

 
    return (
        <>
            {!isMainMenuActive && <MenuButton clickHandler={menuButtonClickHandler} />}
            {isMainMenuActive && <Menu />}
            {isPopupVisible && <Popup />}
            <Routes>
                <Route path={"/"} element={<MainPage />} />
                <Route path={"/about"} element={<AboutPage />} />
                <Route path={"/features"} element={<FeaturesPage />} />
                <Route path={"/features/:id"} element={<FeatureLayoutPage />} />
                <Route path={"/blog"} element={<BlogFeedPage />} />
                <Route path={"/contacts"} element={<ContactsPage />} />
                <Route path={"/blog/:id"} element={<BlogFeedPage />} />
                
            </Routes>
           
            <Footer />
        </>
    )
} 

export default App;