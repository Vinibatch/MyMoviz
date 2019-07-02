import React, { Component } from 'react';
      import {  Row,
        Col,
        Container,
        Collapse,
        Navbar,
        NavbarToggler,
        Nav,
        NavItem,
        NavLink,
        Button,
        Card,
        CardImg,
        CardText,
        CardBody,
        CardTitle,
        Popover,
        PopoverHeader,
        PopoverBody} from 'reactstrap';
        import 'bootstrap/dist/css/bootstrap.min.css';
      import './App.css';
      import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
      import { faHeart } from '@fortawesome/free-solid-svg-icons';


      export default class Example extends React.Component {
        constructor(props) {
          super(props);
          this.toggleNavBar = this.toggleNavBar.bind(this);
          this.togglePopOver = this.togglePopOver.bind(this);
          // Here, we set the so called "states". The names are up to you.
          this.state = {
            isOpenNavBar: false,
            isOpenPopOver: false,
          };
        }
        // Opening of the navbar : this function is used to change isOpenNavBar state to true or false
        toggleNavBar() {
          this.setState({
            isOpenNavBar: !this.state.isOpenNavBar
          });
        }
        // Opening of the popover : this function is used to change isOpenPopOver state to true or false
        togglePopOver() {
          this.setState({
            isOpenPopOver: !this.state.isOpenPopOver
          });
        }
        render() {
          let movieList = [];

          for (var i  = 0; i < 20;  i++) {
            movieList.push(<Movie key={i}/>) ;           
          }



          return (
            <div>
            <div style={{marginBottom: 90}}>
                <Navbar color="dark" dark expand="md" fixed="top">
                    <span className="navbar-brand">
                        <img src="./logo.png" width="30" height="30" className="d-inline-block align-top" alt="logo myMoviz"/>
                           </span>
                         <NavbarToggler onClick={this.toggleNavBar} />
                             <Collapse isOpen={this.state.isOpenNavBar} navbar>
                               <Nav className="" navbar>
                                   <NavItem>
                                       <NavLink href="#" style={{color: "#FFFFFF"}}>Last Releases</NavLink>
                                          </NavItem>
                                      <NavItem>
                                   <NavLink href="#" style={{color: "#FFFFFF", marginRight: 10}}>My Movies</NavLink>
                                </NavItem>
                            <Button id="Popover1" onClick={this.togglePopOver} color="secondary">11 films</Button>
                         <Popover placement="bottom" isOpen={this.state.isOpenPopOver} target="Popover1" toggle={this.togglePopOver}>
                      <PopoverHeader>Derniers films</PopoverHeader>
                   <PopoverBody>Voici les derniers films likés.</PopoverBody>
                </Popover>
            </Nav>
              </Collapse>
                 </Navbar>
                   </div>

                <Container>
                <Row>
                  {movieList}
                </Row>
                </Container>
                </div>
          );
        }
      }

      class Movie  extends Component {
        render () {
          var styleHeart = {
            color: '#fc6861',
            position: 'absolute',
            top: '5%',
            left: '80%',
            cursor: 'pointer'
          }


return (
  <Col xs="12" sm="6" md="4" lg="3">
  <div style={{marginBottom:30}}>
    <Card>
      <CardImg top width="100%" src="../thumb.jpg" alt="Card image cap" />
      <FontAwesomeIcon size="2x" style={styleHeart} icon={faHeart} />
        <CardBody>
          <CardTitle>La Capsule Aftermovie</CardTitle>
          <CardText>Here we are ! Ca y'est ! Ils attaquent ReactJS. THE library... C'est parti!</CardText>
        </CardBody>
      </Card>
  </div>
</Col>



)
        }
      }