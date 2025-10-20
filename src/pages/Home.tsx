import { Link } from 'react-router-dom';
import { services } from '@/data/services';
import heroImage from '@/assets/hero-analytics.png';
import serviceStrategy from '@/assets/service-strategy.png';
import serviceDigital from '@/assets/service-digital.png';
import serviceFinance from '@/assets/service-finance.png';
import serviceHr from '@/assets/service-hr.png';
import serviceMarketing from '@/assets/service-marketing.png';
import serviceOperations from '@/assets/service-operations.png';
import avatar1 from '@/assets/avatar-1.png';
import avatar2 from '@/assets/avatar-2.png';

const serviceImages: Record<string, string> = {
  strategy: serviceStrategy,
  digital: serviceDigital,
  finance: serviceFinance,
  hr: serviceHr,
  marketing: serviceMarketing,
  operations: serviceOperations,
};

const Home = () => {
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
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-grid">
            <div className="hero-content fade-up">
              <h1 className="hero-title">
                Twój partner w rozwoju biznesu
              </h1>
              <p className="hero-description">
                Profesjonalne doradztwo strategiczne, które przekształca wizje w rzeczywiste wyniki. 
                Pomagamy firmom osiągać ich cele poprzez innowacyjne rozwiązania i sprawdzone metodologie.
              </p>
              <div className="hero-actions">
                <a href="#orderFormAnchor" className="btn btn-primary btn-large">
                  Skontaktuj się z nami
                </a>
                <Link to="/uslugi" className="btn btn-secondary btn-large">
                  Nasze usługi
                </Link>
              </div>
            </div>
            <div className="hero-visual fade-up">
              <img src={heroImage} alt="Analityka biznesowa" className="hero-image" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section bg-alt">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item fade-up">
              <div className="stat-number">2500+</div>
              <div className="stat-label">Zadowolonych klientów</div>
            </div>
            <div className="stat-item fade-up">
              <div className="stat-number">95%</div>
              <div className="stat-label">Wskaźnik sukcesu</div>
            </div>
            <div className="stat-item fade-up">
              <div className="stat-number">15+</div>
              <div className="stat-label">Lat doświadczenia</div>
            </div>
            <div className="stat-item fade-up">
              <div className="stat-number">24/7</div>
              <div className="stat-label">Wsparcie klienta</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section" id="uslugi">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Nasze usługi</h2>
            <p className="section-subtitle">
              Kompleksowe rozwiązania doradcze dopasowane do Twoich potrzeb biznesowych
            </p>
          </div>
          
          <div className="services-grid">
            {services.map((service) => (
              <div key={service.slug} className="service-card card fade-up">
                <div className="service-image-wrapper">
                  <img 
                    src={serviceImages[service.image]} 
                    alt={service.title} 
                    className="service-image" 
                  />
                </div>
                <div className="service-content">
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-description">{service.short}</p>
                  <ul className="service-features">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                  <div className="service-footer">
                    <span className="service-price">{service.price}</span>
                    <Link to={`/uslugi/${service.slug}`} className="btn btn-primary">
                      Dowiedz się więcej
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section bg-alt">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Co mówią nasi klienci</h2>
            <p className="section-subtitle">
              Opinie firm, które zaufały naszemu doświadczeniu
            </p>
          </div>
          
          <div className="testimonials-grid">
            <div className="testimonial-card card fade-up">
              <div className="testimonial-rating">★★★★★</div>
              <p className="testimonial-text">
                "Współpraca z Lopotam znacząco poprawiła naszą efektywność operacyjną. 
                Zespół ekspertów pomógł nam zoptymalizować procesy i zwiększyć rentowność o 30%."
              </p>
              <div className="testimonial-author">
                <img src={avatar1} alt="" className="author-avatar" />
                <div>
                  <div className="author-name">Jan Kowalski</div>
                  <div className="author-position">Dyrektor Operacyjny, TechCorp</div>
                </div>
              </div>
            </div>
            
            <div className="testimonial-card card fade-up">
              <div className="testimonial-rating">★★★★★</div>
              <p className="testimonial-text">
                "Dzięki strategii opracowanej przez Lopotam weszliśmy na nowe rynki i podwoiliśmy 
                naszą bazę klientów. Profesjonalizm i zaangażowanie na najwyższym poziomie."
              </p>
              <div className="testimonial-author">
                <img src={avatar2} alt="" className="author-avatar" />
                <div>
                  <div className="author-name">Anna Nowak</div>
                  <div className="author-position">CEO, GrowthHub</div>
                </div>
              </div>
            </div>
            
            <div className="testimonial-card card fade-up">
              <div className="testimonial-rating">★★★★★</div>
              <p className="testimonial-text">
                "Transformacja cyfrowa naszej firmy przebiegła sprawnie dzięki wsparciu Lopotam. 
                Zespół nie tylko wdrożył nowe technologie, ale też przeszkolił naszych pracowników."
              </p>
              <div className="testimonial-author">
                <img src={avatar1} alt="" className="author-avatar" />
                <div>
                  <div className="author-name">Piotr Wiśniewski</div>
                  <div className="author-position">CTO, InnovateLabs</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="section" id="orderFormAnchor">
        <div className="container">
          <div className="form-section-content">
            <div className="form-section-text">
              <h2 className="form-section-title">Gotowy na zmianę?</h2>
              <p className="form-section-description">
                Skontaktuj się z nami i dowiedz się, jak możemy pomóc Twojej firmie osiągnąć cele biznesowe. 
                Nasz zespół ekspertów jest gotowy, aby przekształcić Twoje wyzwania w możliwości.
              </p>
            </div>
            
            <form id="leadForm" className="contact-form card" onSubmit={handleSubmit}>
              <h3 className="form-title">Wypełnij formularz</h3>
              
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
                Wyślij zapytanie
              </button>
            </form>
          </div>
        </div>
      </section>
      
      <style>{`
        .hero-section {
          padding: var(--spacing-4xl) 0;
          background: linear-gradient(135deg, var(--color-background) 0%, var(--color-background-alt) 100%);
        }
        
        .hero-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--spacing-3xl);
          align-items: center;
        }
        
        .hero-title {
          font-size: var(--font-size-5xl);
          line-height: 1.1;
          margin-bottom: var(--spacing-lg);
        }
        
        .hero-description {
          font-size: var(--font-size-lg);
          color: var(--color-text-secondary);
          margin-bottom: var(--spacing-2xl);
        }
        
        .hero-actions {
          display: flex;
          gap: var(--spacing-md);
          flex-wrap: wrap;
        }
        
        .hero-image {
          width: 100%;
          height: auto;
          border-radius: var(--radius-xl);
          box-shadow: var(--shadow-xl);
        }
        
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: var(--spacing-2xl);
        }
        
        .stat-item {
          text-align: center;
          padding: var(--spacing-xl);
        }
        
        .stat-number {
          font-family: var(--font-serif);
          font-size: var(--font-size-4xl);
          font-weight: 700;
          color: var(--color-primary);
          margin-bottom: var(--spacing-sm);
        }
        
        .stat-label {
          font-size: var(--font-size-base);
          color: var(--color-text-secondary);
        }
        
        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
          gap: var(--spacing-xl);
        }
        
        .service-card {
          display: flex;
          flex-direction: column;
          height: 100%;
        }
        
        .service-image-wrapper {
          width: 100%;
          height: 200px;
          overflow: hidden;
          border-radius: var(--radius-md);
          margin-bottom: var(--spacing-lg);
        }
        
        .service-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        
        .service-content {
          flex: 1;
          display: flex;
          flex-direction: column;
        }
        
        .service-title {
          font-size: var(--font-size-2xl);
          margin-bottom: var(--spacing-md);
        }
        
        .service-description {
          color: var(--color-text-secondary);
          margin-bottom: var(--spacing-lg);
        }
        
        .service-features {
          list-style: none;
          margin-bottom: var(--spacing-lg);
          flex: 1;
        }
        
        .service-features li {
          padding-left: var(--spacing-lg);
          margin-bottom: var(--spacing-xs);
          position: relative;
          color: var(--color-text-secondary);
          font-size: var(--font-size-sm);
        }
        
        .service-features li::before {
          content: '✓';
          position: absolute;
          left: 0;
          color: var(--color-primary);
          font-weight: bold;
        }
        
        .service-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: var(--spacing-lg);
          border-top: 1px solid var(--color-border-light);
        }
        
        .service-price {
          font-weight: 600;
          color: var(--color-primary);
          font-size: var(--font-size-lg);
        }
        
        .testimonials-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: var(--spacing-xl);
        }
        
        .testimonial-card {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-lg);
        }
        
        .testimonial-rating {
          color: var(--color-accent);
          font-size: var(--font-size-lg);
        }
        
        .testimonial-text {
          font-style: italic;
          color: var(--color-text-secondary);
          flex: 1;
        }
        
        .testimonial-author {
          display: flex;
          gap: var(--spacing-md);
          align-items: center;
        }
        
        .author-avatar {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          object-fit: cover;
        }
        
        .author-name {
          font-weight: 600;
          color: var(--color-text-primary);
        }
        
        .author-position {
          font-size: var(--font-size-sm);
          color: var(--color-text-muted);
        }
        
        .form-section-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--spacing-3xl);
          align-items: start;
        }
        
        .form-section-title {
          font-size: var(--font-size-4xl);
          margin-bottom: var(--spacing-lg);
        }
        
        .form-section-description {
          font-size: var(--font-size-lg);
          color: var(--color-text-secondary);
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
          .hero-grid,
          .form-section-content {
            grid-template-columns: 1fr;
            gap: var(--spacing-2xl);
          }
          
          .hero-visual {
            order: -1;
          }
        }
        
        @media (max-width: 768px) {
          .services-grid,
          .testimonials-grid {
            grid-template-columns: 1fr;
          }
          
          .hero-actions {
            flex-direction: column;
          }
          
          .hero-actions .btn {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
};

export default Home;
