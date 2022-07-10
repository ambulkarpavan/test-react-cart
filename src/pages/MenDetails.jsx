import React from 'react'
import {  Link, useParams } from 'react-router-dom';
import men from "../../src/data/men.json"
import styles from "./MensDetails.module.css"

const MenDetails = () => {
    const {id} = useParams();
   // console.log(id)
    let obj=men[id]
   // console.log("datanew" ,obj )

  
  return (
    <div>
        <h2>MenDetails</h2>
        <h4>Product Id: {obj.id}</h4>
        <div className={styles.det_container}>
            <div>
                <img src={obj.image} alt="single_image" />
            </div>
            <div className={styles.det_container2}>
                <h3>Category:{obj.name}</h3>
                Price: Rs.{obj.price}
            </div>
            <div>
                <button  className={styles.det_container_btn} >Add To Cart</button>
            </div>
        </div>
        <br />
        <br />
        <div>
        <Link to="/mens"> Go to Back...</Link>
        </div>
    </div>
  )
}

export default MenDetails