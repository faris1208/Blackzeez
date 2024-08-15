import React from 'react'
import styles from "../terms/styles.module.scss"
import Hero from './components/hero'
import TermsSidebar from './components/sidebar'
import TermsUse from './components/terms-use'

export default function Terms() {
  return (
    <div className={styles.terms_container}>
        <Hero />
        <div className={styles.terms_wrapper}>
            <TermsSidebar />
            <TermsUse />
        </div>
    </div>
  )
}
