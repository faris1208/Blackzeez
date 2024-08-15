import React from 'react'
import styles from "../accessing/styles.module.scss"

export default function Accessing() {
  return (
    <div className={styles.accessing_container}>
        <div className={styles.accessing_wrapper}>
            <h3>Accessing the Website and Account Security</h3>
            <p>We reserve the right to withdraw or amend this Website, and any service or material we provide on the Website, in our sole discretion without notice. We will not be liable if for any reason all or any part of the Website is unavailable at any time or for any period.</p>
            <p>You are responsible for:</p>
            <ul>
              <li>Making all arrangements necessary for you to have access to the Website.</li>
              <li>Ensuring that all persons who access the Website through your internet connection are aware of these Terms of Use and comply with them.</li>
            </ul>
            <p>To access the Website or some of the resources it offers, you may be asked to provide certain information. It is a condition of your use of the Website that all the information you provide in any submission through the Website is correct, current, and complete. You agree that all information you provide through this Website or otherwise, including but not limited to through the use of any interactive features on the Website, is governed by our Privacy Policy, and you consent to all actions we take with respect to your information consistent with our Privacy Policy.</p>
        </div>
    </div>
  )
}
