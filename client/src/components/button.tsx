import styles from '../styles/button.module.css';
import React from "react";

export const Button = (props : any) => {
    return (
        <button className={styles.button}>{props.text}</button>
    );
}