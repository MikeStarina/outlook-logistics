import React from 'react';
import styles from './main-text-screen.module.css';






const MainTextScreen: React.FC = () => {

    return (
        <section className={styles.screen}>
            <div className={styles.column_one}>
                <h2 className={styles.column_title}>О НАС:</h2>
               
                    <p className={styles.text}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore laboriosam autem ducimus aliquam? Cumque laborum modi praesentium fuga numquam, provident, exercitationem corporis delectus reprehenderit vero, dicta explicabo distinctio tenetur aperiam!
                    </p>
                    <p className={styles.text}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore laboriosam autem ducimus aliquam? Cumque laborum modi praesentium fuga numquam, provident, exercitationem corporis delectus reprehenderit vero, dicta explicabo distinctio tenetur aperiam!
                    </p>
                    <p className={styles.text}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore laboriosam autem ducimus aliquam? Cumque laborum modi praesentium fuga numquam, provident, exercitationem corporis delectus reprehenderit vero, dicta explicabo distinctio tenetur aperiam!
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