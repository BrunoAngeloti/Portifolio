import styles from '../../styles/components/IconDev.module.css'
import { useState } from 'react'

export function IconDev(props){
    const [iconActive, setIconActive] = useState(false);
    function entra(){
        setIconActive(true)
    }
    function sai(){
        setIconActive(false)
    }

    return(
        <div className={styles.square} onMouseEnter={entra} onMouseLeave={sai}>
            {
                iconActive 
                ? 
                    <img src={`devIcons/${props.name}-original.svg`} alt={`icone ${props.name}`} /> 
                : 
                    <img src={`devIcons/${props.name}-plain.svg`} alt={`icone ${props.name}`} />
            }
                            
            <h4>{props.name}</h4>
        </div>
    )
}