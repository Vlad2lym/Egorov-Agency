import React, { FC, useEffect, useState } from "react";
import styles from './Countdown.module.scss'
import CountdownItem from "../countdownItem/CountdownItem";

interface IProps {
    dateTime?: string
}

const Countdown:FC<IProps> = ({ dateTime }) => {
    const [[d, h, m, s], setTime] = useState(() => getTimer(dateTime));
    const [over, setOver] = useState(false);

    const [dimension, setDimension] = useState<number>(window.innerWidth)

    useEffect(() => {
        function handleResize() {
          setDimension(window.innerWidth)
        }
        window.addEventListener('resize', handleResize)
    })

    function getTimer (date = '2023-05-31T00:00:00') {
        const dateEnd = new Date(date);
        const dateStart = new Date();
        let sec = Math.floor((+dateEnd - +dateStart)/1000);
        if (sec < 0) {
            return [0, 0, 0, 0];
        }
        const day = Math.floor(sec/3600/24);
        sec -= day * 3600 * 24;
        const hour = Math.floor(sec/3600);
        sec -= hour * 3600;
        const min = Math.floor(sec/60);
        sec -= min * 60;
        return [day, hour, min, sec];
    }

    const tick = () => {
        if (over) return;
    
        if (d === 0 && h === 0 && m === 0 && s === 0) {
          setOver(true);
        } else if (h === 0 && m === 0 && s === 0) {
          setTime([d - 1, 23, 59, 59]);
        } else if (m === 0 && s === 0) {
            setTime([d, h - 1, 59, 59 ]);
        } else if (s === 0) {
          setTime([d, h, m - 1, 59]);
        } else {
          setTime([d, h, m, s - 1]);
        }
    };

    useEffect(() => {
        const timerID = setInterval(() => tick(), 1000);
        return () => clearInterval(timerID);
    })

    return (
        <div className={styles.countdown}>
            <CountdownItem count={d} text={`${dimension < 1100 ? 'DD' : 'Days'}`}></CountdownItem>
            <h1 className={styles.countdown__colon}>:</h1>
            <CountdownItem count={h} text={`${dimension < 1100 ? 'HH' : 'Hours'}`}></CountdownItem>
            <h1 className={styles.countdown__colon}>:</h1>
            <CountdownItem count={m} text={`${dimension < 1100 ? 'MM' : 'Minutes'}`}></CountdownItem>
            <h1 className={styles.countdown__colon}>:</h1>
            <CountdownItem count={s} text={`${dimension < 1100 ? 'SS' : 'Seconds'}`}></CountdownItem>
        </div>
    )
}

export default Countdown