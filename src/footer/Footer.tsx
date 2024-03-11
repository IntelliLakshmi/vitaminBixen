import "./footer.css";

function Footer() {
  return (
    <div>
      <div className="footer whiteText footerColor">
        <PhoneTimes />
        <Support />
        <LearnMore />
        <Contacts />
        <SocialMedia />
      </div>
    </div>
  );
}

function PhoneTimes() {
  return (
    <div>
      <div className="flexRow">
        <i className="material-icons margin">headset_mic</i>
        <h4 className="icon-text margin">Åbningstider Telefon</h4>
      </div>
      <div className="rows">
        <p className="margin">Mandag - Torsdag:</p>
        <p className="margin">08:00 - 19:00</p>
      </div>
      <div className="rows">
        <p className="margin">Fredag:</p>
        <p className="margin">08:00 - 15:30</p>
      </div>
      <div className="rows">
        <p className="margin">Lørdag, Søndag og Helligdage:</p>
        <p className="margin">Lukket</p>
      </div>
      <br></br>
      <p className="footerTextTypography"> Kontakt Os </p>
      <br></br>
      <br></br>
      <h4 className="margin"> Åbningstider for pick-ups</h4>
      <p className="footerTextTypography">
        Se åbningstider og addresser for alle Pick-Up Points i København, Odense
        og Aarhus,{" "}
        <a className="whiteText" href="">
          klik her
        </a>
      </p>
    </div>
  );
}

function Support() {
  return (
    <div>
      <h4 className="margin">Support</h4>
      <p className="footerTextTypography">Guides</p>
      <p className="footerTextTypography">Forsendelse og levering</p>
      <p className="footerTextTypography">Om Pick-Up points</p>
      <p className="footerTextTypography">Defekt vare</p>
      <p className="footerTextTypography">Kundeservice</p>
      <p className="footerTextTypography">Handelsbetingelser</p>
      <p className="footerTextTypography">Persondatapolitik</p>
    </div>
  );
}

function LearnMore() {
  return (
    <div>
      <h4 className="margin">Lær Mere</h4>
      <p className="footerTextTypography">Om os</p>
      <p className="footerTextTypography">Nyhedsrum</p>
      <p className="footerTextTypography">Bæredygtighed</p>
      <p className="footerTextTypography">Arbejd hos os</p>
      <p className="footerTextTypography">Ofte stillede spørgsmål</p>
    </div>
  );
}

function Contacts() {
  return (
    <div>
      <h4 className="margin">Kontakter</h4>
      <div className="flexRow">
        <i className="material-icons margin">location_on</i>
        <p className="icon-text contactsText margin">
          Anker Engelunds Vej 101, 2800 Kongens
        </p>
      </div>
      <div className="flexRow">
        <i className="material-icons margin">call</i>
        <p className="icon-text contactsText margin">+45 8888 8888</p>
      </div>
      <div className="flexRow">
        <i className="material-icons margin">mail</i>
        <p className="icon-text contactsText margin">vitaminbixen@gmail.com</p>
      </div>
    </div>
  );
}

function SocialMedia() {
  return (
    <div>
      <h4 className="margin">Sociale Medier</h4>
      <div className="flexRow">
        <i className="material-icons margin2">facebook</i>
        <p className="icon-text socialMediaText margin2">
          <a className="whiteText" href="">
            Facebook
          </a>
        </p>
      </div>
    </div>
  );
}

export default Footer;
