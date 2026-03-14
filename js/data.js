// #region Studium – Sem 1–4
const data = [
  {
    semester: 1,
    label: "1. Semester",
    modules: [
      {
        name: "Software-Projekt 1",
        topics: [
          {
            name: 'Umsetzen der Lehrinhalte des parallelen Kurses "Programmieren 1".',
            items: [],
          },
          {
            name: "Weiteres:",
            items: [
              "Teamarbeit",
              "Selbstreflexion",
              "Kommunikation technischer Inhalte",
              "Codemanagement",
            ],
          },
        ],
      },
      {
        name: "Programmieren 1",
        topics: [
          {
            name: "Konzepte der objektorientierten Programmierung (Klassen, Objekte etc.)",
            items: [],
          },
          {
            name: "Grundlagen der Programmierung (Datentypen, Kontrollstrukturen etc.)",
            items: [],
          },
          {
            name: "grundlegende Prinzipien und Praktiken von :",
            items: [
              "Clean Code",
              "Software Qualitätssicherung (Dokumentation und Unit-Test)",
              "Vererbung",
              "Komposition",
              "Polymorphie",
            ],
          },
        ],
      },
      {
        name: "Datenbanken",
        topics: [
          {
            name: "Inhalte",
            items: [
              "relationale Algebra",
              "Entity-Relationship-Design",
              "SQL DDL/DML",
              "effiziente und korrekte Datenbankabfragen in SQL",
              "Indexe",
              "Trigger",
              "Transaktionen/ACID",
            ],
          },
        ],
      },
      {
        name: "Information und Codierung",
        topics: [
          {
            name: "Digitale Informationsverarbeitung & Codierung",
            items: [
              "Algorithmus-Begriff, Euklidischer Algorithmus",
              "Digitale Grundeinheiten: Bit, Byte, Wort",
              "Komplement-Darstellung: Einer- und Zweierkomplement",
              "Rechnen im Zahlenkreis: Carry, Borrow, Overflow, Sign Extension",
            ],
          },
          {
            name: "Digitaltechnik",
            items: [
              "Logische Funktionen und Gatter: INV, AND, OR, NAND, NOR, XOR",
              "Wahrheitstabellen und kombinatorische Schaltungen: Halb-/Voll-Addierer, Subtrahierer, Dekoder (z.B. BCD → 7-Segment), Komparator, Codeumwandlungen",
              "Sequentielle Logik: Zähler, Schieberegister, einfacher Automat (z.B. Ampel)",
            ],
          },
          {
            name: "Informationstheorie",
            items: [
              "Grundlagen nach Shannon",
              "Entropie, Informationsgehalt, Redundanz",
              "Berechnung der Entropie",
            ],
          },
          {
            name: "Quellencodierung",
            items: [
              "Redundanz- und Irrelevanzreduktion, Präfixfreiheit",
              "Huffman, Arithmetische Codierung, Lauflängencodierung, Lempel-Ziv",
              "Überblick JPEG, MPEG (nur Ansätze)",
              "Einsatzgebiete der Codierungen",
            ],
          },
          {
            name: "Kanalcodierung",
            items: [
              "Kanalkapazität nach Shannon",
              "Hamming-Distanz",
              "Fehlererkennung: Parität, CRC, Checksumme",
              "Fehlerkorrektur: Hamming-Code, Block-Code, Faltungscode (Überblick)",
            ],
          },
        ],
      },
      {
        name: "Grundlagen der Elektrotechnik und Digitaltechnik",
        topics: [
          {
            name: "Grundlagen",
            items: [
              "Grundbegriffe: Ladung, Kraft, Energie, Leistung, Spannung",
              "Strom und Widerstand: Widerstand, Strom, Ohmsches Gesetz",
              "Schaltungen: Kirchhoffsche Gesetze, Reihen- und Parallelschaltungen",
              "Reaktive Bauteile: Induktivität, Kapazität, Ein- und Ausschaltverhalten",
              "Signalformen: Zeit- und Frequenzraum, Amplitude, Frequenz, Bandbreite, Fourier-Transformation, Spektrum",
              "Filter: Hochpass, Tiefpass, Bezug zur Informatik",
            ],
          },
          {
            name: "Halbleitertechnik",
            items: [
              "Dioden, Transistoren: Funktionsweise, Push-Pull und Open-Drain Outputs",
              "Digitaltechnik: Logikgatter, Logikfamilien, Zusammenschaltung zu D-Flipflop, Zusammenhang Boolsche Algebra",
            ],
          },
          {
            name: "Felder & Wellen",
            items: [
              "Elektrische und magnetische Felder",
              "Elektromagnetische Wellen: Frequenz, Wellenlänge, Ausbreitungsgeschwindigkeit",
              "Wechselwirkung mit Medium: Brechung, Reflexion, Dispersion, Absorption (z. B. Glasfaser), Dämpfung, SNR",
            ],
          },
        ],
      },
      {
        name: "Analysis 1",
        topics: [
          {
            name: "Konzepte der Differential- und Integralrechnung",
            items: [
              "Ableitung",
              "Stammfunktionen und Flächeninhalte bei Polynomen",
            ],
          },
          {
            name: "Folgen, Reihen (mit Summen) und Grenzwerte",
            items: [
              "Folgen (direkt, rekursiv, arithmetisch/geometrisch)",
              "Grenzwertbegriff (Rechenregeln, Limes einer Funktion), Stetigkeit",
              "Reihen (arithmetisch/geometrisch)",
            ],
          },
          {
            name: "Erweiterung der Differentialrechnung",
            items: [
              "Ableitung elementarer Funktionen",
              "Ableitungsregeln",
              "Kurvendiskussion",
              "Gebrochen rationale Funktionen (Polstellen, hebbare Definitionslücken, Asymptoten)",
              "Extremwertaufgaben",
              "Newton-Verfahren",
            ],
          },
        ],
      },
      {
        name: "Diskrete Mathematik",
        topics: [
          {
            name: "Inhalte",
            items: [
              "Grundbegriffe: Zahlenmengen, Aussagen, Prädikate und Quantoren",
              "Mengen: Elemente, Teilmengen und Extensionalität",
              "Mengen: Aussonderungs- und Ersetzungsprinzip",
              "Mengenoperationen: Potenzmenge, Schnittmenge, Vereinigungsmenge",
              "Mächtigkeitsbegriff: Abzählbarkeit und Überabzählbarkeit, erstes und zweites",
              "Diagonalargument",
              "Relationen: Tupel und Produktmengen",
              "Funktionen als Relationen",
              "Äquivalenzrelationen, Äquivalenzklassen und Partitionen",
              "(Halb-) Ordungsrelationen, Hasse Diagramme, Satz von Marczewski-Szpilrajn",
              "Rekursive Strukturen: Natürliche Zahlen, Peano Axiome und Induktion, Wohlfundierte",
              "Induktion, induktive Definitionen und strukturelle Induktion.",
              "Elementare Zahlentheorie: Teilbarkeit und Euklidischer Algorithmus",
              "Primzahlen und Primfaktorzerlegung",
              "Modulare Arithmetik und das Lemma von Bézout",
              "Chinesischer Restsatz und Lösen simultaner Kongruenzen",
              "Kleiner Satz von Fermat",
            ],
          },
        ],
      },
    ],
  },
  {
    semester: 2,
    label: "2. Semester",
    modules: [
      {
        name: "Programmieren 2",
        topics: [
          {
            name: "Erweiterte Java-Sprachkonzepte",
            items: [
              "Verschachtelte-, Innere- & Anonyme-Klassen",
              "Funktionale Programmierung: Lambda-Ausdrücke / Funktionale Interfaces",
              "Methodenreferenzen, Funktionen als Argumente und Rückgabewerte",
              "Funktionale Streams",
            ],
          },
          {
            name: "Nebenläufigkeit",
            items: [
              "Grundlagen von Nebenläufigkeit",
              "Der Thread Lebenszyklus",
              "Thread-Management: Executor-Services / Thread-Pooling",
              "Callables / Futures",
              "Thread-Safety, Atomare Typen",
              "Kooperation von Threads: Wechselseitiger Ausschluss & Zustandssynchronisation",
              "Erweitertes Monitor-Konzept, Lock & Conditions",
              "Vermeiden von Deadlocks",
            ],
          },
          {
            name: "Einfache grafische Benutzeroberflächen (GUIs)",
            items: [
              "GUI-Prinzipien, -Architektur, -Komponenten und -Layout",
              "Entwickeln von GUI-Anwendungen mittels JavaFX und FXML",
              "Model-View-Controller / Presenter & Observer-Pattern",
              "Dynamik von Benutzeroberflächen: Ereignisverarbeitung",
            ],
          },
          {
            name: "Ein- und Ausgabe von Daten – Java IO",
            items: [
              "Umgang mit dem Filesystem (Dateien & Verzeichnisse)",
              "Lesen und Schreiben von Dateien",
              "Das Decorator Pattern",
              "Umgang mit Resourcen, Properties & Resource-Bundle",
              "Datencodierung und Zeichensätze",
            ],
          },
          {
            name: "Mock-Testing",
            items: [
              "Prinzipien und Ökonomie von Software Testing",
              "Testisolation: Testdoubles, Stubbing & Mocking",
              "Zustandstests vs. Verhaltensverifikation",
              "Erstellen von Mock-Tests",
            ],
          },
        ],
      },
      {
        name: "Software-Projekt 2",
        topics: [
          {
            name: "Wenden die Lerninhalte aus Programmieren 1 & 2 an.",
            items: [],
          },
          {
            name: "Inhalte",
            items: [
              "Softwareanalyse und Refactoring",
              "Projektplanung und Fortschrittstracking",
              "Anwendung von Entwicklungswerkzeugen im Team",
              "Ideenfindung und Evaluation",
              "Reflexion von Projektverlauf und Ergebnis",
            ],
          },
        ],
      },
      {
        name: "Systemnahe Programmierung",
        topics: [
          {
            name: "C und Unix-ähnliche Betriebssysteme sind eng verwandt und in der heutigen Informatik unabdingbar.",
            items: [],
          },
          {
            name: "Inhalte",
            items: [
              "Grundlegende Programmelemente (Sprachelemente, Datentypen, Variablen, Konstanten, Deklarationen, Operatoren, Ausdrücke, Kontrollstrukturen, Strukturen)",
              "Funktionen, Arrays, Pointer, Memory Management",
              "Modulare Programmierung (inkl. Präprozessor, Compiling und Linking)",
              "MISRA C",
              "Prozesse und Threads",
              "Koordination und Kooperation",
              "Prozesssynchronisation",
              "Interprozesskommunikation",
              "Datenhandhabung",
              "Speicherverwaltung",
              "Datei-Systeme",
            ],
          },
        ],
      },
      {
        name: "Kommunikationstechnik",
        topics: [
          {
            name: "Inhalte",
            items: [
              "Local Area Networks (Ethernet, Bridging)",
              "Internet Protokolle (IP, Routing)",
              "Transport Layer (UDP, TCP)",
              "Netzwerk Applikationen, Infrastrukturdienste und Protokolle (DNS, DHCP, NAT, HTTP etc.)",
              "Schnittstelle zum Transport Layer (Socket-API)",
            ],
          },
        ],
      },
      {
        name: "Theoretische Informatik",
        topics: [
          {
            name: "Motivation der theoretischen Informatik:",
            items: [
              "Formale Berechnungsmodelle - Grundlegende Prinzipien erkennen, unabhängig von Hard- und Software - Grenzen der automatischen Berechnungen",
            ],
          },
          {
            name: "(1) Formale Sprachen / Automatentheorie:",
            items: [
              "Grundlegende Definitionen der Formalen Sprachen",
              "Reguläre Sprachen, endlicher Automat (DEA, NEA, e-NEA)",
              "Kontextfreie Sprachen, Kellerautomaten",
              "(Rekursive Sprachen), Turingmaschine (TM)",
              "Chomsky-Hierarchie",
            ],
          },
          {
            name: "(2) Berechenbarkeit und Algorithmus-Begriff:",
            items: [
              "Berechenbare Funktionen Church'sche These",
              "Äquivalenz von TM und Computer",
              "Berechenbarkeit und Programmier-Sprachen: GOTO-, While- und Loop-Programme.",
              "Algorithmus-Begriff",
              "Primitive Rekursion",
              "Nicht-Entscheidbarkeit und Entscheidbarkeit: Diagonalisierungssprache Ld, Satz von Rice, Fleissige Bieber",
              "Semi-entscheidbare Probleme: Halteproblem, Game-of-Life, Collatz-Zahlen",
              "Reduktion",
            ],
          },
          {
            name: "(3) Komplexitätstheorie",
            items: [
              "Komplexität von Algorithmen",
              "O-Notation (Omega-Notation)",
              "polynomiale Funktionen und exponentielle Funktionen",
              "Klasse P, Klasse NP",
              "NP-vollständig, NP-schwierig",
              "(Polynomialzeit-Reduktion)",
            ],
          },
        ],
      },
    ],
  },
  {
    semester: 3,
    label: "3. Semester",
    modules: [
      {
        name: "Software-Projekt 3",
        topics: [
          {
            name: "In diesem Modul entwickeln Sie eine grössere objektorientierte Softwareapplikation.",
            items: [
              "Dabei werden die vermittelten Analyse- und Entwurfs-Kompetenzen aus dem Modul SWEN1 angewendet (Wissenstransfer).",
            ],
          },
        ],
      },
      {
        name: "Software-Entwicklung 1",
        topics: [
          {
            name: "Dieses Modul vermittelt die nötigen Analyse- und Entwurfs-Kompetenzen, um grössere und komplexere Softwareapplikationen entwickeln und realisieren zu können.",
            items: [],
          },
          {
            name: "Einführung und Softwareentwicklungsprozessmodelle (4 Lektionen)",
            items: [
              "Überblick über Softwareentwicklungsprozessmodelle und deren Anwendungsgebiete (Wasserfall, iterativ-inkrementell und agile)",
              "Ablauf und Artefakte in einem iterativ-inkrementellen, Use-Case-getriebenen und architekturzentrierten Softwareentwicklungsprozess",
            ],
          },
          {
            name: "Anforderungsanalyse (16 Lektionen)",
            items: [
              "Einführung in Usability und UX (Contextual Inquiry, Personas und Szenarien, UI-Sketching & Prototyping)",
              "Erhebung und Kommunikation von funktionalen Anforderungen mit Use Cases (UML-Use-Case-Diagramm, Use-Case-Spezifikation)",
              "Erhebung und Kommunikation von nicht funktionalen Anforderungen",
              "(Qualitätsanforderungen, Randbedingungen)",
              "Modellierung der Fachlichkeit und Begriffe des Anwenders (Domänenmodell) und Einführung in Domain Driven Design (DDD, konzeptuelles UML-Klassendiagramm)",
            ],
          },
          {
            name: "Softwarearchitektur und Design (36 Lektionen)",
            items: [
              "Entwurf und Modellierung einer Softwarearchitektur (4+1 Sicht, UML-Paketdiagramm, UML-Deploymentdiagramm)",
              "Einführung in Clean Architecture (SOLID Prinzipien, Schichtenarchitektur, Onion Architecture)",
              "Use-Case-Realisierung und Klassendesign (Responsibility Driven Design (RDD), UML-Klassendiagramm, UML-Sequenzdiagramm, UML-Kommunikationsdiagramm, UML-Zustandsdiagramm, UML-Aktivitätsdiagramm)",
              "Entwurf mit Design Patterns (GoF: Factory, Singleton, Adaptor, Bridge, Composite, Decorator, Facade, Proxy, Chain of Responsibility, Observer, State, Strategy, Visitor)",
              "Verschiedene Vertiefungsthemen wie zum Beispiel:Verteilte Systeme, GUI-Architekturen, Persistenz, Framework-Design",
            ],
          },
        ],
      },
      {
        name: "Web-Entwicklung",
        topics: [
          {
            name: "Einführung in JavaScript mit Node.js (12 Lektionen)",
            items: [
              "JS Engines, ECMAScript- und JavaScript-Versionen und Alternativen, Transpiler",
              "Grundlagen: Variablen, Datentypen, Arrays, Funktionen",
              "Objektmodell: Objekte, Konstruktoren, Prototypen, Klassen",
              "Asynchrone Ausführung von Funktionen, Callbacks, Event Queue, Promises",
              "Webserver mit Node.js: Modulsystem, JSON, RESTful APIs",
            ],
          },
          {
            name: "JavaScript im Browser (8 Lektionen)",
            items: [
              "Document Object Model",
              "Ereignisbehandlung im Browser",
              "Asynchrone Client-Server-Kommunikation (Ajax, Fetch-API)",
              "Zustand (Cookies, Sessions) und Authentisierung",
            ],
          },
          {
            name: "Web Framework (8 Lektionen)",
            items: [
              "Bau eines eigenen Frameworks für Single Page Applications",
              "Komponentenarchitektur und render-Methode",
              "Zustand von Komponenten, Properties, Komponententypen",
              "Lebenszyklus von Komponenten",
              "Ereignisbehandlung und Routnig",
              "Zustandscontainer",
            ],
          },
        ],
      },
      {
        name: "Computertechnik 1",
        topics: [
          {
            name: "Organisation eines Computersystems",
            items: [
              "Informationsdarstellung und Übersetzung von Programmen",
              "Hardware-Architektur: CPU, Memory, I/O, Bus",
              "Komponenten und Funktionsweise einer CPU",
              "Instruktionssatz: Codierung von Instruktionen und Operanden",
              "Befehlsverarbeitung",
              "Leistungsmerkmale von Prozessoren",
            ],
          },
          {
            name: "Datentransfer und Speicherorganisation",
            items: [
              "Adressierungsarten",
              "Speicherzugriff",
              "Integer Datentypen, Arrays, Pointers",
              "Memory Map",
              "Endianess",
            ],
          },
          {
            name: "Arithmetic Logic Unit (ALU)",
            items: [
              "Arithmetische und logische Operationen",
              "Prozessorstatusregister und Flags",
              "Rechnen mit der ALU",
              "Integer Casting",
            ],
          },
          {
            name: "Programmablaufsteuerung, Funktionen und Unterprogramme",
            items: [
              "Vergleichs- und Sprungbefehle",
              "Strukturierte Codierung",
              "Abbildung von KontrollstrukturenParameterübergabe und Stackframe",
            ],
          },
          {
            name: "Exceptional Control Flow",
            items: [
              "Hardware Interrupts",
              "Interrupt Service Routine",
              "Vektortabelle",
              "Exceptions (Traps)",
            ],
          },
          {
            name: "Linking",
            items: [
              "Aufgaben und Funktionsweise eines Linkers",
              "Address Resolution und Relocation",
              "Linker Map und Symbol Table",
            ],
          },
        ],
      },
      {
        name: "Algorithmen und Datenstrukturen",
        topics: [
          {
            name: "Allgemeine Konzepte",
            items: [
              "Asymptotische Komplexität (O-Notation)",
              "Analyse von Algorithmen (Laufzeit und Speicherplatz)",
            ],
          },
          {
            name: "Algorithmen-Paradigmen",
            items: [
              "Rekursion",
              "Backtracking",
              "Greedy-Algorithmen",
              "Divide and Conquer",
            ],
          },
          {
            name: "Datenstrukturen",
            items: [
              "Stack und Queue",
              "Liste",
              "Hash-Tabelle",
              "Bäume",
              "Graphen",
            ],
          },
          {
            name: "Algorithmen",
            items: [
              "Suchen",
              "Baum-Traversierung",
              "Rotation in ausgeglichenen Suchbäumen",
              "Hash-Tabellen",
              "Kürzeste Wege in Graphen",
              "Breiten und Tiefensuche in Graphen",
              "Sortierverfahren",
              "Untere Laufzeit-Schranke",
            ],
          },
          {
            name: "Algorithmen in Java",
            items: [
              "Objects/equals/hashCode",
              "Comparator/Comparable",
              "Collections",
              "Generics",
              "Iterator",
            ],
          },
        ],
      },
    ],
  },
  {
    semester: 4,
    label: "4. Semester",
    modules: [
      {
        name: "Software-Projekt 4",
        topics: [
          {
            name: "Die Studierenden führen in einem Team von etwa 7 (±2) Personen ein Software-Entwicklungsprojekt - von der Projektvision bis zur kundengerechten Software - mit SCRUM durch",
            items: [],
          },
        ],
      },
      {
        name: "Software-Entwicklung 2",
        topics: [
          {
            name: "In dieser Vorlesung lernen die Studierenden die wichtigsten agilen Prinzipien, Praktiken und Werte von SCRUM sowie XP kennen",
            items: [],
          },
        ],
      },
      {
        name: "Betriebssysteme",
        topics: [
          {
            name: "Inhalte",
            items: [
              "Analyse und Vergleich von MBR- und UEFI-Bootprozessen in Linux-Systemen: Funktionsweise, Vor- und Nachteile.",
              "Entwicklung eines minimalistischen Bootloaders zur Initialisierung eines Testsystems.",
              "Vergleich verschiedener Prozess-Scheduling-Algorithmen (z. B. Round-Robin, CFS, Priority) und deren Einfluss auf Systemleistung.",
              "Messung und Steuerung von Prozessressourcen mittels cgroups: Limits, Prioritäten und Isolation.",
              "Untersuchung der Speicherverwaltung in Linux: Virtueller Speicher, Paging, Swapping und Seitentabellen.",
              "Entwicklung eines einfachen Linux-Kernelmoduls oder Gerätetreibers unter Nutzung von DKMS.",
              "Vergleich von Dateisystemen und Overlay Filesystems hinsichtlich Performance, Zuverlässigkeit und RAM-/TMP-Usage.",
              "Analyse und Nutzung des Logical Volume Managers (LVM): Partitionen, Volumes und Storage-Management.",
              "Implementierung und Performanceanalyse virtueller Maschinen mit KVM/QEMU und Libvirt.",
              "Untersuchung von Systemaufrufen und Netzwerktreibern im Betriebssystem: Funktionsweise und Performance-Effekte.",
            ],
          },
        ],
      },
      {
        name: "Computertechnik 2",
        topics: [
          {
            name: "Das Modul zeigt den Ausbau eines Prozessors zu einem vollständigen Computer System.",
            items: [],
          },
          {
            name: "Vom Prozessor zum System",
            items: [
              "Aufbau eines Microcontrollers",
              "Funktionsweise Systembus",
              "Memory Map und Adressdekodierung",
              "Funktion und Verwendung von Kontroll- und Statusregistern.",
            ],
          },
          {
            name: "Einsatz von Peripherieschaltungen",
            items: [
              "Anschluss von IOs über GPIO",
              "Serieller Datentransfer: UART / SPI / I2C",
              "Timer / Counter und ihre Anwendungen",
              "Analog Digital Converter (ADC)",
              "Hardware Abstraction",
            ],
          },
          {
            name: "Speicherhierarchien",
            items: [
              "Speichertechnologien: Volatile (SRAM, DRAM) vs. non-volatile (ROM, Flash, EEPROM)",
              "Anschluss von externen Speicherbausteinen",
              "Cache: Temporal and Spatial Locality, Auswirkungen auf die Software",
            ],
          },
          {
            name: "Ablaufsteuerung von Programmen",
            items: [
              "Strukturierung eines Programmes in Module",
              "Software State-Machines (State-Event Model)",
              "Erkennen von Events: Polling vs. Interrupt-driven IO",
              "Interrupt Performance und Latency",
            ],
          },
          {
            name: "Hardwarenahe Programmierpraktika",
            items: ["Arbeiten mit Cross-Compiler, Linker, Loader und Debugger"],
          },
        ],
      },
      {
        name: "IT-Sicherheit",
        topics: [
          {
            name: "Inhalte",
            items: [
              "Einführung in die Kryptographie (Secret and Public Key Kryptographie, Hashfunktionen, Signaturen, Message Authentication Codes)",
              "Zertifikate und Public Key Infrastructure",
              "Sichere Protokolle (TLS, Quic, WPA2, etc.)",
              "Mechanismen zum Absichern von Netzwerken (Network Access Control, Firewall, VPN, etc.)",
              "Methoden zur Benutzerauthentisierung",
              "Autorisierungskonzepte in Unix und Windows",
              "Rechtliche Rahmenbedingungen mit Bezug auf Cybersecurity in der Schweiz",
            ],
          },
        ],
      },
      {
        name: "Maschinelles Lernen & Data Mining",
        topics: [
          {
            name: "In diesem Modul lernen Sie die Voraussetzungen für dessen Einsatz sowie verschiedene wichtige Algorithmen des maschinellen Lernens kennen.",
            items: [],
          },
          {
            name: "Technische Umsetzung",
            items: [
              "Python-Code zur Datenvorverarbeitung schreiben",
              "Zentrale ML-Algorithmen implementieren (überwacht, unüberwacht, Ensemble)",
              "End-to-End-ML-Pipelines erstellen",
            ],
          },
          {
            name: "Problemlösungsstrategie",
            items: [
              "Geschäftliche Probleme als ML-Probleme formulieren",
              "Geeignete Algorithmen auswählen",
              "Entscheidungen datengestützt begründen",
            ],
          },
          {
            name: "Berufspraxis",
            items: [
              "Modellleistung mit branchenüblichen Metriken validieren",
              "Fallstricke wie Überanpassung und Datenlecks vermeiden",
              "Ergebnisse technisch und nicht-technisch präsentieren",
            ],
          },
          {
            name: "Anwendung in der Praxis",
            items: [
              "Einsatz in Bereichen wie Gesundheitsprognosen, Finanzmodellierung oder Computer Vision",
              "Portfolio-Projekte zur Demonstration der Fähigkeiten für zukünftige Arbeitgeber",
            ],
          },
        ],
      },
    ],
  },
];

// #endregion

// #region Vor-Gymi
const vorGymiData = [
  {
    subject: "vg-math",
    label: "Vor-Gymi – Mathematik",
    modules: [
      {
        name: "Zahlenbereiche & Arithmetik",
        topics: [
          {
            name: "Natürliche Zahlen ℕ",
            items: [],
            subtopics: [
              {
                name: "Stellenwertsystem",
                items: ["Tausender", "Hunderter", "Zehner", "Einer"],
              },
              {
                name: "Operationen",
                items: [
                  "Addition",
                  "Subtraktion",
                  "Multiplikation",
                  "Division",
                ],
              },
            ],
          },
          {
            name: "Ganze Zahlen ℤ",
            items: [],
            subtopics: [
              {
                name: "Zahlenstrahl",
                items: ["Positive Zahlen", "Negative Zahlen"],
              },
              { name: "Rechenregeln", items: ["Vorzeichenregeln", "Betrag"] },
            ],
          },
          {
            name: "Rationale Zahlen ℚ",
            items: [],
            subtopics: [
              {
                name: "Bruchrechnung",
                items: [
                  "Erweitern & Kürzen",
                  "Hauptnenner",
                  "Kehrwert",
                  "ggT & kgV",
                  "Addition & Subtraktion",
                  "Multiplikation & Division",
                ],
              },
              {
                name: "Dezimalzahlen",
                items: [
                  "Periodische Zahlen",
                  "Umwandlung Bruch ↔ Dezimal",
                  "Stellenwerte (Zehntel, Hundertstel)",
                ],
              },
            ],
          },
          {
            name: "Reelle Zahlen ℝ",
            items: [],
            subtopics: [
              { name: "Irrationale Zahlen", items: ["√2", "Kreiszahl π"] },
              {
                name: "Wurzeln",
                items: [
                  "Quadratwurzel",
                  "Wurzelgesetze",
                  "Rationalmachen des Nenners",
                ],
              },
            ],
          },
          {
            name: "Prozentrechnung",
            items: [],
            subtopics: [
              {
                name: "Grundaufgaben",
                items: ["Prozentwert", "Prozentsatz", "Grundwert"],
              },
              {
                name: "Veränderung",
                items: [
                  "Prozentuale Erhöhung",
                  "Prozentuale Reduktion",
                  "Zinsrechnung",
                ],
              },
            ],
          },
        ],
      },
      {
        name: "Terme, Potenzen & Algebra",
        topics: [
          {
            name: "Terme & Umformungen",
            items: [],
            subtopics: [
              {
                name: "Grundoperationen",
                items: [
                  "Zusammenfassen",
                  "Ausmultiplizieren (Distributivgesetz)",
                  "Ausklammern",
                ],
              },
              {
                name: "Binomische Formeln",
                items: [
                  "(a+b)² = a²+2ab+b²",
                  "(a−b)² = a²−2ab+b²",
                  "(a+b)(a−b) = a²−b²",
                  "Rückwärts erkennen",
                ],
              },
            ],
          },
          {
            name: "Potenzen & Wurzeln",
            items: [],
            subtopics: [
              {
                name: "Potenzgesetze",
                items: [
                  "aⁿ·aᵐ = aⁿ⁺ᵐ",
                  "aⁿ÷aᵐ = aⁿ⁻ᵐ",
                  "(aⁿ)ᵐ = aⁿᵐ",
                  "(a·b)ⁿ = aⁿ·bⁿ",
                ],
              },
              {
                name: "Besondere Exponenten",
                items: [
                  "a⁰ = 1",
                  "a⁻ⁿ = 1/aⁿ",
                  "a^(1/n) = ⁿ√a",
                  "a^(m/n) = ⁿ√(aᵐ)",
                ],
              },
            ],
          },
        ],
      },
      {
        name: "Gleichungen & Proportionalität",
        topics: [
          {
            name: "Lineare Gleichungen",
            items: [
              "Äquivalenzumformungen",
              "Gleichungen mit Klammern",
              "Gleichungen mit Brüchen",
            ],
          },
          {
            name: "Lineare Gleichungssysteme",
            items: [],
            subtopics: [
              {
                name: "Lösungsverfahren",
                items: [
                  "Einsetzungsverfahren",
                  "Gleichsetzungsverfahren",
                  "Additionsverfahren",
                ],
              },
            ],
          },
          {
            name: "Quadratische Gleichungen",
            items: [],
            subtopics: [
              {
                name: "Lösungsmethoden",
                items: [
                  "Reinquadratisch (x²=a)",
                  "Ausklammern",
                  "Faktorisieren",
                  "abc-/pq-Formel (Einführung)",
                ],
              },
            ],
          },
          {
            name: "Proportionalität & Dreisatz",
            items: [],
            subtopics: [
              {
                name: "Typen",
                items: [
                  "Direkte Proportionalität (y=kx)",
                  "Indirekte Proportionalität (y=k/x)",
                ],
              },
              {
                name: "Dreisatz",
                items: ["Direkter Dreisatz", "Indirekter Dreisatz"],
              },
            ],
          },
        ],
      },
      {
        name: "Funktionen & Koordinatensystem",
        topics: [
          {
            name: "Koordinatensystem",
            items: [
              "x-/y-Achse",
              "Quadranten",
              "Punkte eintragen/ablesen",
              "Abstand zweier Punkte",
              "Mittelpunkt",
            ],
          },
          {
            name: "Funktionsbegriff",
            items: [
              "Zuordnung",
              "Definitionsbereich",
              "Funktionswerte berechnen",
              "Graphen zeichnen (Wertetabelle)",
            ],
          },
          {
            name: "Lineare Funktionen",
            items: [],
            subtopics: [
              {
                name: "Konzepte",
                items: [
                  "Steigung m",
                  "y-Achsenabschnitt b",
                  "Nullstelle",
                  "Geradengleichung aus 2 Punkten",
                  "Schnittpunkte",
                ],
              },
            ],
          },
          {
            name: "Quadratische Funktionen",
            items: [],
            subtopics: [
              {
                name: "Konzepte",
                items: [
                  "Normalparabel",
                  "Scheitelpunktform",
                  "Öffnung (a>0 / a<0)",
                  "Verschiebung & Streckung",
                ],
              },
            ],
          },
          {
            name: "Weitere Funktionstypen",
            items: [
              "Potenzfunktionen (x³, x⁴)",
              "Wurzelfunktion √x",
              "Betragsfunktion |x|",
              "Hyperbel 1/x",
            ],
          },
        ],
      },
      {
        name: "Geometrie",
        topics: [
          {
            name: "Ebene Figuren",
            items: [],
            subtopics: [
              {
                name: "Formen & Formeln",
                items: [
                  "Dreieck (A=g·h/2, Winkelsumme 180°)",
                  "Rechteck & Quadrat",
                  "Parallelogramm & Trapez",
                  "Kreis (U=2πr, A=πr²)",
                ],
              },
            ],
          },
          {
            name: "Körper",
            items: [],
            subtopics: [
              {
                name: "Volumen & Oberfläche",
                items: ["Quader & Würfel", "Prisma", "Zylinder (V=πr²h)"],
              },
            ],
          },
          {
            name: "Satz des Pythagoras",
            items: [
              "a²+b²=c²",
              "Hypotenuse berechnen",
              "Kathete berechnen",
              "Rechtwinkligkeit prüfen",
            ],
          },
          {
            name: "Trigonometrie (rechtwinkliges △)",
            items: [],
            subtopics: [
              {
                name: "Grundlagen",
                items: [
                  "sin(α) = Gegenkathete/Hypotenuse",
                  "cos(α) = Ankathete/Hypotenuse",
                  "tan(α) = Gegenkathete/Ankathete",
                ],
              },
              {
                name: "Spezielle Winkel",
                items: ["30° (sin=1/2)", "45° (sin=√2/2)", "60° (sin=√3/2)"],
              },
            ],
          },
        ],
      },
      {
        name: "Statistik & Wahrscheinlichkeit",
        topics: [
          {
            name: "Datendarstellung",
            items: [
              "Wertetabellen",
              "Säulen-/Balkendiagramme",
              "Kreisdiagramme",
              "Histogramme",
            ],
          },
          {
            name: "Statistische Kennzahlen",
            items: ["Arithmetisches Mittel", "Median", "Modus"],
          },
          {
            name: "Wahrscheinlichkeit (Grundlagen)",
            items: [],
            subtopics: [
              {
                name: "Konzepte",
                items: [
                  "Zufallsexperiment",
                  "Ergebnis & Ereignis",
                  "Laplace-Wahrscheinlichkeit",
                  "Baumdiagramme",
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];

// #endregion

// #region Gymi
const gymiData = [
  {
    subject: "gy-math",
    label: "Gymi – Mathematik",
    modules: [
      {
        name: "Algebra",
        topics: [
          {
            name: "Gleichungen & Ungleichungen",
            items: [],
            subtopics: [
              {
                name: "Quadratische Gleichungen",
                items: [
                  "pq-Formel / Mitternachtsformel",
                  "Diskriminante & Lösungsanzahl",
                  "Faktorisieren",
                ],
              },
              {
                name: "Höhere Ordnung",
                items: [
                  "Polynomdivision",
                  "Substitution (biquadratisch)",
                  "Satz vom Nullprodukt",
                ],
              },
              {
                name: "Ungleichungen",
                items: [
                  "Äquivalenzumformung",
                  "Fallunterscheidung",
                  "Systeme mit 2 Variablen (graphisch)",
                ],
              },
              {
                name: "Parameterdiskussion",
                items: [
                  "Diskriminante D=b²−4ac",
                  "Lösungsanzahl abhängig von Parametern",
                ],
              },
            ],
          },
          {
            name: "Komplexe Zahlen",
            items: [],
            subtopics: [
              {
                name: "Darstellungsformen",
                items: [
                  "Algebraische Form (a+bi)",
                  "Trigonometrische Form r(cosφ+i·sinφ)",
                  "Gaußsche Zahlenebene",
                ],
              },
              {
                name: "Rechenoperationen",
                items: [
                  "Addition & Subtraktion",
                  "Multiplikation & Division",
                  "Konjugiert Komplexes",
                  "Betrag & Argument",
                ],
              },
              {
                name: "Fortgeschritten",
                items: [
                  "Satz von Moivre (Potenzen)",
                  "n-te Wurzeln in ℂ",
                  "Gleichungen in ℂ lösen",
                  "Geometrische Interpretation (Drehung/Streckung)",
                ],
              },
            ],
          },
        ],
      },
      {
        name: "Analysis",
        topics: [
          {
            name: "Elementare Funktionen",
            items: [],
            subtopics: [
              {
                name: "Grundtypen",
                items: [
                  "Konstante & Identität",
                  "Lineare & Affine",
                  "Potenz- & Wurzelfunktionen",
                  "Betragsfunktion",
                ],
              },
              {
                name: "Transzendente Funktionen",
                items: [
                  "Exponentialfunktion (eˣ, aˣ)",
                  "Logarithmus (ln, log_a)",
                  "Trigonometrische (sin, cos, tan)",
                ],
              },
              {
                name: "Abwandlungen",
                items: [
                  "Spiegelungen f(−x), −f(x)",
                  "Verschiebungen f(x+k), f(x)+k",
                  "Streckung k·f(x)",
                  "|f(x)| und f(|x|)",
                ],
              },
            ],
          },
          {
            name: "Folgen & Reihen",
            items: [],
            subtopics: [
              {
                name: "Folgentypen",
                items: [
                  "Arithmetische Folge (aₙ=a₁+(n−1)d)",
                  "Geometrische Folge (aₙ=a₁·qⁿ⁻¹)",
                ],
              },
              {
                name: "Methoden",
                items: ["Vollständige Induktion", "Summenformeln"],
              },
              {
                name: "Konvergenz",
                items: ["Grenzwert bestimmen", "Konvergenzbegriff"],
              },
            ],
          },
          {
            name: "Grenzwerte & Stetigkeit",
            items: [],
            subtopics: [
              {
                name: "Limes",
                items: [
                  "Grenzwertsätze",
                  "Asymptoten (waagrecht/senkrecht/schräg)",
                  "Regel von L'Hôpital",
                ],
              },
              {
                name: "Stetigkeit",
                items: ["Punktweise Stetigkeit", "Sprungstellen & Lücken"],
              },
            ],
          },
          {
            name: "Differentialrechnung",
            items: [],
            subtopics: [
              {
                name: "Grundlagen",
                items: [
                  "Differenzenquotient → Differentialquotient",
                  "Tangentensteigung",
                ],
              },
              {
                name: "Ableitungsregeln",
                items: [
                  "Summenregel",
                  "Produktregel",
                  "Quotientenregel",
                  "Kettenregel",
                ],
              },
              {
                name: "Ableitungen wichtiger Funktionen",
                items: [
                  "Potenz-/Exponential-/Log-Funktionen",
                  "Trigonometrische Funktionen",
                ],
              },
              {
                name: "Kurvendiskussion",
                items: [
                  "Nullstellen",
                  "Extrema (1. Ableitung)",
                  "Wendepunkte (2. Ableitung)",
                  "Krümmungsverhalten",
                ],
              },
              {
                name: "Anwendungen",
                items: ["Optimierungsprobleme", "Tangentengleichung"],
              },
            ],
          },
          {
            name: "Integralrechnung",
            items: [],
            subtopics: [
              {
                name: "Grundlagen",
                items: [
                  "Stammfunktion",
                  "Bestimmtes Integral (Riemann)",
                  "Hauptsatz der Analysis",
                ],
              },
              {
                name: "Methoden",
                items: ["Substitution", "Partielle Integration"],
              },
              {
                name: "Anwendungen",
                items: [
                  "Flächenberechnung zwischen Graphen",
                  "Rotationsvolumen",
                ],
              },
            ],
          },
        ],
      },
      {
        name: "Trigonometrie",
        topics: [
          {
            name: "Einheitskreis",
            items: [
              "sin/cos als Koordinaten",
              "Periodizität",
              "Spezielle Winkel (30°, 45°, 60°, 90°)",
            ],
          },
          {
            name: "Beziehungen",
            items: [],
            subtopics: [
              {
                name: "Winkelbeziehungen",
                items: [
                  "Komplementärwinkel (α+β=90°)",
                  "Supplementärwinkel (α+β=180°)",
                  "Gegenwinkel",
                ],
              },
              {
                name: "Additionstheoreme",
                items: [
                  "sin(α±β) = sinα·cosβ ± cosα·sinβ",
                  "cos(α±β) = cosα·cosβ ∓ sinα·sinβ",
                ],
              },
            ],
          },
          {
            name: "Sinus- & Kosinussatz",
            items: ["a/sinα = b/sinβ = c/sinγ", "c² = a²+b² − 2ab·cosγ"],
          },
          {
            name: "Goniometrische Gleichungen",
            items: [
              "sin(x)=0 → x=kπ",
              "cos(x)=0 → x=π/2+kπ",
              "Allgemeine Lösungsmengen",
            ],
          },
        ],
      },
      {
        name: "Vektorielle & Analytische Geometrie",
        topics: [
          {
            name: "Vektoroperationen",
            items: [],
            subtopics: [
              {
                name: "Grundlagen",
                items: [
                  "Addition & Skalarmultiplikation",
                  "Linearkombination",
                  "Kolinear & Komplanar",
                  "Orthonormierte Basen",
                ],
              },
              {
                name: "Produkte",
                items: [
                  "Skalarprodukt (u·v = |u||v|cosφ)",
                  "Kreuzprodukt (u×v, senkrechter Vektor)",
                  "Spatprodukt (Volumen)",
                ],
              },
            ],
          },
          {
            name: "Analytische Geometrie Ebene",
            items: [],
            subtopics: [
              {
                name: "Geraden",
                items: [
                  "Parametergleichung g(t)=P+t·r",
                  "Normalenform ax+by+c=0",
                ],
              },
              {
                name: "Kreise",
                items: ["(x−x₀)²+(y−y₀)²=r²", "Tangentengleichung"],
              },
              {
                name: "Kegelschnitte",
                items: [
                  "Ellipse",
                  "Parabel",
                  "Hyperbel",
                  "Brennpunkte & Exzentrizität",
                ],
              },
              {
                name: "Lagebeziehungen",
                items: [
                  "Schnittpunkte",
                  "Abstände (Punkt-Gerade)",
                  "Winkelhalbierende",
                ],
              },
            ],
          },
          {
            name: "Analytische Geometrie Raum",
            items: [],
            subtopics: [
              {
                name: "Geraden & Ebenen",
                items: [
                  "Parametergleichung",
                  "Kartesische Ebenengleichung",
                  "Normalenvektor",
                ],
              },
              {
                name: "Abstände",
                items: [
                  "Punkt-Punkt",
                  "Punkt-Gerade",
                  "Punkt-Ebene",
                  "Windschiefe Geraden",
                ],
              },
              {
                name: "Winkel",
                items: ["Gerade-Gerade", "Gerade-Ebene", "Ebene-Ebene"],
              },
              {
                name: "Körper",
                items: [
                  "Würfel & Quader",
                  "Prisma & Zylinder",
                  "Kegel & Kugel",
                ],
              },
            ],
          },
        ],
      },
      {
        name: "Stochastik",
        topics: [
          {
            name: "Beschreibende Statistik",
            items: [],
            subtopics: [
              {
                name: "Darstellung",
                items: ["Kreisdiagramm", "Stabdiagramm", "Histogramm"],
              },
              {
                name: "Kennzahlen",
                items: [
                  "Arithmetisches Mittel",
                  "Median & Modus",
                  "Varianz & Standardabweichung",
                ],
              },
            ],
          },
          {
            name: "Kombinatorik",
            items: [],
            subtopics: [
              {
                name: "Zählprinzipien",
                items: [
                  "Permutationen (mit/ohne Wdh.)",
                  "Variationen (mit/ohne Wdh.)",
                  "Kombinationen (mit/ohne Wdh.)",
                ],
              },
              {
                name: "Sätze",
                items: ["Binomischer Lehrsatz", "Pascalsches Dreieck"],
              },
            ],
          },
          {
            name: "Wahrscheinlichkeitsrechnung",
            items: [],
            subtopics: [
              {
                name: "Grundlagen",
                items: [
                  "Ereignisse (A∩B, A∪B, Ā)",
                  "Unabhängige & disjunkte Ereignisse",
                ],
              },
              {
                name: "Regeln",
                items: [
                  "Additionsregel",
                  "Multiplikationsregel",
                  "Bedingte Wahrscheinlichkeit P(A|B)",
                ],
              },
              { name: "Darstellung", items: ["Ergebnisbaum"] },
            ],
          },
          {
            name: "Zufallsvariablen",
            items: [],
            subtopics: [
              {
                name: "Kenngrößen",
                items: ["Erwartungswert", "Standardabweichung"],
              },
              {
                name: "Verteilungen",
                items: [
                  "Binomialverteilung P(X=k)",
                  "Normalverteilung (Näherung)",
                ],
              },
            ],
          },
        ],
      },
      {
        name: "Lineare Algebra",
        topics: [
          {
            name: "Lineare Abbildungen",
            items: [],
            subtopics: [
              {
                name: "Begriffe",
                items: [
                  "Definition (Addition & Skalierung erhalten)",
                  "Kern (Nullraum)",
                  "Bildraum",
                ],
              },
              {
                name: "Matrixdarstellung",
                items: ["Abbildungsmatrix relativ zu Basis", "Basiswechsel"],
              },
            ],
          },
          {
            name: "2×2-Matrizen",
            items: [],
            subtopics: [
              {
                name: "Operationen",
                items: [
                  "Matrixaddition",
                  "Skalarmultiplikation",
                  "Matrixmultiplikation",
                ],
              },
              {
                name: "Determinante & Inverse",
                items: [
                  "det(A) = ad−bc",
                  "A⁻¹ = (1/det)·[[d,−b],[−c,a]]",
                  "Invertierbarkeit (det≠0)",
                ],
              },
            ],
          },
          {
            name: "Eigenwertprobleme",
            items: [],
            subtopics: [
              {
                name: "Berechnung",
                items: ["det(A−λI)=0", "Eigenwerte", "Eigenvektoren"],
              },
              {
                name: "Interpretation",
                items: [
                  "Invariante Richtungen",
                  "Streckung/Stauchung",
                  "Symmetrien & Rotationen",
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    subject: "gy-phys",
    label: "Gymi – Physik",
    modules: [
      {
        name: "Grundlagen",
        topics: [
          {
            name: "Grössen & Einheiten",
            items: [],
            subtopics: [
              { name: "SI-System", items: ["Grundgrössen", "Masseinheiten"] },
              { name: "Dimensionen", items: ["Einheitenanalyse"] },
            ],
          },
          {
            name: "Numerik & Darstellung",
            items: [],
            subtopics: [
              {
                name: "Genauigkeit",
                items: [
                  "Signifikante Stellen",
                  "Exakte Rechnung",
                  "Abschätzung",
                ],
              },
              {
                name: "Schreibweisen",
                items: [
                  "Exponentialschreibweise",
                  "Zehnerpotenzen",
                  "Vorsilben (Milli, Mega etc.)",
                ],
              },
            ],
          },
        ],
      },
      {
        name: "Elektrizitätslehre",
        topics: [
          {
            name: "Elektrostatik",
            items: [],
            subtopics: [
              { name: "Ladung", items: ["Coulomb-Gesetz", "Ladungstrennung"] },
              {
                name: "Elektrisches Feld",
                items: ["Feldstärke", "Feldlinien", "Homogenes Feld"],
              },
              {
                name: "Potential",
                items: ["Spannung", "Arbeit im E-Feld", "Energie"],
              },
            ],
          },
          {
            name: "Gleichstromkreise",
            items: [],
            subtopics: [
              {
                name: "Grundgrössen",
                items: [
                  "Stromstärke",
                  "Elektrischer Widerstand",
                  "Spezifischer Widerstand",
                ],
              },
              {
                name: "Gesetzmässigkeiten",
                items: [
                  "Ohmsches Gesetz",
                  "Reihenschaltung",
                  "Parallelschaltung",
                ],
              },
              {
                name: "Energieumsatz",
                items: ["Elektrische Leistung", "Joule'sche Wärme"],
              },
            ],
          },
          {
            name: "Magnetismus",
            items: [],
            subtopics: [
              {
                name: "Magnetfeld",
                items: [
                  "Feldlinienbilder",
                  "Stromdurchflossener Leiter",
                  "Elektromagnete",
                ],
              },
              {
                name: "Kraftwirkung",
                items: ["Lorentzkraft (auf Leiter)", "Induktion (qualitativ)"],
              },
            ],
          },
        ],
      },
    ],
  },
];

// ═══════════════════════════════
