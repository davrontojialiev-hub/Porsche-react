import FooterInput from "./FooterInput"
import FooterList from "./FooterList"

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <nav className="footer__nav">
                   <FooterInput />
                    <FooterList />
                </nav>
            </div>
        </footer>
    )
}

export default Footer