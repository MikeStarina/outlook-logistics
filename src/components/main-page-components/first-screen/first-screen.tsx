import React from 'react'
import styles from './first-screen.module.scss';
import MainForm from "@/components/main-form/main-form";
import classNames from "classnames/bind";
import Link from "next/link";
const cx = classNames.bind(styles);


type TProps = {
    mainText: string;
    links: {
        text: string;
        href: string;
    }[];
    subtitle?: string;
    cover: boolean;
    titleType?: 'h1' | 'p'
}


const FirstScreen: React.FC<TProps> = ({mainText, links, subtitle, titleType = 'h1'}) => {

    const title = () => {
        if (titleType === 'h1') {
            return (
                <h1 className={cx('screen__main-title')}>{mainText}</h1>
            )
        }

        if (titleType === 'p') {
            <p className={cx('screen__main-title')}>{mainText}</p>
        }
    }

    return (

       
        <section className={cx('screen')}>
            <div className={cx('screen__column', 'screen__column--wide')}>
                <div className={cx('screen__title-wrapper')}>
                    {title()}
                    {subtitle && <p className={cx('screen__subtitle')}>{subtitle}</p>}
                    <div className={cx('screen__buttons-wrapper')}>
                        {links && links.map((i, id) => 
                            <Link href={i.href} className={cx('screen__button')} key={id}>{i.text}</Link>
                        )}
                    </div>
                </div>
                {/* {cover && <Image src={img} alt='' />} */}
            </div>
            <div className={cx('screen__column', 'screen__column--thin')}>
                <MainForm />
            </div>
        </section>
       
    )
}

export default FirstScreen;