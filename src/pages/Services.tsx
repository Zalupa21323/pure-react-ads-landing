import { Link } from 'react-router-dom';
import { services } from '@/data/services';
import serviceStrategy from '@/assets/service-strategy.png';
import serviceDigital from '@/assets/service-digital.png';
import serviceFinance from '@/assets/service-finance.png';
import serviceHr from '@/assets/service-hr.png';
import serviceMarketing from '@/assets/service-marketing.png';
import serviceOperations from '@/assets/service-operations.png';

const serviceImages: Record<string, string> = {
  strategy: serviceStrategy,
  digital: serviceDigital,
  finance: serviceFinance,
  hr: serviceHr,
  marketing: serviceMarketing,
  operations: serviceOperations,
};

const Services = () => {
  return (
    <div className="services-page">
      <div className="page-hero">
        <div className="container">
          <h1 className="page-title">Nasze usługi</h1>
          <p className="page-description">
            Kompleksowe rozwiązania doradcze, które pomogą Twojej firmie osiągnąć cele biznesowe
          </p>
        </div>
      </div>
      
      <div className="section">
        <div className="container">
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
                  <h2 className="service-title">{service.title}</h2>
                  <p className="service-description">{service.short}</p>
                  <ul className="service-features">
                    {service.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                  <div className="service-footer">
                    <span className="service-price">{service.price}</span>
                    <Link to={`/uslugi/${service.slug}`} className="btn btn-primary">
                      Zobacz szczegóły
                    </Link>
                  </div>
                </div>
              </div>
            ))}
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
          margin-bottom: var(--spacing-sm);
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
        
        @media (max-width: 768px) {
          .services-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default Services;
