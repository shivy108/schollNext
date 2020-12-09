import Head from "next/head";

export default function Home() {
  return (
    <div className="container">
      <header>
        <meta
          name="google-site-verification"
          content="C22oib_7TPDWI_Mo7fehI1rYBDVhdiTIPGwGroO6EaM"
        />
      </header>
      <section className="home">
        <h1>Scholl Garten- und Dachservice</h1>
        <h2>Ihr Partner im bereich Gartenunterhalt und Dachservice</h2>
      </section>
      <section className="services">
        <h1>Gartenservice</h1>
        <h2>Unser Aufgabengebiet im Gartenservice umfasst:</h2>
        <ul>
          <li>Pflege von Grünflächen</li>
          <li>Reinigung und Unterhalt von Aussenplätzen und Wegen</li>
          <li>Rasenpflege (Mähen, Sähen, Düngen und Vertikutieren)</li>
          <li>Rabatten pflegen und jäten</li>
          <li>Schneiden von kleineren Bäumen, Hecken, Sträucher und Stauden</li>
          <li>Neubepflanzungen</li>
          <li>Ausführen von kleineren Gartenbauarbeiten </li>
          <li>Entsorgung von Gartenabfällen und Grüngut </li>
          <li> Winterdienst</li>
          <li>Hauswartung und Objektbetreuung</li>
        </ul>
      </section>
      <section className="services">
        <h1>Dachservice</h1>
        <h2>
          Servicearbeiten am Dach sind ein wichtiger Bestandteil zur Eindämmung
          möglicher Schäden und tragen zum Erhalt der zuverlässigen Entwässerung
          bei.
        </h2>
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
      </section>
      <section className="contact">
        <h1>Kontakt</h1>
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
      </section>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
