import React from 'react'
import { withTranslation, Trans } from 'react-i18next'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Form from 'react-bootstrap/Form'

class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            valueLang: "en"
        }
    }


    onLanguageHandle = (newLang) => {
        this.setState({ valueLang: newLang })
        this.props.i18n.changeLanguage(newLang)
    }

    render() {

        const { valueLang } = this.state
        const { t } = this.props

        const langs = {
            "en": "English",
            "es": "Español"
        }

        return (
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="/">ColleCube</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/">{t('menu.home')}</Nav.Link>
                        <Nav.Link href="/list">{t('menu.list')}</Nav.Link>
                        <Nav.Link href="/add">{t('menu.add')}</Nav.Link>
                    </Nav>
                    <Form inline>
                        <NavDropdown title={langs[valueLang]} id="basic-nav-dropdown">
                            <NavDropdown.Item active={valueLang === 'en'} onClick={(e) => this.onLanguageHandle('en')}>English</NavDropdown.Item>
                            <NavDropdown.Item active={valueLang === 'es'} onClick={(e) => this.onLanguageHandle('es')}>Español</NavDropdown.Item>
                        </NavDropdown>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default withTranslation()(Header);