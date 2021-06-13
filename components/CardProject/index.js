import styles from '../../styles/components/CardProject.module.css'

export function CardProject(){
    return(
        <div className={styles.container}>
            <img src="pong.png" alt="iamgem pong" />
            <h1>PONG</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley </p>
        </div>
    )
}