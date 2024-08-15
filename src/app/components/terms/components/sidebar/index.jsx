import React from 'react'
import styles from "../sidebar/styles.module.scss"

export default function TermsSidebar() {
  return (
    <div className={styles.sidebar_container}>
        <div className={styles.sidebar_wrapper}>
            <ul>
                <li>Terms of Use</li>
                <li>Modification of these Terms of Use</li>
                <li>Accessing the Website and Account Security</li>
                <li>Intellectual Property Rights</li>
            </ul>
        </div>
    </div>
  )
}
