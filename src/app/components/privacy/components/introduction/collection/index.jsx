import React from 'react'
import styles from "../collection/styles.module.scss"

export default function Collection() {
  return (
    <div id="collection-section" className={styles.collection_container}>
        <div className={styles.collection_wrapper}>
            <h3>Collection of your Personal Information</h3>
            <p>In order to better provide you with products and services offered on our Site, Eze may collect personally identifiable information, such as your:</p>
            <ul>
                <li>First and Last Name</li>
                <li>Mailing Address</li>
                <li>E-mail Address</li>
                <li>Phone Number</li>
                <li>Job Title</li>
                <li>R2 Certification, Tax EIN, Trade References If you purchase Eze&apos;s products and services, we collect billing and credit card information.</li>
            </ul>
            <p>This information is used to complete the purchase transaction.</p>
            <div className={styles.collection_wrapper_two}>
                <p>We do not collect any personal information about you unless you voluntarily provide it to us. However, you may be required to provide certain personal information to us when you elect to use certain products or services available on the Site. These may include:</p>
                <ul>
                    <li>(a) registering for an account on our Site;</li>
                    <li>(b) entering a sweepstakes or contest sponsored by us or one of our partners;</li>
                    <li>(c) signing up for special offers from selected third parties;</li>
                    <li>(d) sending us an email message;</li>
                    <li>(e) submitting your credit card or other payment information when ordering and purchasing products and services on our Site.</li>
                </ul>
                <p>To wit, we will use your information for, but not limited to, communicating with you in relation to services and/or products you have requested from us. We also may gather additional personal or non-personal information in the future.</p>
            </div>
        </div>
    </div>
  )
}
