import { useParams, Link, Navigate } from 'react-router-dom';
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

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = services.find(s => s.slug === slug);

  if (!service) {
    return <Navigate to="/uslugi" replace />;
  }

  const scrollToForm = (e: React.MouseEvent) => {
    e.preventDefault();
    const formElement = document.getElementById('orderFormAnchor');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="service-detail-page">
      <div className="breadcrumbs">
        <div className="container">
          <Link to="/">Strona główna</Link>
          <span className="breadcrumb-separator">›</span>
          <Link to="/uslugi">Usługi</Link>
          <span className="breadcrumb-separator">›</span>
          <span>{service.title}</span>
        </div>
      </div>

      <div className="page-hero">
        <div className="container">
          <h1 className="page-title">{service.title}</h1>
          <p className="page-description">{service.short}</p>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <div className="detail-grid">
            <div className="detail-main">
              <div className="service-detail-image">
                <img 
                  src={serviceImages[service.image]} 
                  alt={service.title}
                />
              </div>

              <div 
                className="service-content-html"
                dangerouslySetInnerHTML={{ __html: service.contentHtml }}
              />

              <div className="detail-cta card">
                <h3>Zainteresowany tą usługą?</h3>
                <p>Skontaktuj się z nami, aby omówić szczegóły i otrzymać indywidualną wycenę.</p>
                <a href="#orderFormAnchor" onClick={scrollToForm} className="btn btn-accent btn-large">
                  Wyślij zapytanie
                </a>
              </div>
            </div>

            <aside className="detail-sidebar">
              <div className="sidebar-card card">
                <h3 className="sidebar-title">Szczegóły usługi</h3>
                <div className="sidebar-info">
                  <div className="info-item">
                    <span className="info-label">Cena</span>
                    <span className="info-value">{service.price}</span>
                  </div>
                </div>
              </div>

              <div className="sidebar-card card">
                <h3 className="sidebar-title">Zakres usługi</h3>
                <ul className="sidebar-features">
                  {service.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </div>

              <div className="sidebar-card card">
                <h3 className="sidebar-title">Inne usługi</h3>
                <div className="related-services">
                  {services
                    .filter(s => s.slug !== service.slug)
                    .slice(0, 3)
                    .map(relatedService => (
                      <Link 
                        key={relatedService.slug}
                        to={`/uslugi/${relatedService.slug}`}
                        className="related-service-link"
                      >
                        {relatedService.title}
                      </Link>
                    ))}
                </div>
              </div>
            </aside>
          </div>

          <div className="back-link">
            <Link to="/uslugi" className="btn btn-secondary">
              ← Wróć do listy usług
            </Link>
          </div>
        </div>
      </div>

      <style>{`
        .breadcrumbs {
          background-color: var(--color-background-alt);
          padding: var(--spacing-md) 0;
          font-size: var(--font-size-sm);
        }

        .breadcrumbs .container {
          display: flex;
          align-items: center;
          gap: var(--spacing-xs);
        }

        .breadcrumb-separator {
          color: var(--color-text-muted);
        }

        .page-hero {
          padding: var(--spacing-3xl) 0;
          background: linear-gradient(135deg, var(--color-primary-dark) 0%, var(--color-primary) 100%);
          color: var(--color-text-inverse);
          text-align: center;
        }

        .page-title {
          font-size: var(--font-size-4xl);
          color: var(--color-text-inverse);
          margin-bottom: var(--spacing-md);
        }

        .page-description {
          font-size: var(--font-size-lg);
          color: rgba(255, 255, 255, 0.9);
          max-width: 800px;
          margin: 0 auto;
        }

        .detail-grid {
          display: grid;
          grid-template-columns: 1fr 350px;
          gap: var(--spacing-3xl);
        }

        .service-detail-image {
          width: 100%;
          border-radius: var(--radius-lg);
          overflow: hidden;
          margin-bottom: var(--spacing-2xl);
        }

        .service-detail-image img {
          width: 100%;
          height: auto;
        }

        .service-content-html {
          margin-bottom: var(--spacing-3xl);
        }

        .service-content-html h3 {
          font-size: var(--font-size-xl);
          margin-top: var(--spacing-xl);
          margin-bottom: var(--spacing-md);
        }

        .service-content-html p {
          color: var(--color-text-secondary);
          line-height: 1.8;
          margin-bottom: var(--spacing-lg);
        }

        .detail-cta {
          text-align: center;
          padding: var(--spacing-2xl);
        }

        .detail-cta h3 {
          font-size: var(--font-size-2xl);
          margin-bottom: var(--spacing-md);
        }

        .detail-cta p {
          color: var(--color-text-secondary);
          margin-bottom: var(--spacing-lg);
        }

        .sidebar-card {
          margin-bottom: var(--spacing-xl);
          padding: var(--spacing-xl);
        }

        .sidebar-title {
          font-size: var(--font-size-lg);
          margin-bottom: var(--spacing-lg);
          padding-bottom: var(--spacing-md);
          border-bottom: 2px solid var(--color-primary);
        }

        .sidebar-info {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-md);
        }

        .info-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .info-label {
          font-weight: 600;
          color: var(--color-text-secondary);
        }

        .info-value {
          font-weight: 600;
          color: var(--color-primary);
          font-size: var(--font-size-lg);
        }

        .sidebar-features {
          list-style: none;
        }

        .sidebar-features li {
          padding-left: var(--spacing-lg);
          margin-bottom: var(--spacing-sm);
          position: relative;
          color: var(--color-text-secondary);
          font-size: var(--font-size-sm);
        }

        .sidebar-features li::before {
          content: '✓';
          position: absolute;
          left: 0;
          color: var(--color-primary);
          font-weight: bold;
        }

        .related-services {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-sm);
        }

        .related-service-link {
          padding: var(--spacing-sm);
          background-color: var(--color-background-alt);
          border-radius: var(--radius-sm);
          font-size: var(--font-size-sm);
          transition: background-color var(--transition-fast);
        }

        .related-service-link:hover {
          background-color: var(--color-border-light);
        }

        .back-link {
          margin-top: var(--spacing-3xl);
          text-align: center;
        }

        @media (max-width: 968px) {
          .detail-grid {
            grid-template-columns: 1fr;
          }

          .detail-sidebar {
            order: -1;
          }
        }
      `}</style>
    </div>
  );
};

export default ServiceDetail;
