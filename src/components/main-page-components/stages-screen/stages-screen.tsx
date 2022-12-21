import React from "react";
import styles from './stages-screen.module.css';







const StagesScreen: React.FC = () => {

    return (
        <section className={styles.screen}>
            <h2 className={styles.title}><i>СТАДИИ</i> ЗАКАЗА</h2>

            <p className={styles.description}>
                Четыре простых шага и ваш груз окажется в надежных руках!
            </p>

            <div className={styles.cards_block}>
                <div className={styles.card}>
                    <div className={styles.stage_wrapper}>                       
                        <h5 className={styles.card_number}>01</h5>        

                        <div className={styles.card_description_box}>
                            <p className={styles.card_description_title}>ЗАЯВКА</p>
                            <p className={styles.card_description}>За тридцать секунд вы узнаете первичную стоимость перевозки - просто воспользуйтесь нашим калькулятором</p>
                          
                        </div>

                        

                    </div>
                    <div className={styles.stage_wrapper}>                       
                        <h5 className={styles.card_number}>02</h5>        

                        <div className={styles.card_description_box}>
                            <p className={styles.card_description_title}>ДОКУМЕНТЫ</p>
                            <p className={styles.card_description}>Уже через пять минут наш менеджер свяжется с вами для уточнения деталей перевозки и забронирует для вас необходимый транспорт</p>
                          
                        </div>

                        

                    </div>
                    <div className={styles.stage_wrapper}>                       
                        <h5 className={styles.card_number}>03</h5>        

                        <div className={styles.card_description_box}>
                            <p className={styles.card_description_title}>ПОДАЧА МАШИНЫ</p>
                            <p className={styles.card_description}>Всего один час уйдет у нас на то, чтобы подготовить все необходимые документы! Проверяйте почту - через 60 минут они будут у вас!</p>
                          
                        </div>

                        

                    </div>
                    <div className={styles.stage_wrapper}>                       
                        <h5 className={styles.card_number}>04</h5>        

                        <div className={styles.card_description_box}>
                            <p className={styles.card_description_title}>ДОКУМЕНТЫ</p>
                            <p className={styles.card_description}>Мы не знаем сколько времени вам потребуется для того, чтобы подписать заявку, но обычно хватает тридцать-сорок минут. Полчаса и машина будет у вас в назначенное время!</p>
                          
                        </div>

                        

                    </div>
                   
                    

                </div>
                <div className={styles.card}>

                    <p className={styles.card_text}>
                    Мы — надежная транспортная компания с собственным автопарком, специализирующаяся на перевозке грузов в B2B-сегменте по всей территории России, СНГ и Европы. За 5 лет работы на рынке грузоперевозок нашими Клиентами стали более 5 000 компаний малого и среднего бизнеса.
                    Оцените удобство и скорость работы с нами.

                    </p>
                    <p className={styles.card_text}>
                    Выберите интересующую вас услугу или сразу передите в калькулятор для расчета стоимости.

                    </p>

                    <button type="button" className={styles.card_button}>Наши услуги</button>
                    <button type="button" className={styles.card_button}>Калькулятор </button>

                </div>
                
               
                
                
              
            </div>
        </section>
    )
}

export default StagesScreen;