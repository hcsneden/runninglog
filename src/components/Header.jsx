import { useContext } from "react"
import { Navbar, Nav, Row, Col, NavDropdown, Container } from "react-bootstrap"
import { UserContext } from '../App';
import { Main } from './Main';
export const Header = () => {
    const { user, setUserContext } = useContext(UserContext);

    const userOnClick = (e) => {
        setUserContext(e.target.innerHTML)

    }

    return (
        <Navbar className="nav">


            {user}'s Running Log
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <NavDropdown title="" id="basic-nav-dropdown">
                    <NavDropdown.Item onClick={userOnClick}>Mal</NavDropdown.Item>
                    <NavDropdown.Item onClick={userOnClick}>Hannah</NavDropdown.Item>
                    <NavDropdown.Item onClick={userOnClick}>Lauren</NavDropdown.Item>
                </NavDropdown>
                {/* <Col md={3} sm={0} xs={0}></Col>
<Col className='tabs' md={3} sm={6}>
    <Nav variant="tabs" defaultActiveKey="Mal">
        <Nav.Item>
            <Nav.Link eventKey={'Mal'} onClick={userOnClick} >Mal</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link eventKey={'Hannah'} onClick={userOnClick}>Hannah</Nav.Link>
        </Nav.Item>
    </Nav>
</Col> */}
            </Navbar.Collapse>

        </Navbar>

    )
}