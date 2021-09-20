import styles from '../../styles/containers/ContactMe.module.css'
import emailjs from "emailjs-com"
import Swal from 'sweetalert2'
import { useState } from 'react';

export function ContactMe(props){
    const [nameValue, setNameValue] = useState("");
    const [emailValue, setEmailValue] = useState("");
    const [messageValue, setMessageValue] = useState("");

    function sendEmail(e){
        e.preventDefault();
        
        emailjs.sendForm(
            "service_vvd1p08", 
            "template_5db77my", 
            e.target,
            "user_eKrDx6OksTnHKuRf2nDsU"
        ).then(res=>{
            const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                  toast.addEventListener('mouseenter', Swal.stopTimer)
                  toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
              })
              
              Toast.fire({
                icon: 'success',
                title: 'Email enviado com sucesso'
              })
              setNameValue("");
              setEmailValue("");
              setMessageValue("");
        }).catch(err=> console.log(err))
    }

    const handleUserInput = (e) => {
        setNameValue(e.target.value);
    };
    const handleEmailInput = (e) => {
        setEmailValue(e.target.value);
    };
    const handleMessageInput = (e) => {
        setMessageValue(e.target.value);
    };

    return(
        <div ref={props.referencia} className={styles.container}>
            <div className={styles.projects}> 
                <div className={styles.header}>
                    <h1 data-aos="fade-right">CONTATO</h1>
                </div>
                <div className={styles.content}>
                    <form onSubmit={sendEmail} className={styles.form}>
                        <div className={styles.inputs} data-aos="zoom-in">
                            <label>NOME</label>
                            <input value={nameValue} onChange={handleUserInput} required type="text" name="name" className="name"/>
                        </div>  
                        <div className={styles.inputs} data-aos="zoom-in">
                            <label>EMAIL</label>
                            <input value={emailValue} onChange={handleEmailInput} required type="email" name="user_email" className="email"/>
                        </div>         
                        <div className={styles.inputs} data-aos="zoom-in">
                            <label>MENSAGEM</label>
                            <textarea value={messageValue} onChange={handleMessageInput} required type="text" name="message" className="message"/>
                        </div>  
                        <div className={styles.inputs} data-aos="zoom-in">
                            <button type="submit">ENVIAR</button>    
                        </div>
                    </form>  
                    <img src="imageContact.svg" alt="imagem de contato" />
                </div>
                        
            </div>  
        </div>
    )
}