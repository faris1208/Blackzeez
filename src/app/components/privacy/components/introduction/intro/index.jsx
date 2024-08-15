import React from 'react'
import styles from "../intro/styles.module.scss"

export default function Intro() {
  return (
    <div id="section1" className={styles.intro_container}>
        <div className={styles.intro_wrapper}>
            <h3>Introduction</h3>
            <p>Protecting your private information is our priority. This Statement of Privacy applies to <span><a href="http://">www.ezewholesale.com</a></span> and Eze Technologies Inc. and governs data collection and usage. For the purposes of this Privacy Policy, unless otherwise noted, all references to Eze Technologies Inc. include <span><a href="http://">www.ezewholesale.com,</a></span> Eze, Eze, eze.global and exchange.ezewholesale.com. The Eze website is a A B2B Marketplace for electronics allowing buyers & sellers to trade in wholesale quantities with real-time market data. site. By using the Eze website, you consent to the data practices described in this statement.</p>
        </div>
    </div>
  )
}
