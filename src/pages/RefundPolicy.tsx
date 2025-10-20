const RefundPolicy = () => {
  return (
    <div className="policy-page">
      <div className="page-hero">
        <div className="container">
          <h1 className="page-title">Polityka Zwrotów</h1>
        </div>
      </div>

      <div className="section">
        <div className="container content-container">
          <h2>1. Informacje ogólne</h2>
          <p>
            Niniejsza Polityka Zwrotów określa zasady rezygnacji z usług oraz zwrotu wpłaconych środków 
            w związku z usługami doradczymi świadczonymi przez Lopotam.
          </p>

          <h2>2. Prawo odstąpienia od umowy</h2>
          <p>
            Zgodnie z przepisami Kodeksu Cywilnego, Klient będący konsumentem ma prawo odstąpić od umowy 
            zawartej na odległość w terminie 14 dni od daty zawarcia umowy, bez podania przyczyny.
          </p>
          <p>
            <strong>Uwaga:</strong> Prawo odstąpienia nie przysługuje w przypadku usług, których wykonanie 
            rozpoczęło się za wyraźną zgodą Klienta przed upływem 14-dniowego terminu.
          </p>

          <h2>3. Sposób odstąpienia od umowy</h2>
          <p>
            Aby odstąpić od umowy, Klient powinien poinformować nas o swojej decyzji w formie pisemnej 
            (e-mail lub list) zawierającej:
          </p>
          <ul>
            <li>Imię i nazwisko / nazwę firmy</li>
            <li>Numer umowy lub zlecenia</li>
            <li>Datę zawarcia umowy</li>
            <li>Oświadczenie o odstąpieniu od umowy</li>
          </ul>

          <h2>4. Zwrot środków</h2>
          <p>
            W przypadku skutecznego odstąpienia od umowy, zwrócimy wszystkie otrzymane od Klienta płatności, 
            w tym koszty dostarczenia dokumentów (z wyjątkiem dodatkowych kosztów wynikających z wybranego 
            przez Klienta sposobu dostarczenia innego niż najtańszy standardowy sposób dostarczenia).
          </p>
          <p>
            Zwrot płatności zostanie dokonany niezwłocznie, nie później niż w terminie 14 dni od dnia, 
            w którym otrzymaliśmy oświadczenie o odstąpieniu od umowy. Zwrot zostanie dokonany przy użyciu 
            takich samych metod płatności, jakie zostały użyte w pierwotnej transakcji.
          </p>

          <h2>5. Częściowe wykonanie usługi</h2>
          <p>
            W przypadku, gdy usługa została częściowo wykonana przed odstąpieniem od umowy:
          </p>
          <ul>
            <li>
              Jeżeli wykonanie usługi rozpoczęło się za wyraźną zgodą Klienta, zwrot środków będzie 
              pomniejszony o proporcjonalną wartość już wykonanych prac
            </li>
            <li>
              Usługodawca dostarczy szczegółowe rozliczenie wykonanych prac wraz z kalkulacją zwrotu
            </li>
          </ul>

          <h2>6. Rezygnacja po rozpoczęciu projektu</h2>
          <p>
            W przypadku rezygnacji z usług po rozpoczęciu realizacji projektu (po upływie 14-dniowego 
            okresu odstąpienia):
          </p>
          <ul>
            <li>
              Klient zobowiązany jest do zapłaty za prace wykonane do momentu złożenia rezygnacji
            </li>
            <li>
              Rozliczenie następuje proporcjonalnie do zakresu wykonanych prac określonych w umowie
            </li>
            <li>
              Materiały i raporty przygotowane do momentu rezygnacji mogą zostać udostępnione Klientowi 
              po uregulowaniu należności
            </li>
          </ul>

          <h2>7. Sytuacje szczególne</h2>
          <p>
            W przypadku niezadowalającej jakości świadczonych usług, Klient powinien w pierwszej kolejności 
            zgłosić reklamację. Procedura reklamacyjna została szczegółowo opisana w Regulaminie.
          </p>

          <h2>8. Wyjątki</h2>
          <p>Prawo odstąpienia od umowy nie przysługuje w następujących przypadkach:</p>
          <ul>
            <li>
              Usługi, które zostały w pełni wykonane za wyraźną zgodą Klienta przed upływem terminu odstąpienia
            </li>
            <li>
              Usługi, których przedmiotem jest świadczenie o charakterze indywidualnym, dostosowanym 
              do potrzeb konkretnego Klienta
            </li>
          </ul>

          <h2>9. Kontakt w sprawie zwrotów</h2>
          <p>
            W sprawach dotyczących zwrotów prosimy o kontakt zgodnie z danymi podanymi w sekcji Kontakt 
            na naszej stronie internetowej.
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

export default RefundPolicy;
