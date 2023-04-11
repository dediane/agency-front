import React from "react";
import styles from "../styles/card.module.css";

export const Card = (props:any) => {
    return (
        <>
        <div className={styles.card}>
            <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{props.title}</h3>
                <p className={styles.cardText}>{props.content}</p>
            </div>
        </div>
        </>
    );
}