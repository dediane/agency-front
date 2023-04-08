import Link from 'next/link';
import styles from '../styles/navbar.module.css';
import React, {useContext, useState} from "react";
import { Button } from './button';
import Image from 'next/image';

const Navbar = () => {

  return (
    <nav className={styles.navbar}>
        <div className={styles.menuWrapper}>
        <div className={styles.logo}>
            <Image src="/logo.png" width={50} height={50} alt="logo" />
            <a href="/">Jomnio</a> 
        </div>
          <Image src="/menu-icon.svg" width={25} height={25} alt="menu hamburger" className={styles.hamburger} />
          <div>
              <ul>
                  <li><Link className={styles.navLink} href="/solution">Nos Solutions</Link></li>
                  <li><Link className={styles.navLink} href="/tarifs">Nos Tarifs</Link></li>
                  <li><Link className={styles.navLink} href="/tarifs">Financement</Link></li>
                  <li><Link className={styles.navLink} href="/aides">1500€ remboursés </Link></li>
                  <Button text="Je profite de l'offre" className={styles.button}/>
              </ul>
          </div>
        </div>
    </nav>
  );
};

export default Navbar;