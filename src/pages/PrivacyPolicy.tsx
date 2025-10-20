const PrivacyPolicy = () => {
  return (
    <div className="policy-page">
      <div className="page-hero">
        <div className="container">
          <h1 className="page-title">Polityka Prywatności</h1>
        </div>
      </div>

      <div className="section">
        <div className="container content-container">
          <h2>1. Informacje ogólne</h2>
          <p>
            Niniejsza Polityka Prywatności określa zasady przetwarzania i ochrony danych osobowych 
            przekazanych przez Użytkowników w związku z korzystaniem z usług dostępnych na stronie internetowej.
          </p>

          <h2>2. Administrator danych osobowych</h2>
          <p>
            Administratorem danych osobowych przetwarzanych w związku z korzystaniem ze strony jest Lopotam.
          </p>

          <h2>3. Rodzaj przetwarzanych danych</h2>
          <p>Administrator przetwarza następujące dane osobowe:</p>
          <ul>
            <li>Imię i nazwisko</li>
            <li>Adres e-mail</li>
            <li>Numer telefonu</li>
            <li>Dane techniczne (adres IP, typ przeglądarki, system operacyjny)</li>
          </ul>

          <h2>4. Cel i podstawa prawna przetwarzania</h2>
          <p>Dane osobowe przetwarzane są w następujących celach:</p>
          <ul>
            <li>Udzielania odpowiedzi na zapytania wysłane przez formularz kontaktowy</li>
            <li>Świadczenia usług zgodnie z zawartą umową</li>
            <li>W celach marketingowych (za zgodą użytkownika)</li>
            <li>W celach analitycznych i statystycznych</li>
          </ul>

          <h2>5. Okres przechowywania danych</h2>
          <p>
            Dane osobowe przechowywane są przez okres niezbędny do realizacji celów, dla których zostały zebrane, 
            nie dłużej jednak niż przez okres 5 lat od zakończenia współpracy lub wycofania zgody.
          </p>

          <h2>6. Prawa użytkownika</h2>
          <p>Użytkownik ma prawo do:</p>
          <ul>
            <li>Dostępu do swoich danych osobowych</li>
            <li>Sprostowania danych</li>
            <li>Usunięcia danych</li>
            <li>Ograniczenia przetwarzania</li>
            <li>Przenoszenia danych</li>
            <li>Wniesienia sprzeciwu wobec przetwarzania</li>
            <li>Cofnięcia zgody w dowolnym momencie</li>
          </ul>

          <h2>7. Pliki cookies</h2>
          <p>
            Strona wykorzystuje pliki cookies w celu prawidłowego działania serwisu, 
            dostosowania treści do preferencji użytkowników oraz w celach analitycznych. 
            Więcej informacji znajduje się w Polityce Cookies.
          </p>

          <h2>8. Bezpieczeństwo danych</h2>
          <p>
            Administrator stosuje odpowiednie środki techniczne i organizacyjne zapewniające 
            bezpieczeństwo przetwarzanych danych osobowych, w szczególności zabezpieczające 
            dane przed nieuprawnionym dostępem, utratą, zniszczeniem czy modyfikacją.
          </p>

          <h2>9. Zmiany w Polityce Prywatności</h2>
          <p>
            Administrator zastrzega sobie prawo do wprowadzania zmian w Polityce Prywatności. 
            Aktualna wersja Polityki jest zawsze dostępna na tej stronie.
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

export default PrivacyPolicy;
