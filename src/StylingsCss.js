import React from 'react'
import "./Stylingcss.css"
import stylemodule from "./StyleComp.module.css";

    const styles = {
        buttonstyles:{
            backgroundColor: "#4CAF50", /* Green */
            border: "none",
            color: "white",
            padding: "15px 32px",
            textAlign: "center",
            textDecoration: "none",
            display: "inline-block",
            fontSize: "16px",
            cursor:"pointer"
        }
    }

function StylingsCss() {
  return (
    <div>
        {/* 
            stylings in CSS
                - Inline
                - Internal
                - External 
                - Module CSS
        */}
        <h2 style={{
            color:"red",
            textAlign:"center",
            fontSize:"30px"
            }}>StylingsCss
        </h2>

            {/* internal stylings */}
            <button style={styles.buttonstyles}>Add to Cart</button>

        {/* External css */}
        <button className='btn'>payment</button>


        {/* Module Stylings  */}
        <h2 className={stylemodule.modulehead}>Module Stylings</h2>
    </div>
  )
}

export default StylingsCss