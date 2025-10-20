const Terms = () => {
  return (
    <div className="policy-page">
      <div className="page-hero">
        <div className="container">
          <h1 className="page-title">Regulamin</h1>
        </div>
      </div>

      <div className="section">
        <div className="container content-container">
          <h2>1. Postanowienia ogólne</h2>
          <p>
            Niniejszy Regulamin określa zasady korzystania ze strony internetowej oraz świadczenia usług 
            doradczych przez Lopotam. Korzystanie ze strony i usług oznacza akceptację postanowień niniejszego Regulaminu.
          </p>

          <h2>2. Definicje</h2>
          <ul>
            <li><strong>Usługodawca:</strong> Lopotam, świadczący usługi doradcze</li>
            <li><strong>Klient:</strong> osoba fizyczna, prawna lub jednostka organizacyjna korzystająca z usług</li>
            <li><strong>Strona:</strong> serwis internetowy dostępny pod adresem aktualnej domeny</li>
            <li><strong>Usługi:</strong> usługi doradcze świadczone przez Usługodawcę</li>
          </ul>

          <h2>3. Zakres usług</h2>
          <p>Usługodawca świadczy następujące usługi doradcze:</p>
          <ul>
            <li>Doradztwo strategiczne</li>
            <li>Transformacja cyfrowa</li>
            <li>Analiza finansowa</li>
            <li>Zarządzanie zasobami ludzkimi</li>
            <li>Marketing i sprzedaż</li>
            <li>Optymalizacja operacyjna</li>
          </ul>

          <h2>4. Zasady świadczenia usług</h2>
          <p>
            Usługi świadczone są na podstawie indywidualnej umowy zawartej między Usługodawcą a Klientem. 
            Szczegółowy zakres, termin realizacji i wynagrodzenie określane są w umowie dla każdego projektu osobno.
          </p>

          <h2>5. Zawarcie umowy</h2>
          <p>
            Umowa o świadczenie usług zawierana jest po:
          </p>
          <ul>
            <li>Przesłaniu zapytania przez Klienta za pośrednictwem formularza kontaktowego</li>
            <li>Przeprowadzeniu konsultacji wstępnej</li>
            <li>Przygotowaniu i akceptacji oferty przez Klienta</li>
            <li>Podpisaniu umowy przez obie strony</li>
          </ul>

          <h2>6. Wynagrodzenie</h2>
          <p>
            Wynagrodzenie za świadczone usługi ustalane jest indywidualnie dla każdego projektu 
            i określane w umowie. Płatności dokonywane są zgodnie z harmonogramem określonym w umowie.
          </p>

          <h2>7. Prawa autorskie</h2>
          <p>
            Wszelkie materiały, raporty, analizy i dokumenty przygotowane przez Usługodawcę w ramach 
            świadczonych usług stanowią własność intelektualną Usługodawcy, chyba że umowa stanowi inaczej.
          </p>

          <h2>8. Poufność</h2>
          <p>
            Obie strony zobowiązują się do zachowania w tajemnicy wszelkich informacji poufnych 
            uzyskanych w trakcie współpracy. Obowiązek zachowania poufności obowiązuje również 
            po zakończeniu współpracy.
          </p>

          <h2>9. Odpowiedzialność</h2>
          <p>
            Usługodawca dokłada wszelkich starań, aby świadczone usługi były wykonywane profesjonalnie 
            i zgodnie z najlepszą praktyką. Odpowiedzialność Usługodawcy ograniczona jest do wysokości 
            wynagrodzenia otrzymanego za dany projekt.
          </p>

          <h2>10. Reklamacje</h2>
          <p>
            Klient ma prawo zgłosić reklamację w terminie 14 dni od wykonania usługi. Reklamacje 
            rozpatrywane są w terminie 14 dni roboczych od daty otrzymania.
          </p>

          <h2>11. Rozwiązanie umowy</h2>
          <p>
            Każda ze stron może rozwiązać umowę z zachowaniem 30-dniowego okresu wypowiedzenia, 
            chyba że umowa stanowi inaczej. W przypadku rażącego naruszenia postanowień umowy, 
            możliwe jest rozwiązanie umowy ze skutkiem natychmiastowym.
          </p>

          <h2>12. Postanowienia końcowe</h2>
          <p>
            W sprawach nieuregulowanych w niniejszym Regulaminie zastosowanie mają przepisy 
            polskiego prawa cywilnego. Spory rozstrzygane są przez właściwe sądy powszechne.
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

export default Terms;
