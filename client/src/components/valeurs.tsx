import Image from 'next/image';
import styles from '../styles/valeurs.module.css';

const Valeurs = () => {
    return (
      <section className={styles.introduction}>
        <div className={styles.container}>
          <h2 className={styles.subheading}>Nos Valeurs</h2>
          <ul className={styles.valuesList}>
          <li>
            <h2>Intégrité</h2><br/>
            Nous croyons en la transparence, l&apos;honnêteté et le maintien des normes éthiques les plus élevées dans toutes nos interactions.
          </li>
          <li>
            <h2>Durabilité</h2><br/>
            Nous nous engageons à adopter des pratiques durables et responsables, en intégrant des solutions respectueuses de l&apos;environnement dans nos projets.
          </li>
          <li>
            {/* <Image src="/gifs/star.gif" alt="Excellence" width={100} height={100} /> */}
            <h2>Excellence</h2><br/>
            Nous nous efforçons d&apos;atteindre l&apos;excellence dans tout ce que nous faisons, assurant la plus haute qualité de travail et la satisfaction de nos clients.
          </li>
          <li>
            {/* <Image src="/gifs/conf.gif" alt="Collaboration" width={100} height={100} /> */}
            <h2>Collaboration</h2><br/>
            Nous travaillons en étroite collaboration avec nos clients et au sein de notre équipe pour obtenir les meilleurs résultats possibles.
          </li>
          <li>
            {/* <Image src="/gifs/talk.gif" alt="Orientation client" width={100} height={100} /> */}
            <h2>Orientation client</h2><br/>
            Nous priorisons les besoins de nos clients et travaillons assidûment pour dépasser leurs attentes.
          </li>
          <li>
          {/* <Image src="/gifs/plant.gif" alt="Innovation" width={100} height={100} /> */}
          <h2>Innovation</h2><br/>
            Nous encourageons la créativité et recherchons constamment de nouvelles idées pour offrir des solutions de pointe.
          </li>
          </ul>
        </div>
      </section>
    );
  };
  
  export default Valeurs;