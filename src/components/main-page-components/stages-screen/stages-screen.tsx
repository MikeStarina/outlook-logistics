import React from "react";
import styles from './stages-screen.module.css';







const StagesScreen: React.FC = () => {

    return (
        <section className={styles.screen}>
            <h2 className={styles.title}><i>СТАДИИ</i> ЗАКАЗА</h2>

            <p className={styles.description}>Заполните форму ниже и мы сразу получите стоимость перевозки!
                Вам останется только подтвердить заявку.
            </p>

            <div className={styles.cards_block}>
                <div className={styles.card}>
                    <div className={styles.card_title_box}>
                        <h5 className={styles.card_number}>1</h5>
                        <p className={styles.card_timing}>+ 30 секунд</p>
                    </div>
                    <div className={styles.card_description_box}>
                        <p className={styles.card_description}>За 30 секунд вы узнаете первичную стоимость перевозки - просто воспользуйтесь нашим калькулятором</p>
                        <p className={styles.timer_total}>Всего: 0,5 минут</p>
                    </div>

                </div>
                <div className={styles.card}>
                    <div className={styles.card_title_box}>
                        <h5 className={styles.card_number}>2</h5>
                        <p className={styles.card_timing}>+ 5 минут</p>
                    </div>
                    <div className={styles.card_description_box}>
                        <p className={styles.card_description}>Уже через 5 минут наш менеджер свяжется с вами для уточнения деталей перевозки и забронирует для вас необходимый транспорт</p>
                        <p className={styles.timer_total}>Всего: 5,5 минут</p>
                    </div>

                </div>
                <div className={styles.card}>
                    <div className={styles.card_title_box}>
                        <h5 className={styles.card_number}>3</h5>
                        <p className={styles.card_timing}>+ 60 минут</p>
                    </div>
                    <div className={styles.card_description_box}>
                        <p className={styles.card_description}>Всего один час уйдет у нас на то, чтобы подготовить все необходимые документы! Проверяйте почту - через 60 минут они будут у вас!</p>
                        <p className={styles.timer_total}>Всего: 65,5 минут</p>
                    </div>

                </div>
                <div className={styles.card}>
                    <div className={styles.card_title_box}>
                        <h5 className={styles.card_number}>4</h5>
                        <p className={styles.card_timing}>+ 30-40 минут</p>
                    </div>
                    <div className={styles.card_description_box}>
                        <p className={styles.card_description}>Мы не знаем сколько времени вам потребуется для того, чтобы подписать заявку, но обычно хватает 30-40 минут. Полчаса и машина будет у вас в назначенное время!</p>
                        <p className={styles.timer_total}>Всего: 100 минут</p>
                    </div>

                </div>
                
              
            </div>
        </section>
    )
}

export default StagesScreen;