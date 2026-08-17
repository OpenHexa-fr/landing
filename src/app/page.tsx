import Link from "next/link";

import ThemeToggle from "@/components/ThemeToggle";
import {
  IconArrowUpRight,
  IconCode,
  IconDatabase,
  IconFuel,
  IconHouse,
  IconLayers,
} from "@/components/icons";

const NAV_LINKS = [
  { label: "Produits", href: "#produits" },
  { label: "Comment ça marche", href: "#comment-ca-marche" },
  { label: "Écosystème", href: "#ecosysteme" },
];

const STATS = [
  { value: "2", label: "produits indépendants", detail: "Immo et Essence, à ce jour" },
  { value: "15 M+", label: "diagnostics DPE référencés", detail: "source : ADEME" },
  { value: "9 800+", label: "stations-service suivies", detail: "prix mis à jour en continu" },
  { value: "2021–2025", label: "millésimes DVF ingérés", detail: "source : data.gouv.fr" },
];

const PRODUCTS = [
  {
    name: "Immo",
    tagline: "Transactions, diagnostics et permis de construire",
    description:
      "Recherchez des transactions immobilières (DVF), des diagnostics de performance énergétique (DPE) et des permis de construire (Sit@del2) partout en France, avec une carte des prix au m² par zone.",
    href: "https://immo.openhexa.fr",
    sources: ["DVF", "DPE", "Sit@del2"],
    accent: "immo",
    Icon: IconHouse,
  },
  {
    name: "Essence",
    tagline: "Prix des carburants en temps réel",
    description:
      "Comparez les prix à la pompe des stations-service françaises, triés par prix, distance ou fraîcheur des données, avec un score de pertinence calculé pour chaque station.",
    href: "https://essence.openhexa.fr",
    sources: ["Prix carburants", "Stations-service"],
    accent: "essence",
    Icon: IconFuel,
  },
] as const;

const STEPS = [
  {
    number: "01",
    Icon: IconDatabase,
    title: "100 % données ouvertes",
    description:
      "Chaque produit s'appuie exclusivement sur des jeux de données publics (data.gouv.fr, data.ademe.fr, data.economie.gouv.fr…), sans source propriétaire ni donnée achetée.",
  },
  {
    number: "02",
    Icon: IconLayers,
    title: "Une brique commune, des produits indépendants",
    description:
      "Tous les produits partagent une même librairie (openhexa-core) pour interroger Elasticsearch, mais sont développés, déployés et mis à jour de façon totalement autonome.",
  },
  {
    number: "03",
    Icon: IconCode,
    title: "Open source de bout en bout",
    description:
      "Le code de chaque produit — backend, frontend, librairie partagée — est public sur GitHub, sous licence libre, réutilisable et audité par tous.",
  },
];

const REPOS = [
  {
    name: "core",
    tag: "Librairie",
    description: "Connexion et requêtage Elasticsearch, mappings, ingestion — partagée par tous les backends.",
  },
  {
    name: "immo-back",
    tag: "API",
    description: "FastAPI · transactions DVF, diagnostics DPE, permis de construire Sit@del2.",
  },
  {
    name: "immo-front",
    tag: "Frontend",
    description: "Next.js · recherche, carte des prix par zone, fiches de transactions.",
  },
  {
    name: "essence-back",
    tag: "API",
    description: "FastAPI · prix des carburants quasi temps réel, environ 9 800 stations suivies.",
  },
  {
    name: "essence-front",
    tag: "Frontend",
    description: "Next.js · comparateur de stations, score de pertinence prix/distance/fraîcheur.",
  },
  {
    name: "landing",
    tag: "Frontend",
    description: "Next.js · ce site, vitrine statique de l'écosystème.",
  },
];

export default function HomePage() {
  return (
    <>
      <header className="site-header">
        <div className="site-header__inner">
          <a href="#top" className="site-header__brand">
            <svg className="site-header__logo" viewBox="0 0 32 32" width="24" height="24" aria-hidden="true">
              <polygon points="16,2 29,9 29,23 16,30 3,23 3,9" fill="currentColor" />
              <polygon points="16,8 23,12 23,20 16,24 9,20 9,12" fill="var(--color-bg)" />
            </svg>
            OpenHexa
          </a>

          <nav className="site-header__nav" aria-label="Navigation principale">
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href} className="site-header__nav-link">
                {link.label}
              </a>
            ))}
          </nav>

          <div className="site-header__actions">
            <a
              href="https://github.com/OpenHexa-fr"
              target="_blank"
              rel="noreferrer"
              className="site-header__link"
            >
              GitHub
            </a>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero__backdrop" aria-hidden="true" />
          <div className="hero__inner">
            <span className="hero__badge">Écosystème open-source · données publiques françaises</span>
            <h1 className="hero__title">
              Les données publiques françaises,
              <br />
              transformées en outils utiles.
            </h1>
            <p className="hero__subtitle">
              OpenHexa transforme des données ouvertes du gouvernement français en outils web
              grand public — un produit indépendant par thématique, une base technique commune.
            </p>
            <div className="hero__actions">
              <a href="#produits" className="button button--primary">
                Découvrir les produits
              </a>
              <a
                href="https://github.com/OpenHexa-fr"
                target="_blank"
                rel="noreferrer"
                className="button button--ghost"
              >
                Voir le code source
                <IconArrowUpRight width={16} height={16} />
              </a>
            </div>
          </div>
        </section>

        <section className="stats" aria-label="Chiffres clés">
          <div className="stats__grid">
            {STATS.map((stat) => (
              <div key={stat.label} className="stat-card">
                <span className="stat-card__value">{stat.value}</span>
                <span className="stat-card__label">{stat.label}</span>
                <span className="stat-card__detail">{stat.detail}</span>
              </div>
            ))}
          </div>
        </section>

        <section id="produits" className="products">
          <h2 className="section-title">Les produits</h2>
          <p className="section-subtitle">
            Chaque thématique est un produit à part entière : sa propre interface, sa propre API,
            son propre rythme de mise à jour.
          </p>
          <div className="products__grid">
            {PRODUCTS.map((product) => (
              <Link
                key={product.name}
                href={product.href}
                target="_blank"
                rel="noreferrer"
                className={`product-card product-card--${product.accent}`}
              >
                <div className="product-card__header">
                  <span className="product-card__icon" aria-hidden="true">
                    <product.Icon width={22} height={22} />
                  </span>
                  <span className="product-card__arrow" aria-hidden="true">
                    <IconArrowUpRight width={18} height={18} />
                  </span>
                </div>
                <h3 className="product-card__name">{product.name}</h3>
                <p className="product-card__tagline">{product.tagline}</p>
                <p className="product-card__description">{product.description}</p>
                <div className="product-card__sources">
                  {product.sources.map((source) => (
                    <span key={source} className="product-card__source-tag">
                      {source}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section id="comment-ca-marche" className="steps">
          <h2 className="section-title">Comment ça marche</h2>
          <div className="steps__grid">
            {STEPS.map((step) => (
              <div key={step.number} className="step-card">
                <div className="step-card__top">
                  <span className="step-card__icon" aria-hidden="true">
                    <step.Icon width={20} height={20} />
                  </span>
                  <span className="step-card__number" aria-hidden="true">
                    {step.number}
                  </span>
                </div>
                <h3 className="step-card__title">{step.title}</h3>
                <p className="step-card__description">{step.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="ecosysteme" className="ecosystem">
          <h2 className="section-title">L&apos;écosystème, repo par repo</h2>
          <p className="section-subtitle">
            6 repos indépendants, tous publics sur GitHub — chacun avec son propre cycle de vie et
            sa propre CI/CD.
          </p>
          <div className="ecosystem__grid">
            {REPOS.map((repo) => (
              <a
                key={repo.name}
                href={`https://github.com/OpenHexa-fr/${repo.name}`}
                target="_blank"
                rel="noreferrer"
                className="repo-card"
              >
                <div className="repo-card__header">
                  <span className="repo-card__name">{repo.name}</span>
                  <span className="repo-card__tag">{repo.tag}</span>
                </div>
                <p className="repo-card__description">{repo.description}</p>
              </a>
            ))}
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="site-footer__inner">
          <div className="site-footer__brand">
            <svg viewBox="0 0 32 32" width="22" height="22" aria-hidden="true">
              <polygon points="16,2 29,9 29,23 16,30 3,23 3,9" fill="currentColor" />
              <polygon points="16,8 23,12 23,20 16,24 9,20 9,12" fill="var(--color-bg-alt)" />
            </svg>
            <span>OpenHexa</span>
          </div>

          <div className="site-footer__columns">
            <div className="site-footer__column">
              <span className="site-footer__column-title">Produits</span>
              <a href="https://immo.openhexa.fr" target="_blank" rel="noreferrer">
                Immo
              </a>
              <a href="https://essence.openhexa.fr" target="_blank" rel="noreferrer">
                Essence
              </a>
            </div>
            <div className="site-footer__column">
              <span className="site-footer__column-title">Écosystème</span>
              <a href="#ecosysteme">Les 6 repos</a>
              <a href="https://github.com/OpenHexa-fr" target="_blank" rel="noreferrer">
                Organisation GitHub
              </a>
            </div>
          </div>
        </div>
        <p className="site-footer__bottom">
          Propulsé par des données ouvertes françaises · Code source public sur{" "}
          <a href="https://github.com/OpenHexa-fr" target="_blank" rel="noreferrer">
            GitHub
          </a>
        </p>
      </footer>
    </>
  );
}
