import React from 'react'
import styles from "../sharing/styles.module.scss"

export default function Sharing() {
  return (
    <div className={styles.sharing_container}>
        <div className={styles.sharing_wrapper}>
            <h3>Sharing Information with Third Parties</h3>
            <b>Eze does not sell, rent or lease its customer lists to third parties.</b>
            <ul>
                <li>First and Last Name</li>
                <li>Mailing Address</li>
                <li>E-mail Address</li>
                <li>Phone Number</li>
                <li>Job Title</li>
                <li>R2 Certification, Tax EIN, Trade References document.</li>
            </ul>
            <p>Eze may, from time to time, contact you on behalf of external business partners about a particular offering that may be of interest to you. In those cases, your unique personally identifiable information (e-mail, name, address, telephone number) is not transferred to the third party. Eze may share data with trusted partners to help perform statistical analysis, send you email or postal mail, provide customer support, or arrange for deliveries. All such third parties are prohibited from using your personal information except to provide these services to Eze, and they are required to maintain the confidentiality of your information. Eze may disclose your personal information, without notice, if required to do so by law or in the good faith belief that such action is necessary to:</p>
            <div className={styles.sharing_wrapper_two}>
                <ul>
                    <li>(a) conform to the edicts of the law or comply with legal process served on Eze or the site;</li>
                    <li>(b) protect and defend the rights or property of Eze; and/or</li>
                    <li>(c) act under exigent circumstances to protect the personal safety of users of Eze, or the public.</li>
                </ul>
            </div>
        </div>
    </div>
  )
}
