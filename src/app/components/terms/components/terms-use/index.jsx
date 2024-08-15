import React from 'react'
import styles from "../terms-use/styles.module.scss"
import FirstTerm from './firstterm'
import Modification from './modification'
import Accessing from './accessing'
import Intellectual from './intellectual'

export default function TermsUse() {
  return (
    <div className={styles.termsuse_container}>
        <FirstTerm />
        <Modification />
        <Accessing />
        <Intellectual />
    </div>
  )
}
