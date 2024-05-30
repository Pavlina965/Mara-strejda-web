// pages/index.js
import React from 'react';
import Head from 'next/head';
import styles from './page.module.css';
import ToggleButtons from './components/ToggleButton';
import StandardImageList from './components/Pictures';
import Navbar from './components/Navbar';

export default function Home() {
  return (
    <>
    {/* <Navbar /> */}
    
    <div>
      <section className={styles.main}>
        <div className={styles.text}>
          <span>
          <h1>Mikopa s.r.o</h1>
          <p>Zakázková výroba kuchyní, koupelen, ložnic, obývacích pokojů</p>
          </span>
        </div>
      </section>
      <section >
      <div className={styles.about}>
        <img src='https://images.unsplash.com/photo-1551963831-b3b1ca40c98e'></img>
        <div className={styles.container}>
          <div className={styles.aboutText}>
            <h1>Služby</h1>
            <ul>
            <li>Zakázková výroba kuchyní</li>
            <li>Zakázková výroba koupelen</li>
            <li>Zakázková výroba obývacích pokojů</li>
            <li>Zakázková výroba ložnic</li>
            </ul>
        </div>
        </div>
      </div>
      <div className={styles.about}>
        <img src='https://images.unsplash.com/photo-1551963831-b3b1ca40c98e'></img>
        <div className={styles.container}>
          <div className={styles.aboutText}>
            <h1>O nás</h1>
            <h2>Mikopa</h2>
            <p>Jsme česká firma zabývající se zakázovou výrobou kuchyní a veškerého interiérového nábytku z lamina,
               foliovaných MDF desek a jiných moderních materiálů</p>
            <p>Nabízíme realizaci kompletních interiérů kuchyní, koupelen, ložnic, obývacích pokojů,
               včetně kompletní dodávky kancelářského nábytku a vybavení obchodů či jiných provozoven.
                Naše služby obsahují jak dovoz tak i montáže.</p>
          </div>
        </div>
      </div>
      </section>
      <section className={styles.images}>
        <ToggleButtons className={styles.button}/>
        <StandardImageList />
      </section>
    </div>
    </>
  );
}
