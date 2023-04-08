import Link from 'next/link';
import styles from '../styles/navbar.module.css';
import React, {useContext, useState} from "react";
import { Bubblegum_Sans } from 'next/font/google';
import { Button } from './button';

const Navbar = () => {

  return (
    <nav className={styles.navbar}>
        <div>
            <a href="/" className={styles.logo}>AVENTURE</a> 
        </div>
        <div>
            <ul>
                <li><Link className={styles.navLink} href="/">Nos Solutions</Link></li>
                <li><Link className={styles.navLink} href="/">Nos Tarifs</Link></li>
                <li><Link className={styles.navLink} href="/">Profitez de 1500€ remboursés</Link></li>
                <Button text="Je profite de l'offre"/>
            </ul>
        </div>
    </nav>
  );
};

export default Navbar;