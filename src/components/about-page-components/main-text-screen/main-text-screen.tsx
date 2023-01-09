import React from 'react';
import styles from './main-text-screen.module.css';






const MainTextScreen: React.FC = () => {

    return (
        <section className={styles.screen}>
            <div className={styles.column_one}>
                <h2 className={styles.column_title}>О НАС:</h2>
               
                    <p className={styles.text}>
                        Главное преимущество и ценность нашей компании – высокий уровень сервиса, опыт и профессионализм логистов и менеджеров.
                    </p>
                    <p className={styles.text}>
                        Опыт позволяет нам учитывать все нюансы, которые клиент может не предусмотреть, и предлагать наиболее качественный сервис по приемлемым ценам.
                    </p>
                    <p className={styles.text}>
                        Наши менеджеры подберут оптимальный транспорт под ваш груз, обеспечат своевременную и безопасную перевозку и ежедневно будут информировать Вас о местоположении груза на всем пути следования.
                    </p>
                
            </div>
            <div className={styles.column_two}>
                <h2 className={styles.column_title}>В ЦИФРАХ:</h2>
                <div className={styles.digits_wrapper}>
                    <div className={styles.counter_box}>
                        <p className={styles.counter}>100</p>
                        <p className={styles.counter_subtitle}>МАШИН</p>
                    </div>
                    <div className={styles.counter_box}>
                        <p className={styles.counter}>50</p>
                        <p className={styles.counter_subtitle}>СОТРУДНИКОВ</p>
                    </div>
                    <div className={styles.counter_box}>
                        <p className={styles.counter}>2000</p>
                        <p className={styles.counter_subtitle}>КЛИЕНТОВ</p>
                    </div>
                    <div className={styles.counter_box}>
                        <p className={styles.counter}>1300</p>
                        <p className={styles.counter_subtitle}>ГОРОДОВ</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MainTextScreen;