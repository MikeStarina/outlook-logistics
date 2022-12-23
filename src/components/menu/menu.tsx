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
                <Link className={styles.link} to='/features'>УСЛУГИ</Link>
                <Link className={styles.link} to='/blog'>БЛОГ</Link>
                <Link className={styles.link} to='/contacts'>КОНТАКТЫ</Link>                
            </div>

            <div className={styles.contacts_wrapper}>
                <p className={styles.contacts_item}>info@outlook-logistics.ru</p>
                <p className={styles.contacts_item}>8(800)888-99-00</p>
            </div>
        </div>
    )
}

export default Menu;