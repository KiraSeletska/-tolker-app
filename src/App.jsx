import { useEffect, useState } from "react";
import "./App.css";
import {
  FaWhatsapp,
  FaTelegramPlane,
  FaInstagram,
  FaFacebook,
  FaLinkedin,
  FaDownload,
} from "react-icons/fa";

import logoLight from "./assets/bflite.png";
import logoDark from "./assets/bfdark.png";
import olesiaPortrait from "./assets/olesia-portrait.png";
import { translations } from "./translations";
import RibbonBanner from "./components/RibbonBanner";
import MobileQuickNav from "./components/MobileQuickNav";
import ImageModal from "./components/ImageModal";
import ScrollTopButton from "./components/ScrollTopButton";


function App() {

  const [openedImage, setOpenedImage] = useState(null);

  const getDefaultLanguage = () => {
    const browserLang = navigator.language.slice(0, 2);
    const supported = ["de", "ru", "uk", "en"];

    return supported.includes(browserLang) ? browserLang : "de";
  };

  const getDefaultTheme = () => {
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  };

  const [language, setLanguage] = useState(getDefaultLanguage);
  const [theme, setTheme] = useState(getDefaultTheme);
  const [activeReview, setActiveReview] = useState(0);

  const t = translations[language];
  const logo = theme === "light" ? logoLight : logoDark;

  useEffect(() => {
    const favicon = document.getElementById("favicon");

    if (!favicon) return;

    favicon.href =
      theme === "dark"
        ? `/favicon-dark.png?v=${Date.now()}`
        : `/favicon-light.png?v=${Date.now()}`;
  }, [theme]);

  const reviewImages = import.meta.glob("./assets/reviews/*.png", {
    eager: true,
  });

  const reviews = Object.values(reviewImages).map((module) => module.default);

  const priceTheme = theme === "dark" ? "dark" : "light";
  const priceImageFile = `/price-site-${priceTheme}-${language}.png`;
  const priceDownloadFile = `/price-download-${priceTheme}-${language}.pdf`;

  const vcardFile = theme === "dark" ? "/vcard-dark.png" : "/vcard-light.png";
  const downloadLabel = t.downloadVcard;

  return (
    <div className={`app ${theme}`}>
      <header className="header">
        <a href="#home" className="logoLink">
          <div className="logoWrapper">
            <img src={logo} alt="TOLKER" className="logo" />
          </div>
        </a>

        <nav className="nav">
          <a href="#about">{t.navAbout}</a>
          <a href="#interpreter">{t.navInterpreter}</a>
          <a href="#services">{t.navServices}</a>
          <a href="#reviews">{t.navReviews}</a>
          <a href="#contacts">{t.navContacts}</a>
        </nav>

        <div className="controls">
          <select value={language} onChange={(e) => setLanguage(e.target.value)}>
            <option value="de">DE</option>
            <option value="uk">UA</option>
            <option value="ru">RU</option>
            <option value="en">EN</option>
          </select>

          <button
            className="themeButton"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          >
            {theme === "light" ? "🌙" : "☀️"}
          </button>
        </div>

      </header>
<MobileQuickNav />
<ScrollTopButton />
      <main>
        <section id="home" className="section heroSection">
          <div className="heroContent">
            <h1>{t.heroTitle}</h1>
            <p className="heroText">{t.heroText}</p>

            <div className="heroActions">
              <a href="#contacts" className="primaryButton">
                {t.heroButton}
              </a>
              <a href="#services" className="secondaryButton">
                {t.navServices}
              </a>
            </div>
          </div>

          <div className="heroCard">
            <img src={logo} alt="TOLKER" />
          </div>
          <RibbonBanner theme={theme} text={t.openingRibbon} />
        </section>

        <section id="about" className="section cardSection">
          <div className="sectionHeader">
            <p className="sectionLabel">01</p>
            <h2>{t.aboutTitle}</h2>
          </div>

          <div className="textGrid">
            <div className="textCard large">
              <p>{t.aboutText1}</p>
              <p>{t.aboutText2}</p>
            </div>

            <div className="textCard">
              <h3>{t.helpTitle}</h3>
              <ul>
                <li>{t.help1}</li>
                <li>{t.help2}</li>
                <li>{t.help3}</li>
                <li>{t.help4}</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="interpreter" className="section cardSection interpreterSection">
          <div className="sectionHeader">
            <p className="sectionLabel">02</p>
            <h2>{t.navInterpreter}</h2>
          </div>

          <div className="interpreterCard">
            <div className="interpreterIntro">
              <div className="interpreterIntroTop">
                <p className="eyebrow">TOLKER · Übersetzung · Begleitung</p>
                <h3>{t.reviewAboutTitle}</h3>
                <p className="interpreterRole">{t.reviewAboutRole}</p>
                <p className="interpreterLang">UA / RU ↔ DE</p>
              </div>
            </div>

            <div className="interpreterPhotoBox">
              <img
                src={olesiaPortrait}
                alt="Olesia S."
                className="interpreterPortrait"
              />
            </div>

            <div className="interpreterText">
              {t.reviewAboutParagraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}

              <p className="reviewHelpIntro">{t.reviewHelpIntro}</p>

              <ul>
                {t.reviewHelpItems.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>

              <p>{t.reviewAboutClosing}</p>
            </div>
          </div>
        </section>

        <section id="services" className="section cardSection">
          <div className="sectionHeader">
            <p className="sectionLabel">03</p>
            <h2>{t.servicesTitle}</h2>
            <p>{t.servicesText}</p>
          </div>

          <div className="servicesGrid">
            <div className="priceWrapper">
              <img
  src={priceImageFile}
  alt="TOLKER price list"
  className="clickableImage"
  onClick={() => setOpenedImage(priceImageFile)}
/>
            </div>

            <div className="servicesInfo">
              <h3>{t.servicesInfoTitle}</h3>

              <ul>
                <li>{t.service1}</li>
                <li>{t.service2}</li>
                <li>{t.service3}</li>
                <li>{t.service4}</li>
                <li>{t.service5}</li>
                <li>{t.service6}</li>
                <li>{t.service7}</li>
              </ul>

              <p className="servicesEnding">{t.servicesEnding}</p>

              <div className="servicesDownloadRow">
                <a className="downloadButton" href={priceDownloadFile} download>
                  {t.downloadPrice}
                </a>

                <p className="servicesNote">
                  <span>{t.importantWord}</span> {t.importantNote}
                </p>
              </div>
            </div>
          </div>
        </section>

<section id="reviews" className="section cardSection">
  <div className="sectionHeader">
    <p className="sectionLabel">04</p>
    <h2>{t.reviewsTitle}</h2>
    <p>{t.reviewsText}</p>
  </div>

  <div className="reviewsGrid">
    <div className="reviewsInfoCard">
      <h3>{t.reviewsSideTitle}</h3>
      <p>{t.reviewsSideText}</p>

      <ul>
        <li>{t.reviewsSidePoint1}</li>
        <li>{t.reviewsSidePoint2}</li>
        <li>{t.reviewsSidePoint3}</li>
      </ul>
    </div>

    <div className="reviewCarousel">
      <button
        type="button"
        className="carouselButton"
        onClick={() =>
          setActiveReview(
            (activeReview - 1 + reviews.length) % reviews.length
          )
        }
      >
        ‹
      </button>

      <img
        src={reviews[activeReview]}
        alt={`Review ${activeReview + 1}`}
        className="clickableImage"
        onClick={() => setOpenedImage(reviews[activeReview])}
      />

      <button
        type="button"
        className="carouselButton"
        onClick={() =>
          setActiveReview((activeReview + 1) % reviews.length)
        }
      >
        ›
      </button>
    </div>
  </div>
</section>

        <section id="contacts" className="section contactSection">
          <div className="sectionHeader">
            <p className="sectionLabel">05</p>
            <h2>{t.contactsTitle}</h2>
            <p>
              {t.consultation} {t.contactsText}
            </p>
          </div>

          <div className="contactsLayout">
            <div className="contactMainCard">
              <div className="contactRows">
                <a href="mailto:info@tolker.de">
                  <span>✉️</span>
                  <span>info@tolker.de</span>
                </a>

                <a href="tel:+491605757277">
                  <span>📞</span>
                  <span>+49 (160) 57-57-277</span>
                </a>

              <div className="socialLinks">
  <a
    href="https://wa.me/491605757277"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="WhatsApp"
  >
    <FaWhatsapp />
  </a>

  <a
    href="https://t.me/TOLKER_de"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Telegram"
  >
    <FaTelegramPlane />
  </a>
  <a
    href="https://www.facebook.com/tolker.de"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Facebook"
  >
    <FaFacebook />
  </a>
<a
  href="https://www.instagram.com/tolker.de"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Instagram"
>
  <FaInstagram />
</a>

<a
  href="https://www.linkedin.com/company/tolker-de"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="LinkedIn"
>
  <FaLinkedin />
</a>

  <a
    href={vcardFile}
    download
    className="vcardButton"
    aria-label={downloadLabel}
  >
    <FaDownload />
    <span>{downloadLabel}</span>
  </a>
</div>

              </div>
            </div>

            <div className="socialCard">
              <div className="adres">
                <div className="contactItem">
                  <span>📍</span>
                  <span>83278 Traunstein, Bayern, Deutschland</span>
                </div>

                <div className="contactItemTime">
                  <span>🕘</span>
                  <div className="time">
                    <span>Mo–Fr: 09:00–18:00</span>
                    <span>Sa: 10:00–16:00</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
           <section className="seoSection">

          <p>

            TOLKER — Sprachmittlung und Begleitung in Deutschland.

            Übersetzung und Unterstützung für ukrainisch- und russischsprachige Menschen

            in Traunstein, Traunreut, Rosenheim, München und deutschlandweit.

            Hilfe bei Arztterminen, Jobcenter, Krankenkasse,

            Ausländerbehörde und Dokumenten

          </p>

        </section>
      </main>
      <ImageModal

        src={openedImage}

        alt="TOLKER document"

        isOpen={Boolean(openedImage)}

        onClose={() => setOpenedImage(null)}

      />
    </div>
  );
}

export default App;