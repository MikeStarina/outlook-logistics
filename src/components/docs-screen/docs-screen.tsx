import React from "react";
import styles from './docs-screen.module.scss'
import classNames from "classnames/bind";
import Link from "next/link";
const cx = classNames.bind(styles)



export default function Docs () {

    return (
        <section className={cx('screen')}>
                <div className={cx('screen__title-wrapper')}>
                    <h2 className={cx('screen__title')}>OUTLOOK - <i>ДОКУМЕНТЫ</i></h2>
                    {/* <p className={cx('screen__subtitle')}>Делаем больше других, чтобы перевозки были удобными и безопасными, а бизнес - честным и предсказуемым!</p> */}
                </div>

                <div className={cx('screen__docs-wrapper')}>
                    <Link href='/docs/dogovor.pdf' target='blank' className={cx('screen__card')}>
                        Договор-оферта <span>&rarr;</span>
                    </Link>
                    <Link href='/docs/5825.pdf' target='blank' className={cx('screen__card')}>
                        Свидетельство ТППСПБ <span>&rarr;</span>
                    </Link>
                </div>
        </section>
    )
}