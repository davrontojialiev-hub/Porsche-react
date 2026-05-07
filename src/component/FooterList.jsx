
const FooterList = () => {
    return (
        <div className="footer__nav-right">
            <ul className="footer__nav-list">
                <h3 className="footer__nav-list_title">CONTACT</h3>
                <li className="footer__nav-list_item">
                    <a
                        href="tel:+998 98 888 98 98"
                        className="footer__nav-list_item-link"
                    >
                        +998 98 888 98 98
                    </a>
                </li>
                <li className="footer__nav-list_item">
                    <a
                        href="mailto:porshe@gmail.com"
                        className="footer__nav-list_item-link"
                    >
                        porshe@gmail.com
                    </a>
                </li>
                <li className="footer__nav-list_item">
                    <a href="sms:32323232" className="footer__nav-list_item-link">
                        zipcode 32323232
                    </a>
                </li>
            </ul>
            <ul className="footer__nav-list">
                <h3 className="footer__nav-list_title">SOCIAL</h3>
                <li className="footer__nav-list_item">
                    <a href="#" className="footer__nav-list_item-link"> Instagram </a>
                </li>
                <li className="footer__nav-list_item">
                    <a href="#" className="footer__nav-list_item-link"> Facebook </a>
                </li>
                <li className="footer__nav-list_item">
                    <a href="#" className="footer__nav-list_item-link"> Telegram </a>
                </li>
            </ul>
        </div>
    )
}

export default FooterList