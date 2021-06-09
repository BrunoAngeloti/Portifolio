import styles from '../../styles/containers/FirstPage.module.css';
import { Imagem } from '../../components/Imagem/index'

export function FirstPage(){
    return(
        <div className={styles.container}>
            <div className={styles.home}>
                <div data-aos="fade-right" className={styles.content}>
                    <h1>BRUNO ANGELOTI</h1>
                    <h2>Desenvolvedor Frontend e mobile</h2>
                </div>
                <div data-aos="fade-right" className={styles.image}>
                    <Imagem />
                </div>   
            </div>
        </div>
    )
}