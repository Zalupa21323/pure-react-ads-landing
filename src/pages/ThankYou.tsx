import { Link } from 'react-router-dom';

const ThankYou = () => {
  return (
    <div className="thankyou-page">
      <div className="section">
        <div className="container">
          <div className="thankyou-content">
            <div className="success-icon">✓</div>
            <h1 className="thankyou-title">Dziękujemy!</h1>
            <p className="thankyou-message">
              Twoje dane zostały pomyślnie wysłane. Nasz zespół skontaktuje się z Tobą 
              w ciągu 24 godzin roboczych.
            </p>
            <div className="thankyou-actions">
              <Link to="/" className="btn btn-primary btn-large">
                Wróć na stronę główną
              </Link>
              <Link to="/uslugi" className="btn btn-secondary btn-large">
                Zobacz nasze usługi
              </Link>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .thankyou-page {
          min-height: 60vh;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .thankyou-content {
          text-align: center;
          max-width: 600px;
          margin: 0 auto;
          padding: var(--spacing-3xl) var(--spacing-xl);
        }

        .success-icon {
          width: 100px;
          height: 100px;
          background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-light) 100%);
          color: var(--color-text-inverse);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 3rem;
          font-weight: bold;
          margin: 0 auto var(--spacing-2xl);
          animation: scaleIn 0.5s ease-out;
        }

        @keyframes scaleIn {
          from {
            transform: scale(0);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }

        .thankyou-title {
          font-size: var(--font-size-4xl);
          margin-bottom: var(--spacing-lg);
        }

        .thankyou-message {
          font-size: var(--font-size-lg);
          color: var(--color-text-secondary);
          line-height: 1.7;
          margin-bottom: var(--spacing-2xl);
        }

        .thankyou-actions {
          display: flex;
          gap: var(--spacing-md);
          justify-content: center;
          flex-wrap: wrap;
        }

        @media (max-width: 480px) {
          .thankyou-actions {
            flex-direction: column;
          }

          .thankyou-actions .btn {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
};

export default ThankYou;
