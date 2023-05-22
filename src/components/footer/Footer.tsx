import React, { FC } from "react";
import styles from './Footer.module.scss'
import InputEmail from "../inputEmail/InputEmail";

interface IProps {

}

const Footer:FC<IProps> = () => {
    return (
        <div className={styles.footer}>
            <InputEmail/>
        </div>
    )
}

export default Footer