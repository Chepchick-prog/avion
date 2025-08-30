import Input from "./Input"

export default function Footer ({type}) {
    switch (type) {
        case 'social':
            return <FooterSocial/>
        default:
            return <FooterSingUp/>
    }
}

function FooterSingUp () {
    return (
        <footer className="footer-container">
            <div className="footer-top">
                <FooterNavList name='Menu'>
                    <li><p >New arrivals</p></li>
                    <li><p>Best sellers</p></li>
                    <li><p>Recently viewed</p></li>
                    <li><p>Popular this week</p></li>
                    <li><p>All products</p></li>
                </FooterNavList>
                <FooterNavList name='Categories'>
                    <li><p >Crockery</p></li>
                    <li><p>Furniture</p></li>
                    <li><p>Homeware</p></li>
                    <li><p>Plant pots</p></li>
                    <li><p>Chairs</p></li>
                </FooterNavList>
                <FooterNavList name='Our company'>
                    <li><p >About us</p></li>
                    <li><p>Vacansies</p></li>
                    <li><p>Contact us</p></li>
                    <li><p>Privacy</p></li>
                    <li><p>Returns policy</p></li>
                </FooterNavList>
                <div>
                    <h5>Join our mailing list</h5>
                    <Input type='opaque' maxWidth={627}/>
                </div>
            </div>
            <hr className="footer-line"/>
            <div className="footer-bottom">
                <span className="body-small-txt">Copyright 2022 Avion LTD</span>
                <div className="social-links">
                    <img src="img/icon/Logo--linkedin.svg" alt="icon.svg"/>
                    <img src="img/icon/Logo--facebook.svg" alt="icon.svg"/>
                    <img src="img/icon/Logo--instagram.svg" alt="icon.svg"/>
                    <img src="img/icon/Logo--skype.svg" alt="icon.svg"/>
                    <img src="img/icon/Logo--twitter.svg" alt="icon.svg"/>
                    <img src="img/icon/Logo--pinterest.svg" alt="icon.svg"/>
                </div>
            </div>
        </footer>
    )
}

function FooterSocial () {
    return null
}

function FooterNavList ({children, name}) {
    return (
        <nav className="footer-nav-list">
            <ul className="body-small-txt">
                <li><h5>{name}</h5></li>
                {children}
            </ul>
        </nav>
    )
}