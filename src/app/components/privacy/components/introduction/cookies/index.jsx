import React from 'react'
import styles from "../cookies/styles.module.scss"

export default function Cookies() {
  return (
    <div className={styles.tracking_container}>
        <div className={styles.tracking_wrapper}>
            <h3>Use of Cookies</h3>
            <p>The Eze website may use &apos;cookies&apos; to help you personalize your online experience. A cookie is a text file that is placed on your hard disk by a web page server. Cookies cannot be used to run programs or deliver viruses to your computer. Cookies are uniquely assigned to you, and can only be read by a web server in the domain that issued the cookie to you.</p>
            <p>One of the primary purposes of cookies is to provide a convenience feature to save you time. The purpose of a cookie is to tell the Web server that you have returned to a specific page. For example, if you personalize Eze pages, or register with Eze site or services, a cookie helps Eze to recall your specific information on subsequent visits. This simplifies the process of recording your personal information, such as billing addresses, shipping addresses, and so on. When you return to the same Eze website, the information you previously provided can be retrieved, so you can easily use the Eze features that you customized. You have the ability to accept or decline cookies. Most Web browsers automatically accept cookies, but you can usually modify your browser setting to decline cookies if you prefer. If you choose to decline cookies, you may not be able to fully experience the interactive features of the Eze services or websites you visit.</p>
        </div>
    </div>
  )
}
