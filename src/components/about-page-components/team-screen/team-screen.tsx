import React from "react";
import styles from './team-screen.module.css';
import CEO from '../../../images/CEO.png';






const TeamScreen: React.FC = () => {

    return (
        <section className={styles.screen}>
            <div className={styles.profile_wrapper}>
                    <div className={styles.avatar_wrapper}>
                        <img src={CEO} alt='CEO photo' className={styles.avatar}></img>
                    </div>
                    <div className={styles.credits_wrapper}>
                        <p className={styles.credits}>Самусенко А.В.</p>
                        <p className={styles.credits}>Генеральный Директор</p>
                    </div>
                    
               
            </div>
            <div className={styles.profile_wrapper}>
                    <div className={styles.avatar_wrapper}>
                        <img src={CEO} alt='CEO photo' className={styles.avatar}></img>
                    </div>
                    <div className={styles.credits_wrapper}>
                        <p className={styles.credits}>Шелепенок М.В.</p>
                        <p className={styles.credits}>Коммерческий Директор</p>
                    </div>
                    
               
            </div>
            <div className={styles.profile_wrapper}>
                    <div className={styles.avatar_wrapper}>
                        <img src={CEO} alt='CEO photo' className={styles.avatar}></img>
                    </div>
                    <div className={styles.credits_wrapper}>
                        <p className={styles.credits}>Старина М.А.</p>
                        <p className={styles.credits}>Старший Логист</p>
                    </div>
                    
               
            </div>
            <div className={styles.profile_wrapper}>
                    <div className={styles.avatar_wrapper}>
                        <img src={CEO} alt='CEO photo' className={styles.avatar}></img>
                    </div>
                    <div className={styles.credits_wrapper}>
                        <p className={styles.credits}>Сенькин Д.В.</p>
                        <p className={styles.credits}>Руководитель ОП</p>
                    </div>
                    
               
            </div>

        </section>
    )
}

export default TeamScreen;