import React from 'react'
import styles from "../security/styles.module.scss"

export default function Security() {
  return (
    <div id='security-section' className={styles.security_container}>
        <div className={styles.security_wrapper}>
            <h3>Security of your Personal Information</h3>
            <p>Eze secures your personal information from unauthorized access, use, or disclosure. Eze uses the following methods for this purpose:</p>
            <p>-SSL Protocol</p>
            <p>When personal information (such as a credit card number) is transmitted to other websites, it is protected through the use of encryption, such as the Secure Sockets Layer (SSL) protocol. We strive to take appropriate security measures to protect against unauthorized access to or alteration of your personal information. Unfortunately, no data transmission over the Internet or any wireless network can be guaranteed to be 100% secure. As a result, while we strive to protect your personal information, you acknowledge that:</p>
            <ul>
              <li>(a) there are security and privacy limitations inherent to the Internet which are beyond our control; and</li>
              <li>(b) security, integrity, and privacy of any and all information and data exchanged between you and us through this Site cannot be guaranteed.</li>
            </ul>
        </div>
    </div>
  )
}
