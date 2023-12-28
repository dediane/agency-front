import React from "react";
import { Card } from "./card";
import styles from "../styles/cards.module.css";
import { Cta } from "./button";


export const Cards = () => {
    return (
        <>
        <section className={styles.container}>
            <h2 className={styles.title}>Nos Solutions</h2>
            <div className={styles.cards}>
                <Card title="Création de site internet" content="Notre agence vous permet de créer un site web moderne et sécurisé à prix mini"/>
                <Card title="Amélioration de votre SEO" content="Nous vous aidons à être plus visible sur internet en optimisant le SEO de votre site"/>
                <Card title="Un site personnalisé" content="Offrez à vos clients une landing page personnalisé qui répond aux attentes de votre secteur"/>
            </div>
            <div className={styles.cards}>
                <Cta text="Contactez-nous dès maintenant"/>
            </div>
        </section>
        </>
    )
}