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
                <Link className={styles.link} to='/' onClick={closeButtonClickHandler}>ГЛАВНАЯ</Link>
                <Link className={styles.link} to='/about' onClick={closeButtonClickHandler}>О КОМПАНИИ</Link>
                <Link className={styles.link} to='/features' onClick={closeButtonClickHandler}>УСЛУГИ</Link>
                <Link className={styles.link} to='/blog' onClick={closeButtonClickHandler}>БЛОГ</Link>
                <Link className={styles.link} to='/contacts' onClick={closeButtonClickHandler}>КОНТАКТЫ</Link>                
            </div>

            <div className={styles.contacts_wrapper}>
                <p className={styles.contacts_item}>info@outlook-logistics.ru</p>
                <a href='tel:+78002010073' className={styles.contacts_item}>8 <i>(800)</i> 201-00-73</a>
            </div>
        </div>
    )
}

export default Menu;