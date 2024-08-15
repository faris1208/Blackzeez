import React from 'react'
import styles from "../introduction/styles.module.scss"
import Intro from './intro'
import Collection from './collection'
import Personal from './personal'
import Sharing from './sharing'
import Tracking from './tracking'
import Automatically from './automatically'
import Cookies from './cookies'
import Link from './links'
import Security from './security'
import Deletion from './deletion'
import Children from './children'
import Communications from './communication'
import External from './external'
import Changes from './changes'

export default function Introduction() {
  return (
    <div className={styles.introduction_container}>
      <Intro />
      <Collection />
      <Personal />
      <Sharing />
      <Tracking />
      <Automatically />
      <Cookies />
      <Link />
      <Security />
      <Deletion />
      <Children />
      <Communications />
      <External />
      <Changes />
    </div>
  )
}
