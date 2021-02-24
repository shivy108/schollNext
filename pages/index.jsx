import Head from "next/head";
import { AiTwotonePhone } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { HiLocationMarker } from "react-icons/hi";
import { useState } from "react";

export default function Home() {
  const [load, setLoad] = useState(false);
  const [active, setactive] = useState(false);
  const [activeContact, setactiveContact] = useState(false);

  const changeLoad = () => {
    setTimeout(() => setLoad(true), 3000);
  };

  const onScroll = () => {
    console.log(window.pageYOffset);
  };

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
      {load ? (
        <>
          {" "}
          <nav>
            <div className="nav">
              <a
              
                onClick={() => {
                  setactiveContact(false);
                  setactive(false);
                }}
                href="#pageTop"
              >
                <img className="nav-logo" src="../assets/SVGLogo.svg" alt="" />
              </a>

              <div className="nav-menu-links">
                <a
                  className={active ? "active" : ""}
                  onClick={() => {
                    if (activeContact) {
                      setactiveContact(false);
                      setactive(!active);
                    }
                    setactive(!active);
                  }}
                  href="#service"
                >
                  Service
                </a>

                {/* <a href="#spengler">Spengler</a> */}
                <a
                  className={activeContact ? "active" : ""}
                  onClick={() => {
                    if (active) {
                      setactive(false);
                      setactiveContact(!activeContact);
                    }
                    setactiveContact(!activeContact);
                  }}
                  href="#contact"
                >
                  Kontakt
                </a>
              </div>
            </div>
          </nav>
          // {/* h1 for seo */}
          <h1 className="hide">Scholl Garten- und Dachservice</h1>
          // {/* masthead */}
          <div id="pageTop" className="container">
            <img
              className="logo"
              src="../assets/SVGLogo.svg"
              alt="Scholl Garten- und Dachservice"
            />
            <h2 className="subtitle">Ihr Partner im garten und dachservice</h2>
          </div>
          // {/* Services  */}
          <h3 id="service" className="card-title">
            Services
          </h3>
          <div className="title-wrapper">
            <div className="line-left"></div>
            <img
              className="wheel-barrow"
              src="../assets/wheelbarrow.svg"
              alt=""
            />
            <div className="line-right"></div>
          </div>
          <div className="split-container">
            <p id="garden" className="garden">
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
            <p id="spengler" className="spengler">
              <h4>Dach</h4>
              <p>
                Servicearbeiten am Dach sind ein wichtiger Bestandteil zur
                Eindämmung möglicher Schäden und tragen zum Erhalt der
                zuverlässigen Entwässerung bei:
              </p>
              <ul>
                <li>Regelmässige Pflege von Dachbegrünung</li>
                <li>Entfernen und ausjäten von Fremdbewuchs</li>
                <li>
                  Reinigung und Kontrolle aller Dachwasserabläufe, Notüberläufe-
                  und Dachdurchdringungen
                </li>
                <li>
                  Kontrolle aller Spenglerarbeiten inkl.
                  Wandanschlüsse/Kittfugen
                </li>
                <li>Kontrolle von Blitzschutzanlage</li>
                <li>Kontrolle der Abdichtung und Deckung</li>
                <li>Kleinere Spengler- und Reparaturarbeiten</li>
                <li>Ausführen von Kleinaufträgen </li>
              </ul>
            </p>
          </div>
          // {/* contact  */}
          <div id="contact" className="container-contact">
            <h3 className="card-title">Kontakt</h3>
            <div className="title-wrapper">
              <div className="line-left"></div>
              <img
                className="wheel-barrow"
                src="../assets/wheelbarrow.svg"
                alt=""
              />
              <div className="line-right"></div>
            </div>
            <img className="fäbi" src="../assets/pic.jpg" alt="" />
            <h3 className="avatar_name">Fabian Scholl</h3>
            <div className="contact">
              <div>
                <AiTwotonePhone />
                <a href="tel:+4172620589">+41 76 262 0589</a>
              </div>
              <div>
                <MdEmail />
                <a href="mailto:scholl.4.you@gmail.com">
                  scholl.4.you@gmail.com
                </a>
              </div>
              <address>
                <HiLocationMarker />
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://goo.gl/maps/mjsmuuvKTC9ydA267"
                >
                  Ober Rennweg 2<br /> 8633 Wolfhausen
                </a>
              </address>
            </div>
          </div>
          <footer>
            <img className="nav-logo" src="../assets/SVGLogo.svg" alt="" />

            <p>Copyright © Scholl Garten-und Dachservice 2020</p>
            <p>CHE-472.350.091</p>
          </footer>
        </>
      ) : (
        <div onClick={changeLoad()} className="loadingScreen">
          <h1>Gruezi Wohl</h1>
          <img
            className="wheel-barrow-loading"
            src="../assets/wheelbarrow.svg"
            alt=""
          />
          <h2>Herzlich Wilkommen</h2>
        </div>
      )}
    </>
  );
}
// 29553a
