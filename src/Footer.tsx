import './css/footer.css'

function Footer() {
    return (
        <div className='columns'>
            <PhoneTimes />
            <Support />
            <LearnMore />
            <Contacts />
        </div>
    )
}

function PhoneTimes() {
    return (
        <div>
            <h4>Åbningstider Telefon</h4>
            <div className='rows'>
                <p>Mandag - Torsdag:</p>
                <p>08:00 - 19:00</p>
            </div>
            <div className='rows'>
                <p>Fredag:</p>
                <p>08:00 - 15:30</p>
            </div>
            <div className='rows'>
                <p>Lørdag, Søndag og Helligdage:</p>
                <p>Lukket</p>
            </div>
            <br></br>
            <p className='footerTextTypography'> Kontakt Os </p>
            <br></br>
            <br></br>
            <h4>Åbningstider for pick-ups</h4>
            <p className='footerTextTypography'>Se åbningstider og addresser for alle Pick-Up Points i København, Odense og Aarhus, klik her</p>
        </div>
    )
}

function Support() {
    return (
        <div>
            <h4>Support</h4>
            <p className='footerTextTypography'>Guides</p>
            <p className='footerTextTypography'>Forsendelse og levering</p>
            <p className='footerTextTypography'>Om Pick-Up points</p>
            <p className='footerTextTypography'>Defekt vare</p>
            <p className='footerTextTypography'>Kundeservice</p>
            <p className='footerTextTypography'>Handelsbetingelser</p>
            <p className='footerTextTypography'>Persondatapolitik</p>
        </div>
    )
}

function LearnMore() {
    return (
        <div>
            <h4>Lær Mere</h4>
            <p className='footerTextTypography'>Om os</p>
            <p className='footerTextTypography'>Nyhedsrum</p>
            <p className='footerTextTypography'>Bæredygtighed</p>
            <p className='footerTextTypography'>Arbejd hos os</p>
            <p className='footerTextTypography'>Ofte stillede spørgsmål</p>
        </div>
    )
}

function Contacts() {
    return (
        <div>
            <h4>Kontakter</h4>
        </div>
    )
}

export default Footer