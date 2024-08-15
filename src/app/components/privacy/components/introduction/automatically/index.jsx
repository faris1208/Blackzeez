import React from 'react'
import styles from "../automatically/styles.module.scss"

export default function Automatically() {
  return (
    <div id='automatically-section' className={styles.tracking_container}>
        <div className={styles.tracking_wrapper}>
            <h3>Automatically Collected Information</h3>
            <p>Information about your computer hardware and software may be automatically collected by Eze. This information can include: your IP address, browser type, domain names, access times and referring website addresses. This information is used for the operation of the service, to maintain quality of the service, and to provide general statistics regarding use of the Eze website.</p>
        </div>
    </div>
  )
}
