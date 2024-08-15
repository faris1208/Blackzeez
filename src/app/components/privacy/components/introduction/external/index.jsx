import React from 'react'
import styles from "../external/styles.module.scss"

export default function External() {
  return (
    <div className={styles.external_container}>
        <div className={styles.external_wrapper}>
            <h3>External Data Storage Sites</h3>
            <p>We may store your data on servers provided by third party hosting vendors with whom we have contracted.</p>
        </div>
    </div>
  )
}
