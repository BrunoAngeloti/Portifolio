import styles from '../../styles/components/CardAbout.module.css';

export function CardAbout(){
    return(
        <div data-aos="fade-right" className={styles.container}>
            <img src={"eu.jpg"}/>
            <h1>BRUNO ANGELOTI PIRES</h1>
            <p>Técnico em automação industrial - SENAI e graduando em engenharia de computação - UFES</p>
            <p>Desenvolvedor mobile e frontend</p>
            
            <div className={styles.socialMidias}>              
                <a href="https://github.com/BrunoAngeloti" target="_blank">
                    <img src="github.svg" alt="logo github" />
                </a>
                <a href="https://www.linkedin.com/in/bruno-angeloti-pires-b903b0168/" target="_blank">
                    <img src="linkedin.svg" alt="logo linkedin" />
                </a>
                <a href="https://www.instagram.com/bruno_angeloti/" target="_blank">
                    <img src="instagram.svg" alt="logo instagram" />
                </a>              
            </div>
        </div>
    )
}