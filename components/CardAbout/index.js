import styles from '../../styles/components/CardAbout.module.css';

export function CardAbout(){
    return(
        <div className={styles.container}>
            <img src={"eu.jpg"}/>
            <h1>BRUNO ANGELOTI PIRES</h1>
            <p>Técnico em automação industrial - SENAI e graduando em engenharia de computação - UFES</p>
            <p>Desenvolvedor mobile e frontend</p>
            
            <div className={styles.socialMidias}>
                <img src="github.svg" alt="logo github" />
                <img src="linkedin.svg" alt="logo linkedin" />
                <img src="instagram.svg" alt="logo instagram" />
                <img src="email.svg" alt="logo email" />
            </div>
        </div>
    )
}