import React from "react";
import styles from './stages-screen.module.scss';
import Link from "next/link";
import classNames from "classnames/bind";
import LeadForm from "../../lead-form/lead-form";
const cx = classNames.bind(styles);


const StagesScreen: React.FC = () => {

   

    return (
        <section className={cx('screen')}>
            <h2 className={cx('screen__title')}>OUTLOOK — СТАДИИ <i>ЗАКАЗА</i></h2>

            <p className={cx('screen__subtitle')}>
                Рассказываем как оставить заявку и что будет после ее обработки нашими менеджерами.
            </p>

            <div className={cx('screen__cards-block')}>
                <div className={cx('screen__card')}>
                    <div className={cx('screen__stage-wrapper')}>                       
                        <h5 className={cx('screen__card-title')}>01</h5>        

                        <div className={cx('screen__card-description-box')}>
                            <p className={cx('screen__card-title')}>ЗАЯВКА</p>
                            <p className={cx('screen__card-subtitle')}>Через 10-15 минут после оформления заявки мы свяжемся с вами для для выяснения и согласования деталей задачи.</p>                          
                        </div>
                    </div>
                    <div className={cx('screen__stage-wrapper')}>                       
                        <h5 className={cx('screen__card-title')}>02</h5>        

                        <div className={cx('screen__card-description-box')}>
                            <p className={cx('screen__card-title')}>ДЕТАЛИ</p>
                            <p className={cx('screen__card-subtitle')}>Спросим про задачу, срочность, область вашей деятельности, регулярность перевозок и прочее - все для того чтобы подготовить для вас выгодное предложение и подготовить договор.</p>
                          
                        </div>                       

                    </div>
                    <div className={cx('screen__stage-wrapper')}>                       
                        <h5 className={cx('screen__card-title')}>03</h5>        

                        <div className={cx('screen__card-description-box')}>
                            <p className={cx('screen__card-title')}>ДОКУМЕНТЫ</p>
                            <p className={cx('screen__card-subtitle')}>
                                Подготовим и отправим на утверждение договор со всеми важными деталями. Из-за особенностей наших процессов (Страхование, ответственность перевозчика и т.п.) мы не работаем без подписанного договора.
                            </p>                          
                        </div>                       

                    </div>
                    <div className={cx('screen__stage-wrapper')}>                       
                        <h5 className={cx('screen__card-title')}>04</h5>        

                        <div className={cx('screen__card-description-box')}>
                            <p className={cx('screen__card-title')}>ОБРАТНАЯ СВЯЗЬ</p>
                            <p className={cx('screen__card-subtitle')}>
                                Закроем задачу и соберем обратную связь. Нам важно знать ваше мнение - это наш способ всегда держать руку на пульсе и быть в тренде рынка и потребностей клиентов.
                            </p>
                          
                        </div>

                        

                    </div>
                   
                    

                </div>
                <div className={cx('screen__card')}>

                    <LeadForm />

                    
                    <div className={cx('screen__card-buttons-box')}>
                        <Link href='/about' className={cx('screen__card-button-link')}>
                            о нас
                        </Link>
                        <Link href='/uslugi' className={cx('screen__card-button-link')}>
                            услуги
                        </Link>
                        <Link href='/contacts' className={cx('screen__card-button-link')}>
                            контакты
                        </Link>
                        <Link href='' className={cx('screen__card-button-link')}>
                            парк
                        </Link>
                    </div>

                    {/* <div className={cx('screen__card-text-box')}>
                        <p className={cx('screen__card-text')}>
                            Логистическая компания Outlook Logistics предлагает надежные и эффективные услуги по перевозке грузов в Санкт-Петербурге.
                            Если вам требуется быстрая и безопасная доставка груза, мы готовы помочь.
                        </p>
                        <p className={cx('screen__card-text')}>
                            Оформить заявку на перевозку груза с нами легко и удобно. Вы можете заказать услугу через наш сайт или связаться с нашими специалистами по номеру телефона.
                            Мы гарантируем оперативное реагирование на все запросы и индивидуальный подход к каждому клиенту.
                        </p>
                        <p className={cx('screen__card-text')}>
                            Цены на наши услуги формируются исходя из различных факторов, таких как тип груза, расстояние перевозки, срочность доставки и другие особенности.
                            Чтобы рассчитать стоимость перевозки вашего груза, вы можете обратиться к нам для получения бесплатной консультации и предварительного расчета.
                        </p>
                    </div> */}

                </div>
              
            </div>

            <div className={cx('screen__features-box')}>
                <div className={cx('screen__feature')}>
                    <div className={cx('screen__feature-header')}>
                        <svg width="50" height="50" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 10.2L3.8 8L2.6 9.2L6 12.6L14 4.6L12.8 3.4L6 10.2Z" fill="currentColor"/>
                        </svg>
                        <h3 className={cx('screen__feature-title')}>СТРАХОВАНИЕ</h3>
                    </div>
                    <p className={cx('screen__feature-text')}>
                        Все грузы на сумму до 1 000 000 руб. застрахованы автоматически.
                    </p>
                </div>
                <div className={cx('screen__feature')}>
                    <div className={cx('screen__feature-header')}>
                        <svg width="50" height="50" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 10.2L3.8 8L2.6 9.2L6 12.6L14 4.6L12.8 3.4L6 10.2Z" fill="currentColor"/>
                        </svg>
                        <h3 className={cx('screen__feature-title')}>цена</h3>
                    </div>
                    <p className={cx('screen__feature-text')}>
                    Персональный подход к ценообразованию для постоянных клиентов
                    </p>
                </div>
                <div className={cx('screen__feature')}>
                    <div className={cx('screen__feature-header')}>
                        <svg width="50" height="50" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 10.2L3.8 8L2.6 9.2L6 12.6L14 4.6L12.8 3.4L6 10.2Z" fill="currentColor"/>
                        </svg>
                        <h3 className={cx('screen__feature-title')}>ПАРК</h3>
                    </div>
                    <p className={cx('screen__feature-text')}>
                        Современный автопарк и профессиональные водители с большим опытом
                    </p>
                </div>
                <div className={cx('screen__feature')}>
                    <div className={cx('screen__feature-header')}>
                        <svg width="50" height="50" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 10.2L3.8 8L2.6 9.2L6 12.6L14 4.6L12.8 3.4L6 10.2Z" fill="currentColor"/>
                        </svg>
                        <h3 className={cx('screen__feature-title')}>ДОКУМЕНТЫ</h3>
                    </div>
                    <p className={cx('screen__feature-text')}>
                        Не волнуйтесь за документы перевозки. Всегда отправим вам их после завершения задачи.
                    </p>
                </div>
            </div>
           
        </section>
    )
}

export default StagesScreen;