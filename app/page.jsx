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
          <p>Realizace kompletních interiérů kuchyní, koupelen, ložnic, obývacích pokojů</p>
          </span>
        </div>
      </section>
      <section className={styles.more}>
        <ToggleButtons className={styles.button}/>
        <StandardImageList />
      </section>
    </div>
    </>
  );
}
