import { useState, useEffect } from 'react';

const CMPBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const saveConsent = (value: 'accepted' | 'rejected' | 'custom') => {
    const consentData = {
      value,
      timestamp: new Date().toISOString(),
      tcString: 'CPtVwIAPtVwIAAGABCPLBYCsAP_AAAAAAAYgI5vd_X__b2_r-_7_f_t0eY1P9_7__-0zjhfdt-8N3f_X_L8X_2M7vF36tq4KuR4ku3bBIQdlHOHcTUmw6okVrTPsbk2Mr7NKJ7PEmlMbM2dYGHtfn91TuZKYr_7s___z__-__v__7_f_r-3_3_vp9X---_e_V399xLv9_____9nP___9v-_9________3_r9_7_D9_-f_87_XW-8EUAJMNSsSKZUIQFkBKAUAyICAJiCgkADBAQAklCQgGYgEACAwcoAQBRmBAAEACAEQYJAgBACgQAAAAQAJIABDAB4AQAAAAAAUQIAaABEAAgAFABIADQALgAgACQAKAAqACwALwAYgBaAC8AOAA5gD4AQQBFQCMAJEASwBMgCcAE-AKIAVQAswBcAC-gGAAYgAywDOAM-A0MDSgNPA1kDYANnA4kDjQOTA54DpwOyg7iDvYPAg8PDx4PIQ80D04PZg-SD6gAAA.f_gAAAAAAAAA', // IAB TCF v2.2
      purposeConsents: value === 'accepted' ? {
        1: true, 2: true, 3: true, 4: true, 5: true,
        6: true, 7: true, 8: true, 9: true, 10: true
      } : {},
      vendorConsents: value === 'accepted' ? { all: true } : {}
    };
    
    localStorage.setItem('cookieConsent', JSON.stringify(consentData));
    setIsVisible(false);
  };

  const handleAccept = () => {
    saveConsent('accepted');
  };

  const handleReject = () => {
    saveConsent('rejected');
  };

  const handleCustomize = () => {
    setShowPreferences(!showPreferences);
  };

  if (!isVisible) return null;

  return (
    <div className="cmp-banner-overlay">
      <div className="cmp-banner">
        <div className="cmp-banner-content">
          <h3 className="cmp-banner-title">Twoja Prywatność</h3>
          <p className="cmp-banner-text">
            Ta strona używa plików cookies w celu poprawy jakości usług i dostosowania treści do Twoich preferencji. 
            Korzystając z tej strony, zgadzasz się na używanie cookies zgodnie z aktualnymi ustawieniami przeglądarki. 
            Możesz zaakceptować wszystkie cookies, odrzucić je lub dostosować swoje preferencje.
          </p>
          <div className="cmp-banner-links">
            <a href="/#/polityka-prywatnosci" className="cmp-link">Polityka Prywatności</a>
            <span className="cmp-separator">•</span>
            <a href="/#/polityka-cookie" className="cmp-link">Polityka Cookies</a>
          </div>
          
          {showPreferences && (
            <div className="cmp-preferences">
              <p className="cmp-preferences-text">
                <strong>Zarządzanie zgodami:</strong> Możesz dostosować swoje preferencje dotyczące cookies. 
                Niektóre cookies są niezbędne do funkcjonowania strony i nie mogą być wyłączone.
              </p>
            </div>
          )}
        </div>
        
        <div className="cmp-banner-actions">
          <button onClick={handleAccept} className="btn btn-primary">
            Zaakceptuj wszystkie
          </button>
          <button onClick={handleReject} className="btn btn-secondary">
            Odrzuć wszystkie
          </button>
          <button onClick={handleCustomize} className="btn btn-secondary">
            {showPreferences ? 'Ukryj' : 'Dostosuj'} preferencje
          </button>
        </div>
      </div>
      
      <style>{`
        .cmp-banner-overlay {
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          z-index: 9999;
          background: rgba(0, 0, 0, 0.5);
          backdrop-filter: blur(4px);
          padding: var(--spacing-md);
          animation: fadeIn 0.3s ease-out;
        }
        
        .cmp-banner {
          max-width: 1200px;
          margin: 0 auto;
          background: var(--color-surface);
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-xl);
          padding: var(--spacing-xl);
          border: 1px solid var(--color-border);
        }
        
        .cmp-banner-content {
          margin-bottom: var(--spacing-lg);
        }
        
        .cmp-banner-title {
          font-family: var(--font-serif);
          font-size: var(--font-size-2xl);
          margin-bottom: var(--spacing-md);
          color: var(--color-text-primary);
        }
        
        .cmp-banner-text {
          font-size: var(--font-size-sm);
          color: var(--color-text-secondary);
          line-height: 1.6;
          margin-bottom: var(--spacing-md);
        }
        
        .cmp-banner-links {
          display: flex;
          gap: var(--spacing-sm);
          align-items: center;
          margin-bottom: var(--spacing-md);
        }
        
        .cmp-link {
          font-size: var(--font-size-sm);
          color: var(--color-primary);
          text-decoration: underline;
        }
        
        .cmp-separator {
          color: var(--color-text-muted);
        }
        
        .cmp-preferences {
          margin-top: var(--spacing-lg);
          padding: var(--spacing-md);
          background: var(--color-background-alt);
          border-radius: var(--radius-md);
        }
        
        .cmp-preferences-text {
          font-size: var(--font-size-sm);
          color: var(--color-text-secondary);
          margin: 0;
        }
        
        .cmp-banner-actions {
          display: flex;
          gap: var(--spacing-md);
          flex-wrap: wrap;
        }
        
        @media (max-width: 768px) {
          .cmp-banner {
            padding: var(--spacing-lg);
          }
          
          .cmp-banner-actions {
            flex-direction: column;
          }
          
          .cmp-banner-actions .btn {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
};

export default CMPBanner;
