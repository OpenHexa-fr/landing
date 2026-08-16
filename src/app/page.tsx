import Link from "next/link";

const PRODUCTS = [
  {
    name: "Immo",
    tagline: "Transactions, diagnostics et permis de construire",
    description:
      "Recherchez des transactions immobilières (DVF), des diagnostics de performance énergétique (DPE) et des permis de construire (Sit@del2) partout en France.",
    href: "https://immo.openhexa.fr",
    sources: ["DVF", "DPE", "Sit@del2"],
    accent: "immo",
  },
  {
    name: "Essence",
    tagline: "Prix des carburants en temps réel",
    description:
      "Comparez les prix à la pompe des stations-service françaises, triés par prix, distance ou fraîcheur des données, mis à jour en continu.",
    href: "https://essence.openhexa.fr",
    sources: ["Prix carburants", "Stations-service"],
    accent: "essence",
  },
];

const PRINCIPLES = [
  {
    title: "100 % données ouvertes",
    description:
      "Chaque produit s'appuie exclusivement sur des jeux de données publics (data.gouv.fr, data.ademe.fr, data.economie.gouv.fr…), sans source propriétaire.",
  },
  {
    title: "Une brique commune, des produits indépendants",
    description:
      "Tous les produits partagent une même librairie (openhexa-core) pour parler à Elasticsearch, mais sont développés et déployés de façon totalement autonome.",
  },
  {
    title: "Open source",
    description:
      "Le code de chaque produit — backend, frontend, librairie partagée — est public sur GitHub, réutilisable et audité par tous.",
  },
];

export default function HomePage() {
  return (
    <>
      <header className="site-header">
        <div className="site-header__inner">
          <span className="site-header__brand">
            <span className="site-header__logo" aria-hidden="true">
              ⬡
            </span>
            OpenHexa
          </span>
          <a
            href="https://github.com/OpenHexa-fr"
            target="_blank"
            rel="noreferrer"
            className="site-header__link"
          >
            GitHub
          </a>
        </div>
      </header>

      <main>
        <section className="hero">
          <h1 className="hero__title">
            Les données publiques françaises,
            <br />
            transformées en outils utiles.
          </h1>
          <p className="hero__subtitle">
            OpenHexa est un écosystème open-source qui transforme des données ouvertes du
            gouvernement français en outils web grand public — un produit indépendant par
            thématique, une base technique commune.
          </p>
          <a href="#produits" className="hero__cta">
            Découvrir les produits ↓
          </a>
        </section>

        <section id="produits" className="products">
          <h2 className="section-title">Les produits</h2>
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
                  <h3 className="product-card__name">{product.name}</h3>
                  <span className="product-card__arrow" aria-hidden="true">
                    →
                  </span>
                </div>
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

        <section className="principles">
          <h2 className="section-title">Comment ça marche</h2>
          <div className="principles__grid">
            {PRINCIPLES.map((principle) => (
              <div key={principle.title} className="principle-card">
                <h3 className="principle-card__title">{principle.title}</h3>
                <p className="principle-card__description">{principle.description}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <p>
          Propulsé par des données ouvertes françaises ·{" "}
          <a href="https://github.com/OpenHexa-fr" target="_blank" rel="noreferrer">
            Code source sur GitHub
          </a>
        </p>
      </footer>
    </>
  );
}
