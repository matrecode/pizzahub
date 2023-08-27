import React from "react";
import styles from "./Heading.module.css"

interface HeadingPropType{
  heading:string
}

const Heading = (props:HeadingPropType) => {
  return (
    <>
    <div className="my-5">
        <h3 className={styles.titleAroundSpan}><span>{props.heading}</span></h3>
    </div>
        
    </>
  );
};

export default Heading;
