import React, { FC, useEffect, useState } from "react";
import styles from './InputEmail.module.scss'
import arrow from '../../img/arrow-right.png'
import { useFetching } from "../../hooks/useFetching";
import PostService from "../../API/PostService";
import MyModal from "../UI/myModal/myModal";
import ModalContent from "../ModalContent/ModalContent";

interface IProps {

}

const InputEmail:FC<IProps> = () => {
    const [email, setEmail] = useState('');
    const [valid, setValid] = useState<any>(false);
    const [modalVisible, setModalVisible] = useState(false);

    const [fetchEmail, isEmailLoading, emailError] = useFetching(async () => {
        const response = await PostService.postEmail(email);
        console.log(response.data);
    })

    const fetchHandler = () => {
        if (valid) {
            // @ts-ignore
            fetchEmail();
            setEmail('');
            setModalVisible(true);
        }
    }

    useEffect(() => {
        if (email === '') {
            setValid(false);
        }
    }, [email])

    return (
        <div className={styles['text-field']}>
            <MyModal visible={modalVisible} setVisible={setModalVisible}>
                <ModalContent setVisible={setModalVisible} success={!Boolean(emailError)} loading={isEmailLoading as boolean}/>
            </MyModal>
            <input 
                className={styles['text-field__input']} 
                type='email'
                placeholder="Enter your Email and get notified"
                onChange={(e) => {setEmail(e.target.value); setValid(e.target.validity.valid)}}
                value={email}
                pattern="^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$"
                onKeyDown={e => e.keyCode === 13 ? fetchHandler() : ''}
            >
            </input>
            <span className={`${styles['text-field__icon']} ${valid ? styles['icon-green'] : ''}`} onClick={fetchHandler}>
                <img src={arrow} alt="arrow"/>
            </span>
        </div>
    )
}

export default InputEmail