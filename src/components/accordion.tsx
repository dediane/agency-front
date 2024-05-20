import { useState } from 'react';
import styles from '../styles/accordion.module.css';

const Accordion = ({ title, content } : {title :string, content :string}) => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleAccordion = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <div className={styles.accordionItem}>
        <div className={styles.accordionTitle} onClick={toggleAccordion}>
          <h2>{title}</h2>
          <span>{isOpen ? '-' : '+'}</span>
        </div>
        {isOpen && (
          <div className={styles.accordionContent2}>
            <p>{content}</p>
          </div>
        )}
      </div>
    );
  };


export const AccordionComponent = () => {
    return (
        <div className={styles.accordionContent}>
           <div>
      <h1>Frequently Asked Questions</h1>
      <Accordion 
        title="Quels services proposez-vous ?"
        content="Nous offrons une gamme de services incluant la conception et le développement de sites web, des solutions e-commerce, l'optimisation SEO, et la maintenance de sites web."
      />
      <Accordion 
        title="Combien de temps faut-il pour créer un site web ?"
        content="Le délai de création d'un site web dépend de la complexité et de l'envergure du projet. En moyenne, un site standard peut prendre entre 4 et 8 semaines, de la consultation initiale au lancement."
      />
      <Accordion 
        title="Quelle est votre structure tarifaire ?"
        content="Nos tarifs varient en fonction des services requis et de la complexité du projet. Nous fournissons des devis personnalisés après avoir compris vos besoins spécifiques. Contactez-nous pour un devis détaillé."
      />
      <Accordion 
        title="Proposez-vous un support après le lancement ?"
        content="Oui, nous proposons divers forfaits de maintenance et de support pour garantir que votre site reste à jour, sécurisé et fonctionne sans problème après son lancement."
      />
      <Accordion 
        title="Pouvez-vous aider à la création de contenu ?"
        content="Absolument ! Nous avons une équipe de rédacteurs professionnels qui peuvent vous aider à créer du contenu de haute qualité pour votre site, y compris la rédaction de textes, des articles de blog, et plus encore."
      />
      <Accordion 
        title="Mon site sera-t-il adapté aux mobiles ?"
        content="Oui, tous les sites que nous concevons et développons sont entièrement responsives, garantissant qu'ils s'affichent et fonctionnent parfaitement sur tous les appareils, y compris les smartphones et les tablettes."
      />
      <Accordion 
        title="Comment puis-je commencer ?"
        content="Pour commencer, contactez-nous via notre site web ou appelez-nous. Nous programmerons une consultation initiale pour discuter des exigences de votre projet et vous fournir un plan et un devis personnalisés."
      />
    </div>
        </div>
    );
}
  
