import React from "react";
import styles from './page.module.scss'
import classNames from "classnames/bind";
import MainContainer from "@/components/container/main-container";
import FirstScreen from "@/components/main-page-components/first-screen/first-screen";
import BreadcrumbsComponent from "@/components/breadcrumbs/breadcrumbs";
import Docs from "@/components/docs-screen/docs-screen";
import ClientsScreen from "@/components/main-page-components/clients-screen/clients-screen";
import FormScreen from "@/components/main-page-components/form-screen/form-screen";
const cx = classNames.bind(styles);



export default function Page () {

    return (
        <MainContainer>
            <main className={cx('page')}>
                <div className= {cx('breadcrumbs_wrapper')}>
                    <BreadcrumbsComponent
                        params={
                        [
                            {title: 'Главная', href: '/'},
                            {title: 'Документы'},
                        ]
                    }
                    />
                </div>
                <FirstScreen
                    mainText='OUTLOOK — Документы'
                    subtitle='Собрали все важные документы на одной странице'
                    cover={false}
                    links={[
                        {text: 'Контакты', href: '/contacts'},
                        {text: 'Услуги', href: '/uslugi'},
                    ]}
                />
                <Docs />
                <ClientsScreen />
                <FormScreen />
            </main>
        </MainContainer>
    )
}