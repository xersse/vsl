
import Button from './button';
import './1.css';

function One() {
  return (
    <>
        <p className='title'>
            <strong>DE 0 À <span>50 000€</span> PAR MOIS AVEC UNE <span>BOUTIQUE E-COMMERCE</span> SUR LES <span>MARCHÉS FRANÇAIS & ÉTRANGERS</span></strong>
        </p>
        <p className='subTitle'>
            <strong>Découvrez les secrets pour créer et optimiser une boutique en ligne qui génère jusqu'à <b>50 000 €</b> de revenus mensuels sans compétences techniques.</strong>
        </p>
        <div className='img'>
            <img src="https://d1yei2z3i6k35z.cloudfront.net/8869040/66b78a7d37ce6_img.png" alt="image qui prouve tous " />
        </div>
        <Button />
    </>
  );
}

export default One;
