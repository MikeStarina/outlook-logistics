import React from "react";
import { useDispatch } from "../..";
import styles from './menu.module.css';
import { MAIN_MENU_VISIBILITY } from "../../services/actions/utils-actions";
import { Link } from "react-router-dom";




const Menu: React.FC = () => {

    const dispatch = useDispatch();
    const closeButtonClickHandler = () => {
        dispatch({type: MAIN_MENU_VISIBILITY});
    }

    return(
        <div className={styles.menu}>
            <div className={styles.close_button} onClick={closeButtonClickHandler} >
                <div className={styles.line}></div>
                <div className={styles.line}></div>
            </div>


            <div className={styles.links_wrapper}>
                <Link className={styles.link} to='/about'>О КОМПАНИИ</Link>
                <Link className={styles.link} to='/about'>УСЛУГИ</Link>
                <Link className={styles.link} to='/about'>БЛОГ</Link>
                <Link className={styles.link} to='/about'>КОНТАКТЫ</Link>                
            </div>
        </div>
    )
}

export default Menu;