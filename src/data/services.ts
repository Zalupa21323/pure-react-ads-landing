// Services data for Lopotam Business Consulting

export interface Service {
  slug: string;
  title: string;
  short: string;
  price: string;
  features: string[];
  contentHtml: string;
  image: string;
}

export const services: Service[] = [
  {
    slug: 'strategia-biznesowa',
    title: 'Strategia Biznesowa',
    short: 'Kompleksowe doradztwo strategiczne dla rozwoju Twojej firmy',
    price: 'od 15 000 PLN',
    image: 'strategy',
    features: [
      'Analiza rynku i konkurencji',
      'Opracowanie strategii rozwoju',
      'Planowanie długoterminowe',
      'Wsparcie w implementacji',
    ],
    contentHtml: `
      <p>Nasza usługa strategii biznesowej pomaga firmom zdefiniować jasną ścieżkę do sukcesu. Pracujemy z Tobą nad stworzeniem kompleksowej strategii, która uwzględnia unikalne wyzwania i możliwości Twojej organizacji.</p>
      
      <h3>Co obejmuje nasza usługa?</h3>
      <p>Proces doradztwa strategicznego rozpoczyna się od dogłębnej analizy Twojej firmy, rynku i konkurencji. Nasz zespół ekspertów wykorzystuje sprawdzone metodologie i narzędzia analityczne, aby zidentyfikować kluczowe obszary wzrostu i potencjalne zagrożenia.</p>
      
      <h3>Metodologia</h3>
      <p>Stosujemy holistyczne podejście, które łączy analizę ilościową z jakościową. Przeprowadzamy wywiady z kluczowymi interesariuszami, analizujemy dane finansowe i operacyjne, oraz badamy trendy rynkowe. Na podstawie zebranych informacji opracowujemy strategię dostosowaną do specyfiki Twojej branży.</p>
      
      <h3>Korzyści</h3>
      <p>Dzięki naszej strategii biznesowej zyskasz jasny kierunek rozwoju, lepsze zrozumienie rynku i konkurencji, oraz konkretny plan działania. Pomożemy Ci zoptymalizować alokację zasobów i maksymalizować zwrot z inwestycji.</p>
      
      <h3>Proces współpracy</h3>
      <p>Współpraca podzielona jest na kilka etapów: diagnoza i analiza (2-3 tygodnie), opracowanie strategii (3-4 tygodnie), prezentacja i konsultacje (1 tydzień), wsparcie we wdrożeniu (opcjonalnie, 2-6 miesięcy). Każdy etap obejmuje regularne spotkania i szczegółowe raporty.</p>
    `
  },
  {
    slug: 'transformacja-cyfrowa',
    title: 'Transformacja Cyfrowa',
    short: 'Nowoczesne rozwiązania technologiczne dla Twojej organizacji',
    price: 'od 20 000 PLN',
    image: 'digital',
    features: [
      'Audyt cyfrowy organizacji',
      'Roadmapa transformacji',
      'Wybór i wdrożenie technologii',
      'Szkolenia zespołu',
    ],
    contentHtml: `
      <p>Transformacja cyfrowa to nie tylko technologia – to kompleksowa zmiana sposobu działania organizacji. Pomagamy firmom przejść od tradycyjnych procesów do nowoczesnych, zdigitalizowanych operacji, które zwiększają efektywność i konkurencyjność.</p>
      
      <h3>Zakres usługi</h3>
      <p>Nasz proces transformacji cyfrowej rozpoczyna się od szczegółowego audytu obecnych systemów i procesów. Identyfikujemy obszary, które najbardziej skorzystają na cyfryzacji, oraz te, które wymagają natychmiastowej modernizacji. Następnie opracowujemy spersonalizowaną roadmapę transformacji.</p>
      
      <h3>Technologie i narzędzia</h3>
      <p>Współpracujemy z wiodącymi dostawcami technologii, aby zapewnić najlepsze rozwiązania dla Twojej firmy. Od systemów ERP i CRM, przez automatyzację procesów, po rozwiązania chmurowe i analitykę danych – wybieramy narzędzia, które rzeczywiście przynoszą wartość.</p>
      
      <h3>Zarządzanie zmianą</h3>
      <p>Kluczowym elementem transformacji cyfrowej jest zarządzanie zmianą organizacyjną. Pomagamy przygotować zespół na nowe procesy, przeprowadzamy szkolenia i zapewniamy wsparcie w okresie wdrożenia. Dbamy o to, aby transformacja była płynna i nie zakłócała bieżącej działalności.</p>
      
      <h3>Oczekiwane rezultaty</h3>
      <p>Po zakończeniu transformacji cyfrowej Twoja firma będzie działać sprawniej, z lepszym dostępem do danych i możliwością szybkiego reagowania na zmiany rynkowe. Zautomatyzowane procesy zmniejszą koszty operacyjne, a nowoczesne narzędzia zwiększą produktywność zespołu.</p>
    `
  },
  {
    slug: 'analiza-finansowa',
    title: 'Analiza Finansowa',
    short: 'Profesjonalna analiza i optymalizacja finansów firmy',
    price: 'od 12 000 PLN',
    image: 'finance',
    features: [
      'Analiza sprawozdań finansowych',
      'Optymalizacja kosztów',
      'Planowanie budżetowe',
      'Prognozowanie finansowe',
    ],
    contentHtml: `
      <p>Analiza finansowa to fundament świadomego zarządzania firmą. Oferujemy kompleksowe usługi analizy finansowej, które pomogą Ci lepiej zrozumieć kondycję finansową Twojej organizacji i podejmować lepsze decyzje biznesowe.</p>
      
      <h3>Analiza sprawozdań</h3>
      <p>Przeprowadzamy dogłębną analizę sprawozdań finansowych, identyfikując kluczowe wskaźniki efektywności i obszary wymagające uwagi. Sprawdzamy płynność finansową, rentowność, zadłużenie i efektywność zarządzania aktywami.</p>
      
      <h3>Optymalizacja struktury kosztów</h3>
      <p>Analizujemy strukturę kosztów Twojej firmy, identyfikując możliwości oszczędności bez negatywnego wpływu na jakość produktów czy usług. Pomagamy w negocjacjach z dostawcami, optymalizacji procesów i eliminacji nieefektywnych wydatków.</p>
      
      <h3>Budżetowanie i prognozowanie</h3>
      <p>Tworzymy realistyczne budżety oparte na historycznych danych i prognozach rynkowych. Nasze modele finansowe pomagają w planowaniu inwestycji, zarządzaniu przepływami pieniężnymi i przewidywaniu przyszłych potrzeb kapitałowych.</p>
      
      <h3>Reporting i monitorowanie</h3>
      <p>Opracowujemy system raportowania finansowego dostosowany do potrzeb Twojej firmy. Regularne raporty i dashboardy pozwalają na bieżąco monitorować kluczowe wskaźniki i szybko reagować na ewentualne problemy.</p>
      
      <h3>Wsparcie decyzyjne</h3>
      <p>Nasi eksperci są dostępni do konsultacji przy podejmowaniu strategicznych decyzji finansowych. Pomagamy w ocenie opłacalności inwestycji, wyborze źródeł finansowania i planowaniu ekspansji.</p>
    `
  },
  {
    slug: 'zarzadzanie-hr',
    title: 'Zarządzanie HR',
    short: 'Optymalizacja procesów personalnych i rozwój talentów',
    price: 'od 10 000 PLN',
    image: 'hr',
    features: [
      'Audyt procesów HR',
      'Rekrutacja i onboarding',
      'Systemy motywacyjne',
      'Rozwój kompetencji',
    ],
    contentHtml: `
      <p>Skuteczne zarządzanie zasobami ludzkimi to klucz do sukcesu każdej organizacji. Oferujemy kompleksowe usługi HR, które pomogą Ci przyciągnąć, rozwijać i zatrzymać najlepszych pracowników.</p>
      
      <h3>Audyt HR</h3>
      <p>Rozpoczynamy od kompleksowego audytu obecnych procesów HR w Twojej firmie. Analizujemy rekrutację, onboarding, systemy motywacyjne, rozwój pracowników i kulturę organizacyjną. Identyfikujemy mocne strony i obszary wymagające poprawy.</p>
      
      <h3>Optymalizacja rekrutacji</h3>
      <p>Pomagamy w budowie efektywnego procesu rekrutacyjnego, który przyciągnie najlepszych kandydatów. Od opracowania employer branding, przez optymalizację ogłoszeń, po strukturyzację procesu selekcji – dbamy o każdy szczegół.</p>
      
      <h3>Systemy oceny i rozwoju</h3>
      <p>Wdrażamy nowoczesne systemy oceny pracowników, które są sprawiedliwe, przejrzyste i motywujące. Pomagamy w tworzeniu ścieżek kariery, planów rozwoju i programów szkoleniowych dostosowanych do potrzeb organizacji.</p>
      
      <h3>Kultura organizacyjna</h3>
      <p>Wspieramy w budowaniu pozytywnej kultury organizacyjnej, która sprzyja zaangażowaniu i produktywności. Przeprowadzamy badania satysfakcji pracowników, opracowujemy programy benefitów i pomagamy w komunikacji wewnętrznej.</p>
      
      <h3>Compliance i dokumentacja</h3>
      <p>Zapewniamy zgodność procesów HR z obowiązującymi przepisami prawa pracy. Pomagamy w przygotowaniu niezbędnej dokumentacji, regulaminów i procedur.</p>
    `
  },
  {
    slug: 'marketing-i-sprzedaz',
    title: 'Marketing i Sprzedaż',
    short: 'Skuteczne strategie marketingowe i optymalizacja sprzedaży',
    price: 'od 18 000 PLN',
    image: 'marketing',
    features: [
      'Strategia marketingowa',
      'Analiza ścieżki klienta',
      'Optymalizacja procesów sprzedaży',
      'Marketing cyfrowy',
    ],
    contentHtml: `
      <p>Skuteczny marketing i sprawna sprzedaż to motor wzrostu każdej firmy. Nasze usługi doradcze w zakresie marketingu i sprzedaży pomagają firmom zwiększyć rozpoznawalność marki, pozyskać więcej klientów i maksymalizować przychody.</p>
      
      <h3>Strategia go-to-market</h3>
      <p>Opracowujemy kompleksowe strategie wprowadzania produktów lub usług na rynek. Analizujemy grupy docelowe, konkurencję, kanały dystrybucji i komunikacji. Tworzymy plan działania, który maksymalizuje szanse na sukces.</p>
      
      <h3>Optymalizacja ścieżki klienta</h3>
      <p>Mapujemy całą ścieżkę zakupową klienta – od pierwszego kontaktu z marką, przez proces decyzyjny, aż po etap posprzedażowy. Identyfikujemy punkty styku, które wymagają optymalizacji, aby zwiększyć konwersję i satysfakcję klientów.</p>
      
      <h3>Marketing cyfrowy</h3>
      <p>W dzisiejszym świecie obecność online jest niezbędna. Pomagamy w budowie strategii digital marketingowej obejmującej SEO, content marketing, social media, email marketing i kampanie płatne. Wszystko oparte na danych i mierzalnych KPI.</p>
      
      <h3>Proces sprzedaży</h3>
      <p>Optymalizujemy procesy sprzedażowe, od generowania leadów, przez kwalifikację i negocjacje, po zamknięcie transakcji. Wdrażamy systemy CRM, szkolimy zespoły sprzedażowe i budujemy skuteczne skrypty i materiały sprzedażowe.</p>
      
      <h3>Analiza i raportowanie</h3>
      <p>Tworzymy systemy analityczne, które pozwalają mierzyć efektywność działań marketingowych i sprzedażowych. Regularne raporty i dashboardy umożliwiają bieżące monitorowanie kluczowych wskaźników i szybką optymalizację działań.</p>
    `
  },
  {
    slug: 'optymalizacja-operacyjna',
    title: 'Optymalizacja Operacyjna',
    short: 'Zwiększenie efektywności procesów biznesowych',
    price: 'od 14 000 PLN',
    image: 'operations',
    features: [
      'Mapowanie procesów',
      'Lean management',
      'Automatyzacja',
      'Redukcja kosztów operacyjnych',
    ],
    contentHtml: `
      <p>Optymalizacja operacyjna to systematyczne doskonalenie procesów biznesowych w celu zwiększenia efektywności, redukcji kosztów i poprawy jakości. Pomagamy firmom działać sprawniej i osiągać lepsze wyniki przy mniejszym nakładzie zasobów.</p>
      
      <h3>Analiza procesów</h3>
      <p>Rozpoczynamy od szczegółowego mapowania wszystkich kluczowych procesów w Twojej organizacji. Identyfikujemy wąskie gardła, nieefektywności i marnotrawstwo. Analizujemy przepływ pracy, czas realizacji zadań i wykorzystanie zasobów.</p>
      
      <h3>Metodologia Lean</h3>
      <p>Stosujemy sprawdzone metodologie Lean Management i Six Sigma, aby wyeliminować marnotrawstwo i zoptymalizować procesy. Wdrażamy systemy ciągłego doskonalenia, które pozwalają na systematyczne podnoszenie efektywności operacyjnej.</p>
      
      <h3>Automatyzacja procesów</h3>
      <p>Identyfikujemy procesy, które można zautomatyzować, aby zmniejszyć obciążenie pracowników rutynowymi zadaniami i zminimalizować ryzyko błędów. Od prostych automatyzacji po zaawansowane rozwiązania RPA – wybieramy narzędzia adekwatne do potrzeb.</p>
      
      <h3>Zarządzanie łańcuchem dostaw</h3>
      <p>Optymalizujemy zarządzanie zapasami, logistykę i relacje z dostawcami. Pomagamy w redukcji kosztów zakupu, skróceniu czasu realizacji zamówień i zwiększeniu niezawodności dostaw.</p>
      
      <h3>Mierzenie i monitorowanie</h3>
      <p>Wdrażamy systemy KPI, które pozwalają mierzyć efektywność procesów i identyfikować obszary wymagające dalszej optymalizacji. Regularne przeglądy i raporty pomagają utrzymać osiągnięte rezultaty i kontynuować doskonalenie.</p>
      
      <h3>Change management</h3>
      <p>Zmiany operacyjne wymagają zaangażowania całego zespołu. Prowadzimy szkolenia, wspieramy w komunikacji zmian i pomagamy w budowie kultury ciągłego doskonalenia.</p>
    `
  },
];
