import styles from '../styles/footer.module.css';

const Footer = () => {
    return (
      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.column}>
            <h3 className={styles.heading}>About Us</h3>
            <hr className={styles.divider}/>
            <p className={styles.text}>We are a leading web agency providing top-notch web solutions.</p>
            <p className={styles.text}>Our mission is to deliver high-quality and innovative web experiences.</p>
          </div>
          <div className={styles.column}>
            <h3 className={styles.heading}>Services</h3>
            <hr className={styles.divider}/>
            <ul className={styles.list}>
              <li className={styles.listItem}><a href="/web-design" className={styles.link}>Web Design</a></li>
              <li className={styles.listItem}><a href="/web-development" className={styles.link}>Web Development</a></li>
              <li className={styles.listItem}><a href="/seo" className={styles.link}>SEO</a></li>
              <li className={styles.listItem}><a href="/marketing" className={styles.link}>Digital Marketing</a></li>
            </ul>
          </div>
          <div className={styles.column}>
            <h3 className={styles.heading}>Contact Us</h3>
            <hr className={styles.divider}/>
            <p className={styles.text}>Email: info@webagency.com</p>
            <p className={styles.text}>Phone: +123 456 7890</p>
            <p className={styles.text}>Address: 123 Web Agency St., City, Country</p>
          </div>
        </div>
        <div className={styles.bottomBar}>
          <p className={styles.bottomText}>© 2024 Web Agency. All rights reserved.</p>
          <nav className={styles.nav}>
            <a href="/privacy-policy" className={styles.link}>Privacy Policy</a>
            <a href="/terms-of-service" className={styles.link}>Terms of Service</a>
          </nav>
        </div>
      </footer>
    );
  };
  
  export default Footer;