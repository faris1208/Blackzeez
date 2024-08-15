"use client"
import React from "react";
import styles from "../sidebar/styles.module.scss";
import Link from "next/link";

export default function TermsSidebar() {

  const handleScroll = (e) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute("href");
    const targetElement = document.querySelector(href);
    console.log('Scrolling to:', href);
    console.log('Target element:', targetElement);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }else {
      console.error(`Element with ID ${href} not found`);
    }
  };

  return (
    <div className={styles.sidebar_container}>
      <div className={styles.sidebar_wrapper}>
        <ul>
          <Link href={"#terms-use"} onClick={handleScroll}>
            <li>Terms of Use</li>
          </Link>
          <Link href={"#modification-use"} onClick={handleScroll}>
            <li>Modification of these Terms of Use</li>
          </Link>
          <Link href={"#accessing-use"} onClick={handleScroll}>
            <li>Accessing the Website and Account Security</li>
          </Link>
          <Link href={"#intellectual-use"} onClick={handleScroll}>
            <li>Intellectual Property Rights</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}
