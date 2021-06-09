import styles from '../../styles/containers/Header.module.css';

export function Header(){
    return(
        <div className={styles.container}>
            <div className={styles.header}>
                <img data-aos="fade-right" src="logo.svg" alt="logo angeloti" />
                <div className={styles.buttons}>
                    <h3 data-aos="fade-right">SOBRE</h3>
                    <h3 data-aos="fade-right">PROJETOS</h3>
                </div>
            </div>
        </div>
        
    )
}









