import styles from '../../styles/containers/Projects.module.css'
import { CardProject } from '../../components/CardProject'

export function Projects(){
    return(
        <div className={styles.container}>
            <div className={styles.projects}> 
                <div className={styles.header}>
                    <h1 data-aos="fade-right">MEUS PROJETOS</h1>
                    <a data-aos="fade-left" target="_blanked" href="https://github.com/BrunoAngeloti?tab=repositories">
                        <button>MAIS PROJETOS</button>
                    </a>
                    
                </div>
                <div className={styles.cards}>
                    <div data-aos="zoom-in">
                        <a href="https://github.com/BrunoAngeloti/Pong" target="_blanked">
                            <CardProject title={"PONG"} subtitle={"Jogo Pong feito em javascript puro. Aplicado uma inteligência artificial para jogar contra. Projeto feito para o grupo de IA do PET engenharia de computação - UFES."}/>  
                        </a>
                    </div>  
                    <div data-aos="zoom-in">
                        <a href="https://github.com/BrunoAngeloti/SuperPets"  target="_blanked">
                            <CardProject title={"SUPERPETS"} subtitle={"O SuperPets é um jogo criado com JavaScript utilizando a biblioteca Phaser 3 com o intuito de servir de referência para as equipes que participarão do PET GameJam."}/> 
                        </a>
                    </div>  
                    <div data-aos="zoom-in">
                        <a href="https://github.com/BrunoAngeloti/NextLevelWeek5" target="_blanked">
                            <CardProject title={"NLW5"} subtitle={"Aplicativo PlantManager feito para a Next Level Week 5. O aplicativo foi feito com a tecnologia react native, utilizando Expo e desenvolvida em um prazo de 1 semana. Design feito no figma"}/>  
                        </a>
                    </div>      
                </div>          
            </div>  
        </div>
    )
}