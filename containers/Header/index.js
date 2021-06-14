import { useState } from 'react';
import styles from '../../styles/containers/Header.module.css';

export function Header(){
    const [menu, setMenu] = useState(false);

    function scroll(){
        window.scrollTo({
            top: window.innerHeight,
            behavior: 'smooth',
        });
    }
    function scrollProjects(){
        window.scrollTo({
            top: window.innerHeight*3.5,
            behavior: 'smooth',
        });
    }

    return(
        <div className={styles.container}>
            <div className={styles.header}>
                <img data-aos="fade-right" src="logo.svg" alt="logo angeloti" />
                
                <div onClick={() => {setMenu(!menu)}} className={styles.mobile}>
                    <div className={styles.line1}></div>
                    <div className={styles.line2}></div>
                    <div className={styles.line3}></div>
                </div>
                    
                <div className={styles.buttons}>
                    <h3 onClick={scroll} data-aos="fade-right">SOBRE</h3>
                    <h3 onClick={scrollProjects} data-aos="fade-right">PROJETOS</h3>
                </div>
            </div>
            {menu && 
                <div data-aos="fade-right" data-aos-easing="linear"
                data-aos-duration="1000" className={styles.buttonsMobile}>
                    <h3 onClick={scroll}>SOBRE</h3>
                    <h3 onClick={scrollProjects}>PROJETOS</h3>
                </div>
            }
        </div>  
    )
}









