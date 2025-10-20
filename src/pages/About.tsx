const About = () => {
  return (
    <div className="about-page">
      <div className="page-hero">
        <div className="container">
          <h1 className="page-title">O nas</h1>
          <p className="page-description">
            Poznaj zespół ekspertów, który pomaga firmom osiągać sukces
          </p>
        </div>
      </div>

      <div className="section">
        <div className="container content-container">
          <h2>Kim jesteśmy?</h2>
          <p>
            Lopotam to zespół doświadczonych konsultantów biznesowych, którzy od ponad 15 lat pomagają firmom 
            w realizacji ich celów strategicznych. Nasza misja to transformacja wyzwań biznesowych w możliwości wzrostu.
          </p>
          <p>
            Specjalizujemy się w doradztwie strategicznym, transformacji cyfrowej, optymalizacji procesów 
            i zarządzaniu zmianą. Pracujemy z firmami z różnych branż – od start-upów po międzynarodowe korporacje.
          </p>

          <h2>Nasza filozofia</h2>
          <p>
            Wierzymy, że każda firma jest unikalna i wymaga indywidualnego podejścia. Nie stosujemy gotowych 
            szablonów – każdy projekt rozpoczynamy od dogłębnej analizy specyfiki Twojej organizacji, rynku i konkurencji.
          </p>
          <p>
            Nasza praca opiera się na trzech filarach: innowacyjność, pragmatyzm i współpraca. Nie tylko doradzamy – 
            pracujemy z Tobą ramię w ramię, wspierając w implementacji rozwiązań i zapewniając trwałe rezultaty.
          </p>

          <h2>Dlaczego warto z nami współpracować?</h2>
          <ul className="benefits-list">
            <li>
              <strong>Doświadczenie:</strong> Ponad 15 lat pracy z firmami z różnych sektorów i branż
            </li>
            <li>
              <strong>Zespół ekspertów:</strong> Specjaliści z wieloletnim doświadczeniem w consulting i zarządzaniu
            </li>
            <li>
              <strong>Kompleksowość:</strong> Od strategii po implementację – wspieramy na każdym etapie
            </li>
            <li>
              <strong>Rezultaty:</strong> 95% projektów zakończonych sukcesem i osiągnięciem założonych celów
            </li>
            <li>
              <strong>Partnerstwo:</strong> Budujemy długoterminowe relacje oparte na zaufaniu i transparentności
            </li>
          </ul>
        </div>
      </div>

      <div className="section bg-alt">
        <div className="container">
          <h2 className="text-center">Najczęściej zadawane pytania</h2>
          <div className="faq-grid">
            <div className="faq-item card">
              <h3 className="faq-question">Jak wygląda proces współpracy?</h3>
              <p className="faq-answer">
                Proces współpracy rozpoczyna się od bezpłatnej konsultacji, podczas której omawiamy Twoje potrzeby 
                i wyzwania. Następnie przygotowujemy propozycję projektu, która zawiera szczegółowy zakres prac, 
                harmonogram i wycenę. Po akceptacji warunków rozpoczynamy współpracę zgodnie z ustalonym planem.
              </p>
            </div>

            <div className="faq-item card">
              <h3 className="faq-question">Jak długo trwa typowy projekt?</h3>
              <p className="faq-answer">
                Czas trwania projektu zależy od jego zakresu i złożoności. Projekty strategiczne trwają zwykle 
                2-3 miesiące, transformacje cyfrowe 3-6 miesięcy, a optymalizacja procesów 1-3 miesiące. 
                Każdy projekt jest dostosowany do indywidualnych potrzeb klienta.
              </p>
            </div>

            <div className="faq-item card">
              <h3 className="faq-question">Czy współpracujecie z małymi firmami?</h3>
              <p className="faq-answer">
                Tak, współpracujemy z firmami różnej wielkości – od małych przedsiębiorstw po duże korporacje. 
                Nasze rozwiązania są skalowalne i dostosowane do budżetu i potrzeb każdego klienta.
              </p>
            </div>

            <div className="faq-item card">
              <h3 className="faq-question">Czy oferujecie wsparcie po zakończeniu projektu?</h3>
              <p className="faq-answer">
                Tak, oferujemy różne formy wsparcia posprzedażowego, w tym konsultacje follow-up, 
                monitoring wdrożonych rozwiązań i pomoc w optymalizacji. Wierzymy w budowanie długoterminowych 
                relacji z naszymi klientami.
              </p>
            </div>

            <div className="faq-item card">
              <h3 className="faq-question">W jakich branżach się specjalizujecie?</h3>
              <p className="faq-answer">
                Pracujemy z firmami z różnych branż, w tym technologia, e-commerce, produkcja, usługi profesjonalne, 
                finanse i wiele innych. Nasze uniwersalne metodologie i doświadczenie pozwalają nam skutecznie 
                wspierać organizacje niezależnie od specyfiki branży.
              </p>
            </div>

            <div className="faq-item card">
              <h3 className="faq-question">Jak wygląda struktura cenowa?</h3>
              <p className="faq-answer">
                Oferujemy elastyczne modele cenowe dostosowane do charakteru projektu – od stawek godzinowych, 
                przez pakiety projektowe, po modele success fee. Każda wycena jest przygotowywana indywidualnie 
                po analizie potrzeb klienta.
              </p>
            </div>
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

        .content-container h2 {
          font-size: var(--font-size-3xl);
          margin-top: var(--spacing-3xl);
          margin-bottom: var(--spacing-lg);
        }

        .content-container h2:first-child {
          margin-top: 0;
        }

        .content-container p {
          font-size: var(--font-size-base);
          color: var(--color-text-secondary);
          line-height: 1.8;
          margin-bottom: var(--spacing-lg);
        }

        .benefits-list {
          list-style: none;
          margin-top: var(--spacing-xl);
        }

        .benefits-list li {
          padding-left: var(--spacing-xl);
          margin-bottom: var(--spacing-lg);
          position: relative;
          color: var(--color-text-secondary);
          line-height: 1.8;
        }

        .benefits-list li::before {
          content: '✓';
          position: absolute;
          left: 0;
          color: var(--color-primary);
          font-weight: bold;
          font-size: var(--font-size-xl);
        }

        .benefits-list strong {
          color: var(--color-text-primary);
        }

        .faq-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: var(--spacing-xl);
          margin-top: var(--spacing-2xl);
        }

        .faq-item {
          padding: var(--spacing-xl);
        }

        .faq-question {
          font-size: var(--font-size-lg);
          margin-bottom: var(--spacing-md);
          color: var(--color-primary);
        }

        .faq-answer {
          color: var(--color-text-secondary);
          line-height: 1.7;
          margin: 0;
        }

        @media (max-width: 768px) {
          .faq-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default About;
