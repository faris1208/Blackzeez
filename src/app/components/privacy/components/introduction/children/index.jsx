import React from 'react'
import styles from "../children/styles.module.scss"

export default function Children() {
  return (
    <div className={styles.children_container}>
        <div className={styles.children_wrapper}>
            <h3>Children Under Thirteen</h3>
            <p>Eze does not knowingly collect personally identifiable information from children under the age of thirteen. If you are under the age of thirteen, you must ask your parent or guardian for permission to use this website.</p>
        </div>
    </div>
  )
}
