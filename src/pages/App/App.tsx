import React from 'react';
import styles from './App.module.scss';
import Footer from '../../components/footer/Footer';
import backPictureLeft from '../../img/back-picture-left.png'
import backPictureRight from '../../img/back-picture-right.png'
import logo from '../../img/logo.svg'
import Title from '../../components/UI/Title/Title';
import Countdown from '../../components/countdown/Countdown';
import arrow from '../../img/arrow-right.png'
import { Link } from 'react-router-dom'

function App() {  
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <img className={styles.backPictureLeft} src={backPictureLeft} alt='background'/>
        <img className={styles.backPictureRight} src={backPictureRight} alt='background'/>
        <Link to={'/'}>
          <img src={logo} alt='logo' className={styles.content__logo}/>
        </Link>
        <Title styles={`${styles.content__title}`}>Under Construction</Title>
        <p className={styles.content__subtitle}>We're making lots of improvements and will be back soon</p>
        <Countdown/>
        <p className={styles.content__label}>Check our event page when you wait:</p>
        <Link to={'https://vivabraslav.by/'} target='_blank' className={styles.content__link}>
          <button className={styles.content__linkBtn}>Go to the event <img src={arrow} alt='arrow'/></button>
        </Link>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
