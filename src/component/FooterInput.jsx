

const FooterInput = () => {
    return (
        <form className="footer__nav-form">
            <input
                type="text"
                placeholder="First Name"
                className="footer__nav-form_input"
            />
            <input
                type="text"
                placeholder="Last Name"
                className="footer__nav-form_input"
            />
            <input
                type="text"
                placeholder="Email address"
                className="footer__nav-form_input"
            />
            <button className="footer__nav-form_btn">SUBMIT</button>
        </form>
    )
}

export default FooterInput