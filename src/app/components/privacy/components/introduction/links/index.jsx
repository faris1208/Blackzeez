import React from 'react'
import styles from "../links/styles.module.scss"

export default function Link() {
  return (
    <div className={styles.tracking_container}>
        <div className={styles.tracking_wrapper}>
            <h3>Links</h3>
            <p>This website contains links to other sites. Please be aware that we are not responsible for the content or privacy practices of such other sites. We encourage our users to be aware when they leave our site and to read the privacy statements of any other site that collects personally identifiable information.</p>
        </div>
    </div>
  )
}
