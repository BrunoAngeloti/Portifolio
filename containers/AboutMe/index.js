import styles from '../../styles/containers/AboutMe.module.css'
import { CardAbout } from '../../components/CardAbout'
import { IconDev } from '../../components/IconDev';

export function AboutMe(props){
    return(
        <div ref={props.referencia} className={styles.container}> 
            <div className={styles.about}>
                <div className={styles.card}>
                    <CardAbout />
                </div>
                
                <div className={styles.skills}>
                    <h2 data-aos="zoom-in">LINGUAGENS</h2>
                    <div data-aos="zoom-in" className={styles.icons}>
                        <IconDev name={"javascript"}/>
                        <IconDev name={"c"}/>
                        <IconDev name={"c++"}/>
                        <IconDev name={"java"}/>
                        <IconDev name={"python"}/>       
                    </div>
                    
                    <h2 data-aos="zoom-in">TECNOLOGIAS</h2>
                    <div data-aos="zoom-in" className={styles.icons}>
                        <IconDev name={"figma"}/>
                        <IconDev name={"git"}/>
                        <IconDev name={"html5"}/>
                        <IconDev name={"css3"}/>
                        <IconDev name={"react"}/>
                        <IconDev name={"nextjs"}/>  
                    </div>
                </div>
            </div>      
           
        </div>
    )
}
