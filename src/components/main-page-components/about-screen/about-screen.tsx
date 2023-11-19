import React from "react";
import styles from "./about-screen.module.css";
import CEO from "../../../../public/CEO.webp";
import Link from "next/link";
import Image from "next/image";

const AboutScreen: React.FC = () => {
  return (
    <section className={styles.screen}>
      <div className={styles.digits}>
        <div className={styles.digits_wrapper}>
          <p className={styles.counter}>100+</p>
          <p className={styles.description}>МАШИН</p>
        </div>
        <div className={styles.digits_wrapper}>
          <p className={styles.counter}>50</p>
          <p className={styles.description}>СОТРУДНИКОВ</p>
        </div>
        <div className={styles.digits_wrapper}>
          <p className={styles.counter}>2000+</p>
          <p className={styles.description}>КЛИЕНТОВ</p>
        </div>
        <div className={styles.digits_wrapper}>
          <p className={styles.counter}>5 ЛЕТ</p>
          <p className={styles.description}>ОПЫТА</p>
        </div>
        <div className={styles.digits_wrapper}>
          <p className={styles.counter}>1300+</p>
          <p className={styles.description}>ГОРОДОВ</p>
        </div>

        <div className={styles.digits_bg}></div>
      </div>

      <div className={styles.about_block}>
        <div className={styles.left_column}>
          <div className={styles.avatar_wrapper}>
            
            <Image src={CEO} alt="CEO photo" className={styles.avatar} />
          </div>
          <div className={styles.credits_wrapper}>
            <p className={styles.credits}>Самусенко А.В.</p>
            <p className={styles.credits}>Генеральный Директор</p>
          </div>
        </div>

        <div className={styles.right_column}>
          <p className={styles.text}>
            Преимущества перевозки грузов от компании Outlook Logistics:
          </p>
          <p className={styles.text}>
            Outlook Logistics предлагает широкий спектр услуг по перевозке
            грузов. Мы осуществляем как междугородние, так и международные
            перевозки. Наша компания имеет большой опыт работы с различными
            видами грузов, включая сборные, негабаритные и опасные грузы. Мы
            обеспечиваем полное сопровождение груза на всех этапах перевозки,
            начиная от его погрузки и заканчивая доставкой в пункт назначения.
          </p>
          <p className={styles.text}>
            Outlook Logistics - это частная логистическая компания, которая
            ценит каждого клиента и стремится предоставить высокое качество
            услуг. Наша команда профессионалов имеет богатый опыт в сфере
            логистики и всегда готова предложить оптимальные решения для вашего
            груза.
          </p>
          <p className={styles.text}>
            Ознакомьтесь с нашим сайтом, чтобы узнать больше о наших услугах и
            оформить заявку на перевозку груза. Мы предлагаем простой и
            интуитивно понятный интерфейс, который поможет вам быстро и удобно
            заказать необходимые услуги.
          </p>
          <p className={styles.text}>
            Не откладывайте свою перевозку на потом. Обратитесь к Outlook
            Logistics уже сегодня и доверьте нам свой груз. Мы гарантируем
            надежность, оперативность и конкурентные цены.
          </p>

          <div className={styles.buttons_wrapper}>
            <Link href="/about" className={styles.link_button_wrapper}>
              <button type="button" className={styles.button}>
                О Нас
              </button>
            </Link>
            <Link href="/about" className={styles.link_button_wrapper}>
              <button type="button" className={styles.button}>
                О Команде
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutScreen;
