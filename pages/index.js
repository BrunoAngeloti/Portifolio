import Head from 'next/head'
import { useEffect } from 'react'
import { CardAbout } from '../components/CardAbout'
import styles from '../styles/Home.module.css'

import Aos from 'aos'
import "aos/dist/aos.css"
import { FirstPage } from '../components/FirstPage'


export default function Home() {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])
  
  return (
    <div>
      <Head>
        <title>Bruno Angeloti</title>
        <meta name="description" content="Site do Bruno Angeloti Pires" />
      </Head>
      <FirstPage />

      {/*<div className={styles.about}>
        <div className={styles.card}>
          <CardAbout />
        </div>
        
        <div className={styles.skills}>
          <h2>LINGUAGENS</h2>
          <h2>TECNOLOGIAS</h2>
        </div>
      </div>*/}

      <span className={styles.mouse}></span>
    </div>
      
  )
}
