import React from 'react'
import styles from "../terms/styles.module.scss"
import TermsSidebar from './components/sidebar'
import TermsUse from './components/terms-use'
import HeroTerms from './components/hero'

export default function Terms() {
  return (
    <div className={styles.terms_container}>
        <HeroTerms />
        <div className={styles.terms_wrapper}>
            <TermsSidebar />
            <TermsUse />
        </div>
    </div>
  )
}
