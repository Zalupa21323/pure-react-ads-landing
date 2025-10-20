const Contact = () => {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    // Add technical fields
    const urlParams = new URLSearchParams(window.location.search);
    formData.append('__ts', Date.now().toString());
    formData.append('utm_source', sessionStorage.getItem('utm_source') || urlParams.get('utm_source') || '');
    formData.append('utm_medium', sessionStorage.getItem('utm_medium') || urlParams.get('utm_medium') || '');
    formData.append('utm_campaign', sessionStorage.getItem('utm_campaign') || urlParams.get('utm_campaign') || '');
    formData.append('utm_term', sessionStorage.getItem('utm_term') || urlParams.get('utm_term') || '');
    formData.append('utm_content', sessionStorage.getItem('utm_content') || urlParams.get('utm_content') || '');
    formData.append('gclid', sessionStorage.getItem('gclid') || urlParams.get('gclid') || '');
    formData.append('fbclid', sessionStorage.getItem('fbclid') || urlParams.get('fbclid') || '');
    formData.append('referrer', document.referrer);
    formData.append('path', location.pathname + location.hash);
    
    // Anti-spam check
    if (formData.get('__hp')) {
      window.location.href = '/#/dziekujemy';
      return;
    }
    
    try {
      const submitButton = form.querySelector('button[type="submit"]') as HTMLButtonElement;
      if (submitButton) submitButton.disabled = true;
      
      const response = await fetch('/api/lead.php', {
        method: 'POST',
        headers: {
          'X-Requested-With': 'fetch',
        },
        body: formData,
      });
      
      const result = await response.json();
      
      if (result.ok) {
        window.location.href = '/#/dziekujemy';
      } else {
        const errorElement = form.querySelector('.form-error');
        if (errorElement) {
          errorElement.textContent = 'Wystąpił błąd. Spróbuj ponownie.';
          errorElement.setAttribute('aria-live', 'polite');
        }
      }
    } catch {
      const errorElement = form.querySelector('.form-error');
      if (errorElement) {
        errorElement.textContent = 'Błąd połączenia. Sprawdź internet i spróbuj ponownie.';
        errorElement.setAttribute('aria-live', 'polite');
      }
    } finally {
      const submitButton = form.querySelector('button[type="submit"]') as HTMLButtonElement;
      if (submitButton) submitButton.disabled = false;
    }
  };

  return (
    <div className="contact-page">
      <div className="page-hero">
        <div className="container">
          <h1 className="page-title">Kontakt</h1>
          <p className="page-description">
            Skontaktuj się z nami i dowiedz się, jak możemy pomóc Twojej firmie
          </p>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <h2>Jesteśmy do Twojej dyspozycji</h2>
              <p>
                Masz pytania dotyczące naszych usług? Chcesz omówić szczegóły współpracy? 
                Wypełnij formularz kontaktowy, a nasz zespół skontaktuje się z Tobą w ciągu 24 godzin.
              </p>

              <div className="info-blocks">
                <div className="info-block">
                  <h3>Godziny pracy</h3>
                  <p>Poniedziałek - Piątek</p>
                  <p className="highlight">9:00 - 18:00</p>
                </div>

                <div className="info-block">
                  <h3>Czas odpowiedzi</h3>
                  <p>Standardowo odpowiadamy</p>
                  <p className="highlight">w ciągu 24 godzin</p>
                </div>
              </div>
            </div>

            <form id="leadForm" className="contact-form card" onSubmit={handleSubmit}>
              <h3 className="form-title">Formularz kontaktowy</h3>
              
              <input type="text" name="__hp" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />
              
              <div className="form-group">
                <label htmlFor="first_name" className="form-label">Imię *</label>
                <input 
                  type="text" 
                  id="first_name"
                  name="first_name"
                  className="form-input" 
                  required 
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="last_name" className="form-label">Nazwisko *</label>
                <input 
                  type="text" 
                  id="last_name"
                  name="last_name"
                  className="form-input" 
                  required 
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email" className="form-label">Email *</label>
                <input 
                  type="email" 
                  id="email"
                  name="email"
                  className="form-input" 
                  required 
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="phone" className="form-label">Telefon *</label>
                <input 
                  type="tel" 
                  id="phone"
                  name="phone"
                  className="form-input" 
                  required 
                />
              </div>
              
              <div className="form-group">
                <label className="checkbox-label">
                  <input 
                    type="checkbox" 
                    name="consent"
                    required 
                  />
                  <span>Zgadzam się na przetwarzanie moich danych osobowych *</span>
                </label>
              </div>
              
              <div className="form-error" role="alert"></div>
              
              <button type="submit" className="btn btn-accent btn-large">
                Wyślij wiadomość
              </button>
            </form>
          </div>
        </div>
      </div>

      <style>{`
        .page-hero {
          padding: var(--spacing-4xl) 0 var(--spacing-3xl);
          background: linear-gradient(135deg, var(--color-primary-dark) 0%, var(--color-primary) 100%);
          color: var(--color-text-inverse);
          text-align: center;
        }

        .page-title {
          font-size: var(--font-size-4xl);
          color: var(--color-text-inverse);
          margin-bottom: var(--spacing-lg);
        }

        .page-description {
          font-size: var(--font-size-lg);
          color: rgba(255, 255, 255, 0.9);
          max-width: 800px;
          margin: 0 auto;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--spacing-3xl);
          align-items: start;
        }

        .contact-info h2 {
          font-size: var(--font-size-3xl);
          margin-bottom: var(--spacing-lg);
        }

        .contact-info p {
          font-size: var(--font-size-base);
          color: var(--color-text-secondary);
          line-height: 1.7;
          margin-bottom: var(--spacing-xl);
        }

        .info-blocks {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-xl);
          margin-top: var(--spacing-2xl);
        }

        .info-block {
          padding: var(--spacing-lg);
          background-color: var(--color-background-alt);
          border-radius: var(--radius-md);
          border-left: 4px solid var(--color-primary);
        }

        .info-block h3 {
          font-size: var(--font-size-lg);
          margin-bottom: var(--spacing-sm);
        }

        .info-block p {
          margin: 0;
          font-size: var(--font-size-sm);
          color: var(--color-text-secondary);
        }

        .info-block .highlight {
          font-size: var(--font-size-lg);
          font-weight: 600;
          color: var(--color-primary);
          margin-top: var(--spacing-xs);
        }

        .contact-form {
          padding: var(--spacing-2xl);
        }

        .form-title {
          font-size: var(--font-size-2xl);
          margin-bottom: var(--spacing-xl);
        }

        .form-group {
          margin-bottom: var(--spacing-lg);
        }

        .form-label {
          display: block;
          margin-bottom: var(--spacing-xs);
          font-weight: 600;
          color: var(--color-text-primary);
        }

        .form-input {
          width: 100%;
          padding: var(--spacing-md);
          border: 1px solid var(--color-border);
          border-radius: var(--radius-md);
          font-family: var(--font-sans);
          font-size: var(--font-size-base);
          transition: border-color var(--transition-fast);
        }

        .form-input:focus {
          outline: none;
          border-color: var(--color-primary);
        }

        .checkbox-label {
          display: flex;
          gap: var(--spacing-sm);
          align-items: start;
          cursor: pointer;
          font-size: var(--font-size-sm);
        }

        .checkbox-label input[type="checkbox"] {
          margin-top: 4px;
          cursor: pointer;
        }

        .form-error {
          color: var(--color-accent);
          font-size: var(--font-size-sm);
          min-height: 20px;
          margin-bottom: var(--spacing-md);
        }

        @media (max-width: 968px) {
          .contact-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default Contact;
