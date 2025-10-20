import { Link } from 'react-router-dom';
import logo from '@/assets/logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="main-footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-column">
            <img src={logo} alt="Lopotam" className="footer-logo" />
            <p className="footer-description">
              Profesjonalne doradztwo biznesowe dla firm, które chcą się rozwijać.
            </p>
          </div>
          
          <div className="footer-column">
            <h4 className="footer-heading">Nawigacja</h4>
            <nav className="footer-nav">
              <Link to="/">Strona główna</Link>
              <Link to="/o-nas">O nas</Link>
              <Link to="/uslugi">Usługi</Link>
              <Link to="/kontakt">Kontakt</Link>
            </nav>
          </div>
          
          <div className="footer-column">
            <h4 className="footer-heading">Informacje prawne</h4>
            <nav className="footer-nav">
              <Link to="/polityka-prywatnosci">Polityka Prywatności</Link>
              <Link to="/polityka-cookie">Polityka Cookies</Link>
              <Link to="/regulamin">Regulamin</Link>
              <Link to="/polityka-zwrotow">Polityka Zwrotów</Link>
            </nav>
          </div>
          
          <div className="footer-column">
            <h4 className="footer-heading">Godziny pracy</h4>
            <div className="footer-hours">
              <p>Poniedziałek - Piątek</p>
              <p className="hours-time">9:00 - 18:00</p>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-divider"></div>
          <p className="footer-copyright">
            © {currentYear} Lopotam. Wszelkie prawa zastrzeżone.
          </p>
        </div>
      </div>
      
      <style>{`
        .main-footer {
          background-color: var(--color-primary-dark);
          color: var(--color-text-inverse);
          padding: var(--spacing-4xl) 0 var(--spacing-xl);
          margin-top: var(--spacing-4xl);
        }
        
        .footer-content {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: var(--spacing-3xl);
          margin-bottom: var(--spacing-3xl);
        }
        
        .footer-column {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-lg);
        }
        
        .footer-logo {
          height: 40px;
          width: auto;
          filter: brightness(0) invert(1);
        }
        
        .footer-description {
          font-size: var(--font-size-sm);
          line-height: 1.6;
          color: rgba(255, 255, 255, 0.8);
          margin: 0;
        }
        
        .footer-heading {
          font-family: var(--font-sans);
          font-size: var(--font-size-lg);
          font-weight: 600;
          margin-bottom: var(--spacing-sm);
        }
        
        .footer-nav {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-sm);
        }
        
        .footer-nav a {
          font-size: var(--font-size-sm);
          color: rgba(255, 255, 255, 0.8);
          text-decoration: none;
          transition: color var(--transition-fast);
        }
        
        .footer-nav a:hover {
          color: var(--color-text-inverse);
        }
        
        .footer-hours p {
          font-size: var(--font-size-sm);
          color: rgba(255, 255, 255, 0.8);
          margin: 0;
        }
        
        .hours-time {
          font-weight: 600;
          color: var(--color-text-inverse);
          margin-top: var(--spacing-xs);
        }
        
        .footer-bottom {
          padding-top: var(--spacing-xl);
        }
        
        .footer-divider {
          height: 1px;
          background-color: rgba(255, 255, 255, 0.1);
          margin-bottom: var(--spacing-lg);
        }
        
        .footer-copyright {
          text-align: center;
          font-size: var(--font-size-sm);
          color: rgba(255, 255, 255, 0.6);
          margin: 0;
        }
        
        @media (max-width: 768px) {
          .footer-content {
            grid-template-columns: 1fr;
            gap: var(--spacing-2xl);
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
