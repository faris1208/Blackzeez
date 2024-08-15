"use client"
import React from 'react'
import styles from "../tracking/styles.module.scss"

export default function Tracking() {

  return (
    <div id='tracking-section' className={styles.tracking_container}>
        <div className={styles.tracking_wrapper}>
            <h3>Tracking User Behavior</h3>
            <p>Eze may keep track of the websites and pages our users visit within Eze, in order to determine what Eze services are the most popular. This data is used to deliver customized content and advertising within Eze to customers whose behavior indicates that they are interested in a particular subject area.</p>
        </div>
    </div>
  )
}
