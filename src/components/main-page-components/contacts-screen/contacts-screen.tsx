import React from "react";
import styles from './contacts-screen.module.css';






const ContactsScreen: React.FC = () => {

    return (
        <section className={styles.screen}>
            <div className={styles.contacts_block}>

            </div>
            <div className={styles.map_block}>
                
            </div>

            <div className={styles.circle}>
                <div className={styles.inner_circle}></div>
            </div>
        </section>
    )
}

export default ContactsScreen; 