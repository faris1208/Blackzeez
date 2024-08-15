import React from 'react'
import styles from "../deletion/styles.module.scss"

export default function Deletion() {
  return (
    <div className={styles.deletion_container}>
        <div className={styles.deletion_wrapper}>
            <h3>Right to Deletion</h3>
            <p>Subject to certain exceptions set out below, on receipt of a verifiable request from you, we will:</p>
            <ul>
              <li>Delete your personal information from our records; and</li>
              <li>Direct any service providers to delete your personal information from their records.</li>
            </ul>
            <p>Please note that we may not be able to comply with requests to delete your personal information if it is necessary to:</p>
            <ul>
              <li>Complete the transaction for which the personal information was collected, fulfill the terms of a written warranty or product recall conducted in accordance with federal law, provide a good or service requested by you, or reasonably anticipated within the context of our ongoing business relationship with you, or otherwise perform a contract between you and us;</li>
              <li>Detect security incidents, protect against malicious, deceptive, fraudulent, or illegal activity; or prosecute those responsible for that activity;</li>
              <li>Debug to identify and repair errors that impair existing intended functionality;</li>
              <li>Exercise free speech, ensure the right of another consumer to exercise his or her right of free speech, or exercise another right provided for by law;</li>
              <li>Comply with the California Electronic Communications Privacy Act;</li>
              <li>Engage in public or peer-reviewed scientific, historical, or statistical research in the public interest that adheres to all other applicable ethics and privacy laws, when our deletion of the information is likely to render impossible or seriously impair the achievement of such research, provided we have obtained your informed consent;</li>
              <li>Enable solely internal uses that are reasonably aligned with your expectations based on your relationship with us;</li>
              <li>Comply with an existing legal obligation; or</li>
              <li>Otherwise use your personal information, internally, in a lawful manner that is compatible with the context in which you provided the information.</li>
            </ul>
        </div>
    </div>
  )
}
