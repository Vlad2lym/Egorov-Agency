import React, {FC} from "react";
import styles from './myModal.module.scss'

interface MyModalProps {
    children: any;
    visible: boolean;
    setVisible: Function
}

const MyModal:FC<MyModalProps> = ({children, visible, setVisible}) => {
    const rootClasses = [styles.modal]

    if (visible) {
        rootClasses.push(styles.active)
    }

    return (
        <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
            <div className={styles.modal__content} onClick={e => e.stopPropagation()}>
                <h1 className={styles.modal__close} onClick={() => setVisible(false)}>&times;</h1>
                {children}
            </div>
        </div>
    )
}

export default MyModal