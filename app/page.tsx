"use client";
import React from "react";
import Head from "next/head";
import styles from "./page.module.css";
import ToggleButtons from "./components/ToggleButton";
import StandardImageList from "./components/ImageList";
import Navbar from "./components/Navbar";
import { useState } from "react";
import SimpleSlider from "./components/ImageList";
import Slider from "react-slick";

export default function Home() {
  const [alignment, setAlignment] = useState<string>("Kitchens");
  const handleToggle = (
    event: React.MouseEvent<HTMLElement, MouseEvent>,
    newAlignment: string
  ) => {
    setAlignment(newAlignment);
  };
  return (
    <>
      <section className={styles.main}>
        <div className={styles.text}>
          <span>
            <h1>Mikopa s.r.o</h1>
            <p>Zakázková výroba kuchyní, koupelen, ložnic, obývacích pokojů</p>
          </span>
        </div>
      </section>
      <section className={styles.pageContent}>
        <div id="Services" className={styles.about}>
          <img src="https://img36.rajce.idnes.cz/d3601/18/18275/18275503_6db2af2a0c075fad4b28d35bf0e3d6a4/images/1589966564?ver=0"></img>
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
        <div className={styles.icons}>
          <div className={styles.icon}></div>
          <div className={styles.icon}></div>
          <div className={styles.icon}></div>
          <div className={styles.icon}></div>
        </div>
        <div id="About" className={styles.about}>
          <img src="https://img36.rajce.idnes.cz/d3601/18/18275/18275503_6db2af2a0c075fad4b28d35bf0e3d6a4/images/1575268330?ver=0"></img>
          <div className={styles.container}>
            <div className={styles.aboutText}>
              <h1>O nás</h1>
              <h2>Mikopa</h2>
              <p>
                Jsme česká firma zabývající se zakázovou výrobou kuchyní a
                veškerého interiérového nábytku z lamina, foliovaných MDF desek
                a jiných moderních materiálů
              </p>
              <p>
                Nabízíme realizaci kompletních interiérů kuchyní, koupelen,
                ložnic, obývacích pokojů, včetně kompletní dodávky kancelářského
                nábytku a vybavení obchodů či jiných provozoven. Naše služby
                obsahují jak dovoz tak i montáže.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.images}>
        <ToggleButtons alignment={alignment} onToggle={handleToggle} />
        <StandardImageList alignment={alignment} />
      </section>
    </>
  );
}
