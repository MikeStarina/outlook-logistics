import React from "react";
import styles from './team-screen.module.css';
import CEO from '../../../../public/CEO.webp';
import CDO from '../../../../public/CDO.webp';
import cfo from '../../../../public/cfo.png';
import ropp from '../../../../public/ropp.webp';
import logist from '../../../../public/logist.png';
import Image from "next/image";






const TeamScreen: React.FC = () => {

    return (
        <section className={styles.screen}>
            <div className={styles.profile_wrapper}>
                    <div className={styles.avatar_wrapper}>
                        <Image src={CEO} alt='CEO photo' className={styles.avatar_ceo} />
                    </div>
                    <div className={styles.credits_wrapper}>
                        <p className={styles.credits}>Самусенко А.В.</p>
                        <p className={styles.credits}>Генеральный Директор</p>
                    </div>
                    
               
            </div>
            <div className={styles.profile_wrapper}>
                    <div className={styles.avatar_wrapper}>
                        <Image src={cfo} alt='cfo photo' className={styles.avatar_cfo} />
                    </div>
                    <div className={styles.credits_wrapper}>
                        <p className={styles.credits}>Шелепенок М.В.</p>
                        <p className={styles.credits}>Коммерческий Директор</p>
                    </div>
                    
               
            </div>
            <div className={styles.profile_wrapper}>
                    <div className={styles.avatar_wrapper}>
                        <Image src={logist} alt='Logist photo' className={styles.avatar_logist} />
                    </div>
                    <div className={styles.credits_wrapper}>
                        <p className={styles.credits}>Старина М.А.</p>
                        <p className={styles.credits}>Старший Логист</p>
                    </div>
                    
               
            </div>
            <div className={styles.profile_wrapper}>
                    <div className={styles.avatar_wrapper}>
                        <Image src={ropp} alt='Rop photo' className={styles.avatar_rop} />
                    </div>
                    <div className={styles.credits_wrapper}>
                        <p className={styles.credits}>Петухов Н.А.</p>
                        <p className={styles.credits}>Руководитель ОП</p>
                    </div>
                    
               
            </div>
            <div className={styles.profile_wrapper}>
                    <div className={styles.avatar_wrapper}>
                        <Image src={CDO} alt='CDO photo' className={styles.avatar_cdo} />
                    </div>
                    <div className={styles.credits_wrapper}>
                        <p className={styles.credits}>Гапанёнок Д.В.</p>
                        <p className={styles.credits}>Директор по развитию</p>
                    </div>
                    
               
            </div>
          

        </section>
    )
}

export default TeamScreen;