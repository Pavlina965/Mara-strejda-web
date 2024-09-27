"use client";
import React, { Suspense } from "react";
import styles from "./page.module.css";
import ToggleButtons from "./components/ToggleButton";
import StandardImageList from "./components/ImageList";
import { useState } from "react";
import MapLocation from "./contact/location";
import ContactCard from "./contact/ContactCard";
import Link from "next/link";
import { Box, Grid } from "@mui/material";

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
      <section>
        <div className={styles.gridContainer}>
          <Grid container spacing={{ xs: 1, md: 2 }}>
            <Grid item xs={12} sm={6} md={3}>
              <Box
                sx={{
                  textAlign: "center",
                  width: "auto",
                  background: "#f6f6f6",
                  padding: "10px",
                }}
              >
                <h1>Zakázková výroba nábytku</h1>
                <p>
                  Rádi pro vás vytvoříme kuchynské linky, vestavěné skříně do
                  pokojů, obývací stěny a jiné další interiérové vybavení
                  domácností{" "}
                </p>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Box
                sx={{
                  textAlign: "center",
                  width: "auto",

                  background: "#f6f6f6",

                  padding: "10px",
                }}
              >
                <h1>Zakázková výroba nábytku</h1>
                <p>
                  Rádi pro vás vytvoříme kuchynské linky, vestavěné skříně do
                  pokojů, obývací stěny a jiné další interiérové vybavení
                  domácností{" "}
                </p>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Box
                sx={{
                  textAlign: "center",
                  width: "auto",

                  background: "#f6f6f6",
                  padding: "10px",
                }}
              >
                <h1>Zakázková výroba nábytku</h1>
                <p>
                  Rádi pro vás vytvoříme kuchynské linky, vestavěné skříně do
                  pokojů, obývací stěny a jiné další interiérové vybavení
                  domácností{" "}
                </p>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Box
                sx={{
                  textAlign: "center",
                  width: "auto",

                  background: "#f6f6f6",
                  padding: "10px",
                }}
              >
                <h1>Zakázková výroba nábytku</h1>
                <p>
                  Rádi pro vás vytvoříme kuchynské linky, vestavěné skříně do
                  pokojů, obývací stěny a jiné další interiérové vybavení
                  domácností{" "}
                </p>
              </Box>
            </Grid>
          </Grid>
        </div>

        <div className={styles.aboutText}>
          <h1>O nás</h1>
          <h2>Mikopa</h2>
          <p>
            Jsme česká firma zabývající se zakázovou výrobou kuchyní a veškerého
            interiérového nábytku z lamina, foliovaných MDF desek a jiných
            moderních materiálů
          </p>
          <p>
            Nabízíme realizaci kompletních interiérů kuchyní, koupelen, ložnic,
            obývacích pokojů, včetně kompletní dodávky kancelářského nábytku a
            vybavení obchodů či jiných provozoven. Naše služby obsahují jak
            dovoz tak i montáže.
          </p>
        </div>
      </section>
      <section className={styles.images}>
        <ToggleButtons alignment={alignment} onToggle={handleToggle} />
        <div style={{ width: "100%" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              background: "#f6f6f6",
            }}
          >
            <StandardImageList alignment={alignment} />
          </div>
          <p className={styles.linkText}>
            Více fotografií naleznete&nbsp;
            <Link href={"https://mikopa.rajce.idnes.cz/"} target="_blank">
              zde
            </Link>
          </p>
        </div>
      </section>
      <section>
        <div></div>
      </section>
      <section className={styles.contact}>
        <div className={styles.contact} id="Contact">
          <h1>Kontaktujte nás</h1>
          <ContactCard />
        </div>
        <div style={{ marginBottom: "10px" }} className={styles.contact}>
          <h1>Kde nás najdete</h1>
          <MapLocation />
        </div>
      </section>
      {/* <section className={styles.pageContent}>
        <div id="About" className={styles.about}>
        <img src="https://img36.rajce.idnes.cz/d3601/18/18275/18275503_6db2af2a0c075fad4b28d35bf0e3d6a4/images/1575268330?ver=0"></img>
        <div className={styles.container}>
        
          </div>
        </div>
        <div className={styles.icons}>
          <div className={styles.icon}>
            <p>Zakázková výroba kuchyní</p>
          </div>
          <div className={styles.icon}>
            <p>Zakázková výroba koupelen</p>
          </div>
          <div className={styles.icon}>Zakázková výroba obývacích pokojů</div>
          <div className={styles.icon}>
            <p>Zakázková výroba ložnic</p>
          </div>
        </div>
        <div className={styles.about}>
          <img src="https://img36.rajce.idnes.cz/d3601/18/18275/18275503_6db2af2a0c075fad4b28d35bf0e3d6a4/images/1589966564?ver=0"></img>
          <div className={styles.container}>
            <section className={styles.contact}>
              <div
                className={styles.contact}
                id="Contact"
              >
                <h1>Kontaktujte nás</h1>
                <ContactCard />
              </div>
            </section>
          </div>
        </div>
      </section> */}
    </>
  );
}
