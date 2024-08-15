import React from 'react'
import styles from "../sidebar/styles.module.scss"

export default function Sidebar() {
  return (
    <div className={styles.sidebar_container}>
        <div className={styles.sidebar_wrapper}>
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
    </div>
  )
}
