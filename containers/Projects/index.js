import styles from '../../styles/containers/Projects.module.css'
import { CardProject } from '../../components/CardProject'

export function Projects(){
    return(
        <div className={styles.container}>
            <div  className={styles.projects}>    
                <div data-aos="zoom-in">
                    <CardProject />  
                </div>  
                <div data-aos="zoom-in">
                    <CardProject />  
                </div>  
                <div data-aos="zoom-in">
                    <CardProject />  
                </div>                 
            </div>  
        </div>
    )
}