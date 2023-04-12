import styles from '../styles/button.module.css';
import React from "react";

export const Button = (props : any) => {
    return (
        <>
        <button className={styles.button}>{props.text}</button>
        </>
    );
}

export const Button2 = (props : any) => {
    return (
        <>
        <button className={styles.button2}>{props.text}</button>
        </>
    );
}

export const Cta = (props : any) => {
    return (
        <>
        <button className={styles.cta}>{props.text}</button>
        </>
    );
}