import React from 'react'
import { Link } from 'react-router-dom'
import styles from "./Navbar.module.css"
import {AiOutlineShoppingCart} from "react-icons/ai"


const Navbar = () => {
 
  return (
   <div className={styles.main}>
     <div className={styles.navbar_main}>

<Link  className={styles.btn} to="/">Home</Link>
<Link  className={styles.btn} to="/mens">Mens</Link>

<Link  className={styles.btn} to="/womens">Womens</Link>
<Link  className={styles.btn} to="/children">Children</Link>
<Link  className={styles.btn} to="/about">About Us</Link>
<Link  className={styles.btn} to="/contact">Contact Us</Link>
<Link  className={styles.btn} to="/faq">FAQ</Link>
<Link to="/shoppingcart"><AiOutlineShoppingCart className={styles.icon}/></Link>
<Link className={styles.btn} to="/login">
Login </Link>
</div>
   </div>
   
  )
}

export default Navbar