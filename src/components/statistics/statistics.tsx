'use client'
import React, { useState, useEffect } from "react"
import styles from './statistics.module.scss';
import classNames from "classnames/bind";
const cx = classNames.bind(styles)


const statsArr = [
    {value: 100, description: 'машин'},
    {value: 50, description: 'сотрудников'},
    {value: 2000, description: 'клиентов'},
    {value: 7, description: 'лет опыта'},
]





const Statistics: React.FC = () => {

    return (
        <div className={cx('statistics')}>
            {statsArr.map((i, index) =>
                <div className={cx('statistics__wrapper')} key={index}>
                    <p className={cx('statistics__counter')}>{i.value}+</p>
                    <p className={cx('statistics__description')}><i>{i.description}</i></p>
                </div>
            )}
      </div>
    )
}

export default Statistics