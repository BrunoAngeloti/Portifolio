import Head from 'next/head'
import Image from 'next/image'
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
            <h2>Estudante de engenharia de computação - UFES</h2>
          </div>
          <div className={styles.image}>
            <Imagem />
          </div>   
      </div>
      
      
    </div>
  )
}
