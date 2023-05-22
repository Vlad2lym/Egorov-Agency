import React, { FC } from "react";
import styles from './Title.module.scss'

interface IProps  {
    children: string;
    styles?: string
}

const Title:FC<IProps> = (props) => {
    return (
        <h1 className={`${styles.title} ${props.styles}`}>{props.children}</h1>
    )
}

export default Title