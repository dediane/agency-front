import { PricingCard } from "@/components/pricingcard";
import styles from "@/styles/tarifs.module.css";
import React from "react";

export default function Home() {
    return (
        <>
            <h2 className={styles.title}>Nos Tarifs</h2>
            <div className={styles.container}>
                <PricingCard
                    title="Basic plan"
                    content={[
                        'Création de site web de 5 pages', 
                        'Design réactif', 
                        'Intégration des réseaux sociaux', 
                        'Hébergement de 1 an inclus', 
                        'Support par email pendant 3 mois'
                    ]}
                    color="black"
                    price="990"
                />
                <PricingCard
                    title="Pro plan"
                    content={[
                        'Création de site web de 10 pages', 
                        'Design personnalisé', 
                        'SEO de base',
                        'Intégration des réseaux sociaux', 
                        'Hébergement de 2 an inclus', 
                        'Support par email et téléphone pendant 6 mois'
                    ]}
                    color="black"
                    price="1990"
                />
                <PricingCard
                    title="Premium plan"
                    content={[
                        'Création de site web pages illimitées', 
                        'Design personnalisé & premium',
                        'SEO avancé',
                        'Intégration des réseaux sociaux et CRM', 
                        'Hébergement de 3 an inclus', 
                        'Support premium 24/7 pendant 1 an',
                        'Maintenance mensuelle'
                    ]}
                    color="black"
                    price="3990"
                />
            </div>;
        </>
    )
}