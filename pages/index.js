import Head from 'next/head'
import { useEffect } from 'react'
import styles from '../styles/Home.module.css'

import Aos from 'aos'
import "aos/dist/aos.css"
import { FirstPage } from '../containers/FirstPage'
import { Header } from '../containers/Header'
import { AboutMe } from '../containers/AboutMe'
import { Projects } from '../containers/Projects'
import { ContactMe } from '../containers/ContactMe'
import { ScrollIndicator } from '../components/ScrollIndicator'

import React, { useRef } from 'react'

export default function Home() {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])

  const home = useRef(null);
  const about = useRef(null);
  const projects = useRef(null);
  const contact = useRef(null);
  
  return (
    <div>
      <Head>
        <title>Bruno Angeloti</title>
        <meta name="description" content="Site do Bruno Angeloti Pires" />
      </Head>
      <Header pag0={home} pag1={about} pag2={projects} pag3={contact}/>
      <FirstPage referencia={home}/>
      <AboutMe referencia={about}/>
      <Projects referencia={projects}/>
      <ContactMe referencia={contact}/>

      <ScrollIndicator />
    </div>
      
  )
}
