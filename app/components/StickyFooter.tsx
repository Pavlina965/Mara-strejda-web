"use client";
import { useState, useEffect } from "react";
import styles from "./StickyFooter.module.css";
import Link from "next/link";

const Footer = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className={styles.footer}>
      <p>
        Copyright © {currentYear}{" "}
        <Link
          href="https://www.linkedin.com/in/pavl%C3%ADna-%C5%A1imonov%C3%A1-2755b4194/"
          target="_blank"
        >
          Pavlína Šimonová
        </Link>
      </p>
    </footer>
  );
};

export default Footer;
