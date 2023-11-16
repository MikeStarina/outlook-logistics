import React from "react";
import styles from './stages-screen.module.css';
import Link from "next/link";



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
                        Логистическая компания Outlook Logistics предлагает надежные и эффективные услуги по перевозке грузов в Санкт-Петербурге.
                        Если вам требуется быстрая и безопасная доставка груза, мы готовы помочь.
                    </p>
                    <p className={styles.card_text}>
                        Оформить заявку на перевозку груза с нами легко и удобно. Вы можете заказать услугу через наш сайт или связаться с нашими специалистами по номеру телефона.
                        Мы гарантируем оперативное реагирование на все запросы и индивидуальный подход к каждому клиенту.
                    </p>
                    <p className={styles.card_text}>
                        Цены на наши услуги формируются исходя из различных факторов, таких как тип груза, расстояние перевозки, срочность доставки и другие особенности.
                        Чтобы рассчитать стоимость перевозки вашего груза, вы можете обратиться к нам для получения бесплатной консультации и предварительного расчета.
                    </p>
                    <Link href='/uslugi'>
                        <button type="button" className={styles.card_button}>Наши услуги</button>
                    </Link>
                    <Link href='/'>
                        <button type="button" className={styles.card_button}>Калькулятор </button>
                    </Link>

                </div>
                
               
                
                
              
            </div>
        </section>
    )
}

export default StagesScreen;