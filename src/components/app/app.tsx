import React, { useEffect } from "react";
import { useSelector, useDispatch } from "../..";
import { useLocation } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import MainPage from "../../pages/main-page/main-page";
import FeaturesPage from "../../pages/features-page/features-page";
import ServicesPage from "../../pages/services-page/services-page";
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
import Page404 from "../../pages/404-page/404-page";
import { Navigate } from "react-router-dom";




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
                <Route path={"/uslugi"} element={<ServicesPage />} />
                <Route path={"/uslugi/:id"} element={<FeaturesPage />} />
                <Route path={"/uslugi/:id/:slug"} element={<FeatureLayoutPage />} />
                <Route path={"/blog"} element={<BlogFeedPage />} />
                <Route path={"/contacts"} element={<ContactsPage />} />
                <Route path={"/blog/:id"} element={<BlogFeedPage />} />

                <Route path={"/features"} element={<Navigate to='/uslugi' replace />} />
                <Route path={"/features/0"} element={<Navigate to='/uslugi/avtomobilnye-perevozki/20-tonn' replace />} />
                <Route path={"/features/1"} element={<Navigate to='/uslugi/avtomobilnye-perevozki/5-tonn' replace />} />
                <Route path={"/features/2"} element={<Navigate to='/uslugi/avtomobilnye-perevozki/1-5-tonn' replace />} />
                <Route path={"/features/3"} element={<Navigate to='/uslugi/avtomobilnye-perevozki/refrizheratornye' replace />} />
                <Route path={"/features/4"} element={<Navigate to='/uslugi/avtomobilnye-perevozki/negabaritnye' replace />} />
                <Route path={"/features/5"} element={<Navigate to='/uslugi/avtomobilnye-perevozki/perevozki-s-okhranoj' replace />} />
                
                <Route path={"*"} element={<Page404 />} />
            </Routes>
           
            <Footer />
        </>
    )
} 

export default App;