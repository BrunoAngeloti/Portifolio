import styles from '../../styles/components/CardProject.module.css'

export function CardProject(props){
    return(
        <div className={styles.container}>
            <img src={`${props.title}.png`} alt={`imagem ${props.title}`} />
            <h1>{props.title}</h1>
            <p>{props.subtitle}</p>
        </div>
    )
}