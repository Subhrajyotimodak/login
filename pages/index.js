import React from 'react';
import Facebook from '../components/Facebook';
import Google from '../components/Google';
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Google />
      <Facebook />
    </div>
  )
}
