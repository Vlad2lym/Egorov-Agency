import React, { FC } from "react";
import styles from './ModalContent.module.scss'

interface IProps {
    setVisible: Function;
    success: boolean;
    loading: boolean
}

const ModalContent:FC<IProps> = ({ loading, setVisible, success }) => {
    if (loading) {
        return (
            <>
                <h1 className={styles.title}>Loading...</h1>
                <div className={styles['loader-container']}>
                    <div className={styles['loader-1']}/>
                </div>
            </>
        )
    }
    return (
        <>
            {success ? (
                <>
                    <h1 className={styles.title}>SUCCESS!</h1>
                    <p className={styles.message}>You have successfully subscribed to the email newsletter</p>
                </>
            ) : (
                <>
                    <h1 className={styles.title}>OOOPS!</h1>
                    <p className={styles.message}>Data transfer error.<br/>Try again a little later</p>
                </>
            )}
            <button className={styles.close} onClick={() => setVisible(false)}>Close</button>
        </>
    )
}

export default ModalContent