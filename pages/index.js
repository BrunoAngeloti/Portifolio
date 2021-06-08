import Head from 'next/head'
import Image from 'next/image'
import { useEffect } from 'react'
import { CardAbout } from '../components/CardAbout'
import { Imagem } from '../components/Imagem/index'
import styles from '../styles/Home.module.css'

import Aos from 'aos'
import "aos/dist/aos.css"


export default function Home() {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Bruno Angeloti</title>
        <meta name="description" content="Site do Bruno Angeloti Pires" />
      </Head>

      <div className={styles.header}>
        <img data-aos="fade-right" src="logo.svg" alt="logo angeloti" />
        <div className={styles.buttons}>
          <h3 data-aos="fade-right">SOBRE</h3>
          <h3 data-aos="fade-right">PROJETOS</h3>
        </div>
        
      </div>

      <div className={styles.home}>
        <div data-aos="fade-right" className={styles.content}>
          <h1>BRUNO <div className={styles.sobrenome}>ANGELOTI</div></h1>
          <h2>Desenvolvedor Frontend e mobile</h2>
        </div>
        <div data-aos="fade-right" className={styles.image}>
          <Imagem />
        </div>   
      </div>  

      <div className={styles.about}>
        <div className={styles.card}>
          <CardAbout />
        </div>
        
        <div className={styles.skills}>
          <h2>LINGUAGENS</h2>
          <h2>TECNOLOGIAS</h2>
        </div>
      </div>

      <span className={styles.mouse}></span>
    </div>
      
  )
}
