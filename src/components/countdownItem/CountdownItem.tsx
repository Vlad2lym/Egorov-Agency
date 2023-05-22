import React, { FC } from "react";
import styles from './CountdownItem.module.scss'
import decor from '../../img/countdown-item-decor.png'

interface IProps {
    count: number;
    text: string
}

const CountdownItem:FC<IProps> = ({ count, text }) => {
    return (
        <div className={styles['countdown-item']}>
            <h1 className={styles.count}>{count}</h1>
            <img src={decor} alt='' className={styles['decor-icon']}/>
            <p className={styles['decor-text']}>{text}</p>
        </div>
    )
}

export default CountdownItem