import React from "react";
import styles from "../styles/pricingcard.module.css";

export const PricingCard = (props :any) => {
    let color;

    switch (props.color) {
        case "pink":
            color = styles.pink;
            break;
        case "red":
            color = styles.accent;
            break;
        case "yellow":
            color = styles.yellow;
            break;
        case "peach":
            color = styles.peach;
            break;
        case "color1":
            color = styles.color1;
            break;
        case "color2":
            color = styles.color2;
            break;
        case "color3":
            color = styles.color3;
            break;
        default:
            color = styles.accent;
            break;
    }
    return (
        <>
            <div className={`${styles.pricingcard} ${color}`}>
                <div className={styles.cardContent}>
                    <h3 className={styles.cardTitle}>{props.title}</h3>
                    <p className={styles.cardText}>{props.content}</p>
                </div>
            </div>
        </>
    );
}