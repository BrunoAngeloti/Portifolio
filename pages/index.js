import Head from 'next/head'
import { useEffect } from 'react'
import styles from '../styles/Home.module.css'

import Aos from 'aos'
import "aos/dist/aos.css"
import { FirstPage } from '../containers/FirstPage'
import { Header } from '../containers/Header'
import { AboutMe } from '../containers/AboutMe'
import { Projects } from '../containers/Projects'
import { ScrollIndicator } from '../components/ScrollIndicator'

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
      <Header />
      <FirstPage />
      <AboutMe />
      <Projects />

      <ScrollIndicator />
    </div>
      
  )
}
