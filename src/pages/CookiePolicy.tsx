const CookiePolicy = () => {
  return (
    <div className="policy-page">
      <div className="page-hero">
        <div className="container">
          <h1 className="page-title">Polityka Cookies</h1>
        </div>
      </div>

      <div className="section">
        <div className="container content-container">
          <h2>1. Czym są pliki cookies?</h2>
          <p>
            Pliki cookies to małe pliki tekstowe zapisywane na urządzeniu użytkownika podczas korzystania 
            ze strony internetowej. Umożliwiają one rozpoznanie urządzenia i dostosowanie wyświetlania 
            strony do indywidualnych preferencji użytkownika.
          </p>

          <h2>2. Jakie rodzaje cookies używamy?</h2>
          
          <h3>Cookies niezbędne</h3>
          <p>
            Pliki cookies niezbędne do prawidłowego funkcjonowania strony. Bez tych plików strona nie 
            będzie działać poprawnie. Obejmują one między innymi pliki związane z bezpieczeństwem 
            i preferencjami użytkownika.
          </p>

          <h3>Cookies funkcjonalne</h3>
          <p>
            Pliki cookies pozwalające na zapamiętanie wyborów dokonanych przez użytkownika, 
            takich jak język czy region. Zwiększają one komfort korzystania ze strony.
          </p>

          <h3>Cookies analityczne</h3>
          <p>
            Pliki cookies służące do zbierania informacji o sposobie korzystania ze strony. 
            Pomagają nam zrozumieć, jak użytkownicy poruszają się po stronie i które elementy 
            są dla nich najważniejsze.
          </p>

          <h2>3. Zarządzanie cookies</h2>
          <p>
            Użytkownik może w każdej chwili zmienić ustawienia dotyczące plików cookies 
            w swojej przeglądarce internetowej. Może również usunąć pliki cookies, 
            które zostały już zapisane na urządzeniu.
          </p>

          <h3>Jak zarządzać cookies w różnych przeglądarkach:</h3>
          <ul>
            <li>
              <strong>Chrome:</strong> Menu → Ustawienia → Prywatność i bezpieczeństwo → Pliki cookie
            </li>
            <li>
              <strong>Firefox:</strong> Menu → Opcje → Prywatność i bezpieczeństwo → Ciasteczka
            </li>
            <li>
              <strong>Safari:</strong> Preferencje → Prywatność → Zarządzanie danymi witryn
            </li>
            <li>
              <strong>Edge:</strong> Menu → Ustawienia → Pliki cookie i uprawnienia witryn
            </li>
          </ul>

          <h2>4. Zgoda na cookies</h2>
          <p>
            Przy pierwszej wizycie na stronie wyświetlany jest banner informujący o wykorzystywaniu 
            plików cookies. Użytkownik może zaakceptować wszystkie cookies, odrzucić je lub dostosować 
            swoje preferencje.
          </p>

          <h2>5. Compliance z TCF v2.2</h2>
          <p>
            Nasza strona stosuje się do standardu IAB Transparency & Consent Framework (TCF) w wersji 2.2, 
            który zapewnia przejrzystość i kontrolę użytkownika nad przetwarzaniem danych osobowych 
            przez dostawców technologii reklamowych.
          </p>

          <h2>6. Zmiana Polityki Cookies</h2>
          <p>
            Zastrzegamy sobie prawo do wprowadzania zmian w Polityce Cookies. Aktualna wersja 
            jest zawsze dostępna na tej stronie.
          </p>

          <p className="update-date">
            <strong>Data ostatniej aktualizacji: {new Date().toLocaleDateString('pl-PL')}</strong>
          </p>
        </div>
      </div>

      <style>{`
        .policy-page .page-hero {
          padding: var(--spacing-3xl) 0;
          background: linear-gradient(135deg, var(--color-primary-dark) 0%, var(--color-primary) 100%);
          color: var(--color-text-inverse);
          text-align: center;
        }

        .policy-page .page-title {
          font-size: var(--font-size-4xl);
          color: var(--color-text-inverse);
        }

        .policy-page .content-container h2 {
          font-size: var(--font-size-2xl);
          margin-top: var(--spacing-2xl);
          margin-bottom: var(--spacing-md);
        }

        .policy-page .content-container h2:first-child {
          margin-top: 0;
        }

        .policy-page .content-container h3 {
          font-size: var(--font-size-lg);
          margin-top: var(--spacing-lg);
          margin-bottom: var(--spacing-sm);
          font-weight: 600;
        }

        .policy-page .content-container p,
        .policy-page .content-container ul {
          font-size: var(--font-size-base);
          color: var(--color-text-secondary);
          line-height: 1.8;
          margin-bottom: var(--spacing-lg);
        }

        .policy-page .content-container ul {
          padding-left: var(--spacing-xl);
        }

        .policy-page .content-container ul li {
          margin-bottom: var(--spacing-sm);
        }

        .policy-page .update-date {
          margin-top: var(--spacing-2xl);
          padding-top: var(--spacing-lg);
          border-top: 1px solid var(--color-border);
          color: var(--color-text-muted);
        }
      `}</style>
    </div>
  );
};

export default CookiePolicy;
