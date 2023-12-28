import React from 'react';
import styles from '../styles/hero.module.css';
import Typewriter from 'typewriter-effect';
import { Button, Button2 } from './button';
import { Decoration } from './decoration';
import Link from 'next/link';

export const Hero = () => {
    const LINK = 'https://les-aides.fr/aide/Vllf3w/region-ile-de-france/cheque-numerique-pour-un-commerce-connecte.html';
    return (
        <section className={styles.animate}>
            <Decoration />
            <div className={styles.hero}>
                <div className={styles.heroContent}>
                    <div className={styles.content}>
                        <h1>Créez votre site internet
                        <br/>Boostez votre 
                        <Typewriter options={{
                            autoStart: true,
                            loop: true,
                            wrapperClassName: styles.typewriter,
                            cursorClassName: styles.typewriter, }}
                            onInit={(typewriter) => {
                                typewriter.typeString('visibilité en ligne')
                                .pauseFor(2500)
                                .deleteAll()
                                typewriter.typeString("chiffre d'affaires")
                                .pauseFor(2500)
                                .deleteAll()
                                typewriter.typeString('nombre de clients')
                                .pauseFor(2500)
                                .deleteAll()
                                typewriter.typeString('réputation')
                                .pauseFor(2500)
                                .deleteAll()
                                .start();
                            }}/>
                            </h1>
                    </div>
                    <h2 className={styles.heroSubtitle}>
                       Profitez des chèques numériques jusqu'à <b>1500€</b> pour vous digitaliser.
                       <br/>Nous facilitons votre <b>transition numérique</b>.
                    </h2>
                    <Link href="/contact">
                        <Button text="Nous contactez" className={styles.button}/>
                    </Link>
                    <Link href={LINK} target="_blank" rel="noopener noreferrer">
                        <Button2 text="En savoir plus"  className={styles.button}/>
                    </Link>
                </div>
            </div>
        </section>
    );
};

