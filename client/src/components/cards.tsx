import React from "react";
import { Card } from "./card";
import styles from "../styles/cards.module.css";


export const Cards = () => {
    return (
        <>
        <div className={styles.cards}>
            <Card />
            <Card />
            <Card />
        </div>
        </>
    )
}