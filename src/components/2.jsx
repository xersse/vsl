
import './2.css';

function Footer() {
  return (
    <>
        <p className='title2'>
            <strong>Ce que tu vas apprendre gratuitement:</strong>
        </p>
        <div className='containerDiv'>
            <div>
                <img src="https://d1yei2z3i6k35z.cloudfront.net/207491/66ad65e28fd57_wired-outline-1359-online-shopping.gif" alt="gif cart sur ordinateur" />
                <p>
                    <b>Créez une boutique en ligne performante</b>
                </p>
                <p>Suivez des conseils pratiques pour mettre en place et optimiser votre boutique sans aucune expérience technique.</p>
            </div>
            <div>
                <img src="https://d1yei2z3i6k35z.cloudfront.net/207491/66ad6729cef1c_wired-outline-300-coins-euro.gif" alt="gif plein d'argent" />
                <p>
                    <b>Stratégies de conversion éprouvées</b>
                </p>
                <p>Découvrez les techniques qui transforment les visiteurs en clients fidèles.</p>
            </div>
            <div>
                <img src="https://d1yei2z3i6k35z.cloudfront.net/207491/66ad674d679e6_wired-outline-976-web-analytics.gif" alt="gif graphique exponentiel" />
                <p>
                    <b>Augmentez vos ventes de manière exponentielle</b>
                </p>
                <p>Des stratégies marketing puissantes pour booster vos revenus.</p>
            </div>
            <div>
                <img src="https://d1yei2z3i6k35z.cloudfront.net/207491/66ad675c2993b_wired-outline-1029-service.gif" alt="gif paramétrage" />
                <p>
                    <b>Accès à des outils exclusifs</b>
                </p>
                <p>Profitez de ressources et d’outils professionnels pour simplifier votre gestion de boutique.</p>
            </div>
        </div>
        <div className='button'>
            <button>
                <strong>ACCÉDER À NOTRE MÉTHODE GRATUITEMENT</strong>
            </button>
        </div>
    </>
  );
}

export default Footer;
