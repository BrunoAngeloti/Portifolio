import styles from '../../styles/containers/AboutMe.module.css'
import { CardAbout } from '../../components/CardAbout'

export function AboutMe(){
    return(
        <div className={styles.container}> 
            <div className={styles.about}>
                <div className={styles.card}>
                    <CardAbout />
                </div>
                
                <div className={styles.skills}>
                    <h2 data-aos="zoom-in">LINGUAGENS</h2>
                    <div data-aos="zoom-in" className={styles.icons}>
                        <div className={styles.square}>
                            <img src="devIcons/javascript-plain.svg" alt="icone javascript" />
                            <h4>javascript</h4>
                        </div>
                        <div className={styles.square}>
                            <img src="devIcons/c-plain.svg" alt="icone c" />
                            <h4>c</h4>
                        </div>
                        <div className={styles.square}>
                            <img src="devIcons/cplusplus-plain.svg" alt="icone cplusplus" />
                            <h4>c++</h4>
                        </div>
                        <div className={styles.square}>
                            <img src="devIcons/java-plain.svg" alt="icone java" />
                            <h4>java</h4>
                        </div>
                        <div className={styles.square}>
                            <img src="devIcons/python-plain.svg" alt="icone python" />  
                            <h4>python</h4>
                        </div>
                        
                        
                        
                    </div>
                    
                    <h2 data-aos="zoom-in">TECNOLOGIAS</h2>
                    <div data-aos="zoom-in" className={styles.icons}>
                        <div className={styles.square}>
                            <img src="devIcons/figma-plain.svg" alt="icone figma" />
                            <h4>figma</h4>
                        </div>
                        <div className={styles.square}>
                            <img src="devIcons/git-plain.svg" alt="icone git" />
                            <h4>git</h4>
                        </div>
                        <div className={styles.square}>
                            <img src="devIcons/html5-plain.svg" alt="icone html5" />
                            <h4>html5</h4>
                        </div>
                        <div className={styles.square}>
                            <img src="devIcons/css3-plain.svg" alt="icone css3" />
                            <h4>css3</h4>
                        </div>
                        <div className={styles.square}>
                            <img src="devIcons/react-plain.svg" alt="icone react" />
                            <h4>react</h4>
                        </div>
                        <div className={styles.square}>
                            <img src="devIcons/nextjs-original.svg" alt="icone react" />
                            <h4>nextjs</h4>
                        </div>
                        
                        
                    </div>
                </div>
            </div>      
           
        </div>
    )
}
