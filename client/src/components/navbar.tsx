import Link from 'next/link';
import styles from '../styles/navbar.module.css';
import React, {useContext, useEffect, useState} from "react";
import { Button } from './button';
import Image from 'next/image';
import { useWindowSize } from "@react-hook/window-size/throttled";

const Navbar = () => {
    const [showNav, setShowNav] = useState(false);

    const handleShowNav = () => {
        setShowNav(!showNav);
    }

    const handleCloseNav = () => {
      if (showNav) {
          setShowNav(false);
      }
  }

    function useWindowSize() {
        const [windowSize, setWindowSize] = useState({
          width: 0,
          height: 0,
        });
      
        useEffect(() => {
          function handleResize() {
            setWindowSize({
              width: window.innerWidth,
              height: window.innerHeight,
            });
          }
          window.addEventListener("resize", handleResize);
          handleResize();
          return () => window.removeEventListener("resize", handleResize);
        }, []); 
        return windowSize;
      }
      const isMobile = useWindowSize().width < 900;

      useEffect(() => {
        const handleScroll = () => {
            handleCloseNav();
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
  return (
    <>
        <nav className={styles.navbar}>
                <div className={styles.logo}>
                    <Image src="/menu-icon.svg" 
                    width={25} 
                    height={25} 
                    alt="menu hamburger" 
                    className={styles.hamburger} 
                    onClick={handleShowNav}/>
                </div>
                {(showNav || !isMobile) ? <div className={styles.menuWrapper}>
                    <ul>
                    <li><Link className={styles.navLink} href="/histoire" onClick={handleCloseNav}>Notre Histoire</Link></li>
                    <li><Link className={styles.navLink} href="/tarifs" onClick={handleCloseNav}>Nos Tarifs</Link></li>
                    <li><Link className={styles.navLink} href="/" onClick={handleCloseNav}>1500€ remboursés </Link></li>
                    <Button text="Nous contactez" className={styles.button}/>
                    </ul>
                </div> : null}
        </nav>
    </>
  );
};

export default Navbar;