import React from "react";
import styles from "../styles/card.module.css";

export const Card = (props : any) => {
    return (
        <>
        <div className={styles.card}>
            <div className={styles.cardHeader}>
                <h3>{props.title}</h3>
            </div>
            <div className={styles.cardBody}>
                <p>{props.text}</p>
            </div>
        </div>
        </>
    );
}