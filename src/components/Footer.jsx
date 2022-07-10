import React from 'react'
import { AiFillFacebook,AiFillTwitterCircle,AiFillInstagram,AiFillYoutube,AiFillLinkedin } from 'react-icons/ai';
import styles from "./Footer.module.css"


const Footer = () => {
  return (
    <div className={styles.footer_main_container}>
       <div className={styles.footer_main} >
       <AiFillFacebook/>
        <AiFillTwitterCircle/>
        <AiFillInstagram/>
        <AiFillYoutube/>
        <AiFillLinkedin/>
       </div>
       <div  className={styles.footer_2}>
        <div>
            Terms of service
        </div>
        <div>
            Privacy policies
        </div>
        <div>
            FAQ
        </div>
       </div>
    </div>
  )
}

export default Footer