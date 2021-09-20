import { useState, useEffect } from 'react';
import styles from '../../styles/containers/Header.module.css';

export function Header(props){
    const [menu, setMenu] = useState(false);
    const [visible, setVisible] = useState(true);
    const [background, setBackground] = useState(false);
    let val;

    function scroll(){
        window.scrollTo({
            top: props.pag1.current.offsetTop,
            behavior: 'smooth'
        })
    }
    function scrollProjects(){
        window.scrollTo({
            top: props.pag2.current.offsetTop,
            behavior: 'smooth'
        })
    }
    function scrollContact(){
        window.scrollTo({
            top: props.pag3.current.offsetTop,
            behavior: 'smooth'
        })
    }
    function scrollHome(){
        window.scrollTo({
            top: props.pag0.current.offsetTop,
            behavior: 'smooth'
        })
    }
    function handleScroll(){
        if(window.pageYOffset > 50){
            setBackground(true);
        }else{
            setBackground(false);
        }
        if(window.pageYOffset > val && window.pageYOffset > 400) {
            setVisible(false);
            
        }else{
            setVisible(true);
        }
        val = window.pageYOffset    
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
    }, [])

    return(
        <div className={styles.container} style={ {top: !visible ? -200 : 0, background: background ? '#719DBD' : 'transparent'}}>
            <div className={styles.header}>
                <img onClick={scrollHome} data-aos="fade-right" src="logo.svg" alt="logo angeloti" />
                
                <div onClick={() => {setMenu(!menu)}} className={styles.mobile}>
                    <div className={styles.line1}></div>
                    <div className={styles.line2}></div>
                    <div className={styles.line3}></div>
                </div>
                    
                <div className={styles.buttons}>
                    <h3 onClick={scroll} data-aos="fade-right">SOBRE</h3>
                    <h3 onClick={scrollProjects} data-aos="fade-right">PROJETOS</h3>
                    <h3 onClick={scrollContact} data-aos="fade-right">CONTATO</h3>
                </div>
            </div>
            {menu && 
                <div className={styles.buttonsMobile}>
                    <h3 onClick={scroll}>SOBRE</h3>
                    <h3 onClick={scrollProjects}>PROJETOS</h3>
                    <h3 onClick={scrollContact}>CONTATO</h3>
                </div>
            }
        </div>  
    )
}









