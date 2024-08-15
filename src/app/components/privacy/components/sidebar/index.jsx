// "use client"
// import React, { useEffect, useState } from 'react'
import styles from "../sidebar/styles.module.scss"
// import Image from 'next/image';
// import menu from "../../../../../../public/menu.svg"
// import exit from "../../../../../../public/exxit.svg"


export default function Sidebar() {

//   const [mobile, setMobile] = useState(true);

//   const toggleMenu = () => {
//     setMobile((open) => !open)
// }

// useEffect(() => {
//   const scroll = () => {
//     if (window.scroll) {
//       setMobile(mobile);
//     }
//   };

//   window.addEventListener("scroll", scroll);
// }, []);

  return (
    <div className={styles.sidebar_container}>
        <div  className={styles.sidebar_wrapper}>
            <ul>
                <li>Introduction</li>
                <li>Collection of your Personal Information</li>
                <li>Use of your Personal Information</li>
                <li>Sharing Information with Third Parties</li>
                <li>Tracking User Behavior</li>
                <li>Automatically Collected Information</li>
                <li>Use of Cookies</li>
                <li>Links</li>
                <li>Security of your Personal Information</li>
                <li>Right to Deletion</li>
                <li>Children Under Thirteen</li>
                <li>E-mail Communications</li>
                <li>External Data Storage Sites</li>
                <li>Changes to this Statement</li>
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
  )
}
