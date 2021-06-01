import Head from 'next/head'
import Image from 'next/image'
import { CardAbout } from '../components/CardAbout'
import { Imagem } from '../components/Imagem/index'
import styles from '../styles/Home.module.css'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Bruno Angeloti</title>
        <meta name="description" content="Site do Bruno Angeloti Pires" />
      </Head>

      <div className={styles.header}>
        <h3>SOBRE</h3>
        <h3>PROJETOS</h3>
      </div>

      <div className={styles.home}>
        <div className={styles.content}>
          <h1>BRUNO ANGELOTI</h1>
          <h2>Desenvolvedor Frontend e mobile</h2>
        </div>
        <div className={styles.image}>
          <Imagem />
        </div>   
      </div>  

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
