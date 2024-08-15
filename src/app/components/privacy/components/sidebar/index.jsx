"use client";
// import React, { useEffect, useState } from 'react'
import Link from "next/link";
import styles from "../sidebar/styles.module.scss";

export default function Sidebar() {
  
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
          <Link href="#intro" onClick={handleScroll}>
            <li>Introduction</li>
          </Link>
          <Link  href="#collection-section" onClick={handleScroll}>
            <li>Collection of your Personal Information</li>
          </Link>
          <Link href="#personal-section" onClick={handleScroll}>
            <li>Use of your Personal Information</li>
          </Link>
          <Link href="#sharing-section" onClick={handleScroll}>
            <li>Sharing Information with Third Parties</li>
          </Link>
          <Link href="#tracking-section" onClick={handleScroll}>
            <li>Tracking User Behavior</li>
          </Link>
          <Link href="#automatically-section"  onClick={handleScroll}>
            <li>Automatically Collected Information</li>
          </Link>
          <Link href="#cookies-section" onClick={handleScroll}>
            <li>Use of Cookies</li>
          </Link>
          <Link href="#section" onClick={handleScroll}>
            <li>Links</li>
          </Link>
          <Link href="#security-section" onClick={handleScroll}>
            <li>Security of your Personal Information</li>
          </Link>
          <Link href="#deletion-section" onClick={handleScroll}>
            <li>Right to Deletion</li>
          </Link>
          <Link href="#child" onClick={handleScroll}>
            <li>Children Under Thirteen</li>
          </Link>
          <Link href="#communication-section" onClick={handleScroll}>
            <li>E-mail Communications</li>
          </Link>
          <Link href="#external-section" onClick={handleScroll}>
            <li>External Data Storage Sites</li>
          </Link>
          <Link href="#changes-section" onClick={handleScroll}>
            <li>Changes to this Statement</li>
          </Link>
        </ul>
      </div>
      {/* <div className="Nav-hamburger">
            <span
              className="Hamburger span"
              onClick={toggleMenu}
              // onClick={() => setMobile((open) => !open)}
            >
              <div className="Hamburger">
                {mobile ?
                 <Image
                 src={menu}
                 alt='menu'
                 width={30}
                 className={styles.menu}
                  />
                 : 
                <Image 
                src={exit}
                alt='exit'
                width={30}
                className={styles.menu}
                />
                 }
              </div>
            </span>
        </div> */}
    </div>
  );
}
