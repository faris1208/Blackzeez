import React from 'react'
import styles from "../privacy/styles.module.scss"
import Hero from './components/hero'
import Sidebar from './components/sidebar'
import Introduction from './components/introduction'

export default function Privacy() {
  return (
    <div className={styles.privacy_container}>
        <Hero />
        <div className={styles.privacy_wrapper}>
            <Sidebar />
            <Introduction />
        </div>
    </div>
  )
}
