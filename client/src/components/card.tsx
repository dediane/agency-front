import React from "react";
import styles from "../styles/card.module.css";

export const Card = (props : any) => {
    return (
        <>
        <div className={styles.card}>
            <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>Création de site</h3>
                <p className={styles.cardText}>Notre agence vous permet de créer un site web moderne et sécurisé à prix mini</p>
            </div>
        </div>
        </>
    );
}