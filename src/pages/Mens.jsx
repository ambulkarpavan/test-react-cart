import React from 'react'
import { Link } from 'react-router-dom'
import men from "../../src/data/men.json"
import styles from "./Mens.module.css"

console.log(men)
const Mens = () => {

 
  return (
    <div>
    <div><h2>Mens</h2></div>
    <div className={styles.men_main}>
      
      {men.map((item)  => (
      
        <div key={item.id}  className={styles.men_main_1} > 
        <div className={styles.men_main_1a} > <img src={item.image} alt="men"/></div>
        <div>
        <h3>Category: {item.name}</h3>
        Price : Rs.{item.price}
        </div>
        <Link to={`/mens/${item.id}`}> More details  </Link>
        </div>
     
      ))}

</div>
    </div>
  )
}

export default Mens