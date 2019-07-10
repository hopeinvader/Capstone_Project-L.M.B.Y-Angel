import React from 'react';
import { Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, DropdownToggle, DropdownItem, DropdownMenu, Collapse, Container, UncontrolledDropdown} from 'reactstrap';
import { logOut } from '../redux/auth/actions'
import { connect } from 'react-redux';
import { withRouter} from 'react-router-dom';
import './Navbar.css'



export class Navbar1 extends React.Component {
    constructor(props){
        super(props);

        this.toggleDown2 = this.toggleDown2.bind(this);
        this.toggleDown = this.toggleDown.bind(this);
        this.toggle = this.toggle.bind(this);
        this.toggleColl = this.toggleColl.bind(this);
        this.toggleColl2 = this.toggleColl2.bind(this);
        this.state = {
            isOpen: false,
            isDown: false,
            isDown2: false,
            isColl: false,
            isColl2: false
        };
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    toggleDown() {
        this.setState({
            isDown: !this.state.isDown
        })
    }

    toggleDown2() {
        this.setState({
            isDown2: !this.state.isDown2
        })
    }

    toggleColl() {
        this.setState({
            isColl: !this.state.isColl
        })
    }

    toggleColl2() {
        this.setState({
            isColl2: !this.state.isColl2
        })
    }

    LogInNav = () => {
        return(
        this.props.isAuthenticated ? (
         <NavItem>
            <NavLink href="/logout" style={this.state.isOpen ? Inline : NavMenu} onClick={this.props.logOutAction}>Log out</NavLink>
         </NavItem>) :
         (<NavItem >
            <NavLink href="/login" style={this.state.isOpen ? Inline : NavMenu}>Sign in</NavLink>
          </NavItem>)
          )
    }

    SignUpProfile = () => {
        return(
        this.props.isAuthenticated ? (
         <NavItem >
            <NavLink href={this.props.enOrIn ? '/pitch': '/profile'} style={this.state.isOpen ? Inline : NavMenuLast}> {this.props.enOrIn ? 'Pitch' : 'Profile'}</NavLink>
         </NavItem>) :
         (<NavItem >
            <NavLink href="/signup" style={this.state.isOpen ? Inline : NavMenuLast}>Sign up</NavLink>
          </NavItem>)
          )
    }

    renderNavbar = () => {
        const isOpen = this.state.isOpen
            return (
                isOpen ? (<Navbar style={NavBarColor} light expand="md">
                <NavbarBrand href="/"><img src='https://cpshpupload.s3-ap-southeast-1.amazonaws.com/logo.png' style={NavImg}/>L.M.B.Y Angel</NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse style={JCC} isOpen={this.state.isOpen} navbar>
                  <Nav  navbar style={TextCenter} className='navbarPD240'>
                    <NavItem style={Inline}>
                      <NavLink style={this.state.isOpen ? null : NavMenu} href="/">About</NavLink>
                    </NavItem>
                    <NavItem style={Inline}>
                        <NavLink style={this.state.isOpen ? null : NavMenu} onClick={this.toggleColl}>Investors</NavLink>
                        <Collapse isOpen={this.state.isColl} tag="a" className="nav-link" caret>

                              <DropdownItem style={TextStyle} href="/getstart/investors">Get Started</DropdownItem>
                              <DropdownItem style={BorderTop} divider/>
                              <DropdownItem style={TextStyle} tag="a" href="/search/entrepneurs">Search Entrepreneurs</DropdownItem>
                          </Collapse>
                    </NavItem>
                    <NavItem style={Inline}>
                        <NavLink style={this.state.isOpen ? null : NavMenu} href="#" onClick={this.toggleColl2}>Entrepreneurs</NavLink>
                        <Collapse isOpen={this.state.isColl2}>

                        <DropdownItem style={TextStyle} href="/getstart/entrepneurs">Get Started</DropdownItem>
                        <DropdownItem style={BorderTop} divider/>
                        <DropdownItem style={TextStyle} tag="a" href="/search/investors">Search Investors</DropdownItem>
                        </Collapse>
                    </NavItem>
                    <NavItem style={Inline}>
                        <NavLink style={this.state.isOpen ? null : NavMenuLast} href="/faq">Help</NavLink>
                    </NavItem>
                  </Nav>
                  <Nav style={TextCenter} navbar>
                    {this.LogInNav()}
                    {this.SignUpProfile()}
                  </Nav>
                  </Collapse>
              </Navbar>)
                :
                (<Navbar style={NavBarColor} light expand="md">
                <NavbarBrand href="/"><img src='https://cpshpupload.s3-ap-southeast-1.amazonaws.com/logo.png' style={NavImg}/>L.M.B.Y Angel</NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse style={JCC} isOpen={this.state.isOpen} navbar>
                  <Nav navbar  className='navbarPD240'>
                    <NavItem >
                      <NavLink  href="/" style={this.state.isOpen ? null : NavMenu}>About</NavLink>
                    </NavItem>
                    <NavItem >
                    <UncontrolledDropdown isOpen={this.state.isDown2}>
                      <DropdownToggle
                      tag="span"
                      onClick={this.toggleDown2}
                      data-toggle="dropdown"
                      aria-expanded={this.state.dropdownOpen}
                      >
                        <NavLink  href="#" style={this.state.isOpen ? null : NavMenu}>Investors</NavLink>
                      </DropdownToggle>
                          <DropdownMenu right>
                              <DropdownItem style={TextStyle} tag="a" href="/getstart/investors">Get Started</DropdownItem>
                              <DropdownItem style={BorderTop2} divider/>
                              <DropdownItem style={TextStyle} tag="a" href="/search/entrepneurs">Search Entrepreneurs</DropdownItem>
                          </DropdownMenu>
                     </UncontrolledDropdown>
                    </NavItem>
                    <NavItem >
                    <UncontrolledDropdown isOpen={this.state.isDown}>
                      <DropdownToggle
                      tag="span"
                      onClick={this.toggleDown}
                      data-toggle="dropdown"
                      aria-expanded={this.state.dropdownOpen}
                      >
                        <NavLink  href="#" style={this.state.isOpen ? null : NavMenu}>Entrepreneurs</NavLink>
                      </DropdownToggle>
                          <DropdownMenu right>
                              <DropdownItem style={TextStyle} tag="a" href="/getstart/entrepneurs">Get Started</DropdownItem>
                              <DropdownItem style={BorderTop2} divider/>
                              <DropdownItem style={TextStyle} tag="a" href="/search/investors">Search Investors</DropdownItem>
                          </DropdownMenu>
                     </UncontrolledDropdown>
                    </NavItem>
                    <NavItem >
                        <NavLink  href="/faq" style={this.state.isOpen ? null : NavMenuLast}>Help</NavLink>
                    </NavItem>
                  </Nav>
                  <Nav navbar>
                    {this.LogInNav()}
                    {this.SignUpProfile()}
                  </Nav>
                  </Collapse>
              </Navbar>)
            )
        }
     

    
    render() {
        return (
            <div>
                {this.renderNavbar()}
            </div>
        )
    }
}

const NavImg = {
    height: 48,
    width: 48,
    marginRight: 10
}

const NavMenuPD = {
    paddingLeft: 240
}

const NavMenuPD2 = {
    paddingLeft: 140
}

const NavMenu = {
    borderRight: '1px solid #e5e5e5',
    paddingRight: 20,
    marginRight: 20,
    whiteSpace: 'nowrap'

}

const NavMenuLast = {
    paddingRight: 20,
    marginRight: 20,
    whiteSpace: 'nowrap'
}

const JCC = {
    justifyContent: 'space-between'
}

const NavBarColor = {
    color: '#e8ebef',
    zIndex: 1031
}

const ContainerStyle = {
    padding: 0,
    margin: 0
}

const TextCenter = {
    textAlign: 'center'
}

const Inline = {
    display: 'inline-block',
    whiteSpace: 'nowrap'
}

const BorderTop = {
    width: '20%',
    margin: '0 auto'
}

const BorderTop2 = {
    width: '50%',
    margin: '0 auto'
}

const TextStyle = {
    textAlign: 'center',
    fontSize: 10,
    padding: 10
}

export const NavbarTest = withRouter(
    connect((state)=>({
        isAuthenticated: state.auth.isAuthenticated,
        enOrIn: state.auth.enOrIn
    })
    ,
    (dispatch) => ({
       logOutAction: ()=> dispatch(logOut())
    })
)(Navbar1))