import React from "react";
import styles from "../styles/pricingcard.module.css";
import { Button, Button2, Buttonblack } from "./button";

export const PricingCard = (props: any) => {
    const content = props.content.map((item: any, index: number) => {
        return <li key={index}>✔️ {item}</li>;
    }
    );
    let color;

    switch (props.color) {
        case "red":
            color = styles.accent;
            break;
        case "black":
            color = styles.black;
            break;
    }

    return (
        <>
            <div className={`${styles.pricingcard} ${color}`}>
                <div className={styles.cardContent}>
                    <div className={styles.pricesection}>
                        <p>à partir de</p>
                        <div className={styles.row}>
                            <p className={styles.price}>{props.price}</p>
                        <p className={styles.dollar}>€</p>
                        <p>HT</p>
                            {/* <p className={styles.pricedetail}>{props.pricedetail}</p> */}
                        </div>
                    </div>
                    <h3 className={styles.cardTitle}>{props.title}</h3>
                    <ul>
                        {content}
                    </ul>
                    {/* <p className={styles.cardText}>{props.content}</p> */}
                </div>
                <div className={styles.buttondiv} >
                    <Buttonblack text="Commander" />
                </div>
            </div>
        </>
    );
}