import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <meta
          name="google-site-verification"
          content="C22oib_7TPDWI_Mo7fehI1rYBDVhdiTIPGwGroO6EaM"
        />

        <link rel="canonical" href="https://scholl-garten-dach.ch/" />
        <title>Scholl Garten- und Dachservice</title>
        <meta
          name="description"
          content="Spezialisiert auf Garten- und Dachpflege"
        />
        <meta
          name="keywords"
          content="Scholl, Garten, Dach, unterhalt, Gartner, Spengler, Zürich"
        />
        <meta name="author" content="Shiv" />
      </Head>

      {/* //Nav Bar// */}

      <nav>
        <div className="nav">
          <a href="#pageTop">
            <img className="nav-logo" src="../assets/SVGLogo.svg" alt="" />
          </a>
          <div className="nav-links">
            <div className="nav-menu-links">
              <a href="#garden">Garden</a>
              <a href="#roof">Roof</a>
              <a href="#contact">Contact</a>
            </div>
          </div>
        </div>
      </nav>
      {/* h1 for seo */}
      <h1 className="hide">Scholl Garten- und Dachservice</h1>
      {/* masthead */}
      <div className="container">
        <img
          className="logo"
          src="../assets/SVGLogo.svg"
          alt="Scholl Garten- und Dachservice"
        />
        <img className="wheel-barrow" src="../assets/wheelbarrow.svg" alt="" />
        <h2 className="subtitle">Ihr Partner im garten und unterhaltservice</h2>
      </div>

      {/* Services  */}
      <h3 className="card-title">Services</h3>
      <div className="split-container">
        <p className="garden">
          <h4>Garten</h4>
          <p>Unser Aufgabengebiet im Gartenservice umfasst:</p>
          <ul>
            <li>Pflege von Grünflächen</li>
            <li>Reinigung und Unterhalt von Aussenplätzen und Wegen</li>
            <li>Rasenpflege (Mähen, Sähen, Düngen und Vertikutieren)</li>
            <li>Rabatten pflegen und jäten</li>
            <li>
              Schneiden von kleineren Bäumen, Hecken, Sträucher und Stauden
            </li>
            <li>Neubepflanzungen</li>
            <li>Ausführen von kleineren Gartenbauarbeiten </li>
            <li>Entsorgung von Gartenabfällen und Grüngut </li>
            <li> Winterdienst</li>
            <li>Hauswartung und Objektbetreuung</li>
          </ul>
        </p>
        <p className="spengler">
          <h4>Dach</h4>
          <p>
            Servicearbeiten am Dach sind ein wichtiger Bestandteil zur
            Eindämmung möglicher Schäden und tragen zum Erhalt der zuverlässigen
            Entwässerung bei:
          </p>
          <ul>
            <li>Regelmässige Pflege von Dachbegrünung</li>
            <li>Entfernen und ausjäten von Fremdbewuchs</li>
            <li>
              Reinigung und Kontrolle aller Dachwasserabläufe, Notüberläufe- und
              Dachdurchdringungen
            </li>
            <li>
              Kontrolle aller Spenglerarbeiten inkl. Wandanschlüsse/Kittfugen
            </li>
            <li>Kontrolle von Blitzschutzanlage</li>
            <li>Kontrolle der Abdichtung und Deckung</li>
            <li>Kleinere Spengler- und Reparaturarbeiten</li>
            <li>Ausführen von Kleinaufträgen </li>
          </ul>
        </p>
      </div>
      {/* contact  */}
      <h3 className="card-title">Kontact</h3>
      <div className="container">
        <img className="fäbi" src="../assets/pic.jpg" alt="" />
        <h3 className="avatar_name">Fabian Scholl</h3>
        <h5 className="avatar_title">Geschäftsführer</h5>
        <div>
          <a href="tel:+4172620589">+41 76 262 0589</a>
        </div>
        <div>
          <a href="mailto:scholl.4.you@gmail.com">scholl.4.you@gmail.com</a>
        </div>
        <address>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://goo.gl/maps/mjsmuuvKTC9ydA267"
          >
            Ober Rennweg 2<br /> 8633 Wolfhausen
          </a>
        </address>
      </div>
      <footer>
        <img className="nav-logo" src="../assets/SVGLogo.svg" alt="" />
        <div>CHE-472.350.091</div>
        <p>Copyright © Your Website 2020</p>
      </footer>
    </>
  );
}
// 29553a
