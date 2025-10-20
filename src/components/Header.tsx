import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '@/assets/logo.png';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>
      <div className="top-bar">
        <div className="container">
          <div className="top-bar-content">
            <span className="top-bar-text">Pon - Pt: 9:00 - 18:00</span>
          </div>
        </div>
      </div>
      
      <header className="main-header">
        <div className="container">
          <div className="header-content">
            <Link to="/" className="logo-link">
              <img src={logo} alt="Lopotam" className="logo-image" />
            </Link>
            
            <button 
              className="mobile-menu-toggle"
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
            >
              <span className={`hamburger ${mobileMenuOpen ? 'active' : ''}`}>
                <span></span>
                <span></span>
                <span></span>
              </span>
            </button>
            
            <nav className={`main-nav ${mobileMenuOpen ? 'mobile-open' : ''}`}>
              <Link to="/" onClick={() => setMobileMenuOpen(false)}>Strona główna</Link>
              <Link to="/o-nas" onClick={() => setMobileMenuOpen(false)}>O nas</Link>
              <Link to="/uslugi" onClick={() => setMobileMenuOpen(false)}>Usługi</Link>
              <Link to="/kontakt" onClick={() => setMobileMenuOpen(false)}>Kontakt</Link>
            </nav>
          </div>
        </div>
      </header>
      
      <style>{`
        .top-bar {
          background-color: var(--color-primary-dark);
          color: var(--color-text-inverse);
          height: var(--topbar-height);
          display: flex;
          align-items: center;
        }
        
        .top-bar-content {
          display: flex;
          justify-content: flex-end;
          align-items: center;
        }
        
        .top-bar-text {
          font-size: var(--font-size-sm);
          font-weight: 500;
        }
        
        .main-header {
          background-color: var(--color-surface);
          border-bottom: 1px solid var(--color-border-light);
          height: var(--header-height);
          position: sticky;
          top: 0;
          z-index: 100;
          box-shadow: var(--shadow-sm);
        }
        
        .header-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          height: 100%;
        }
        
        .logo-link {
          display: flex;
          align-items: center;
        }
        
        .logo-image {
          height: 48px;
          width: auto;
        }
        
        .main-nav {
          display: flex;
          gap: var(--spacing-xl);
          align-items: center;
        }
        
        .main-nav a {
          font-family: var(--font-sans);
          font-size: var(--font-size-base);
          font-weight: 600;
          color: var(--color-text-primary);
          text-decoration: none;
          transition: color var(--transition-fast);
          position: relative;
        }
        
        .main-nav a::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 2px;
          background-color: var(--color-primary);
          transition: width var(--transition-base);
        }
        
        .main-nav a:hover {
          color: var(--color-primary);
        }
        
        .main-nav a:hover::after {
          width: 100%;
        }
        
        .mobile-menu-toggle {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
          padding: var(--spacing-xs);
        }
        
        .hamburger {
          display: flex;
          flex-direction: column;
          gap: 5px;
          width: 28px;
        }
        
        .hamburger span {
          display: block;
          height: 3px;
          background-color: var(--color-primary);
          border-radius: 2px;
          transition: all var(--transition-base);
        }
        
        .hamburger.active span:nth-child(1) {
          transform: rotate(45deg) translate(8px, 8px);
        }
        
        .hamburger.active span:nth-child(2) {
          opacity: 0;
        }
        
        .hamburger.active span:nth-child(3) {
          transform: rotate(-45deg) translate(7px, -7px);
        }
        
        @media (max-width: 768px) {
          .mobile-menu-toggle {
            display: block;
          }
          
          .main-nav {
            position: fixed;
            top: calc(var(--topbar-height) + var(--header-height));
            left: 0;
            right: 0;
            bottom: 0;
            flex-direction: column;
            background-color: var(--color-surface);
            padding: var(--spacing-2xl);
            gap: var(--spacing-lg);
            transform: translateX(100%);
            transition: transform var(--transition-base);
            box-shadow: var(--shadow-lg);
          }
          
          .main-nav.mobile-open {
            transform: translateX(0);
          }
          
          .main-nav a {
            font-size: var(--font-size-lg);
          }
        }
      `}</style>
    </>
  );
};

export default Header;
