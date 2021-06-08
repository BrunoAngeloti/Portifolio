import styles from '../../styles/components/FirstPage.module.css';
import { Imagem } from '../../components/Imagem/index'

export function FirstPage(){
    return(
        <div className={styles.container}>
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
        </div>
    )
}