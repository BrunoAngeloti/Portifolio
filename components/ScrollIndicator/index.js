import styles from '../../styles/components/ScrollIndicator.module.css'

export function ScrollIndicator(){
    return(
        <div className={styles.container}>
            <span className={styles.mouse}></span>
        </div>
    )
}