import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from "reactstrap";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false
    };
    this.toggleModal = this.toggleModal.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen
    });
  }

  handleLogin(event) {
    this.toggleModal();
    alert(
      " Username: " +
        this.username.value +
        " Password: " +
        this.password.value +
        " Remember me " +
        this.remember.value
    );
    event.preventDefaul();
  }

  render() {
    return (
      <React.Fragment>
        <nav className="navbar navbar-expand-sm navbar-light border mb-4">
          <div className="container">
            <Link className="navbar-brand" to="/home">
              <div className="logo-img" alt="Logo image" />
              Home
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#mobile-nav"
            >
              <span className="navbar-toggler-icon" />
            </button>

            <div className="collapse navbar-collapse" id="mobile-nav">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/howitworks">
                    How it Works
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/shops">
                    Charities
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/artist">
                    Arts and Craft Sale
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contact">
                    Contact Us
                  </Link>
                </li>
              </ul>

              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Button className="nav-link" color="link" to="/register">
                    Join Us
                  </Button>
                </li>
                <li className="nav-item">
                  <Button
                    className="nav-link"
                    color="link"
                    onClick={this.toggleModal}
                  >
                    Login
                  </Button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
          <Form onSubmit={this.handleLogin}>
            <ModalBody>
              <FormGroup>
                <Label htmlFor="username">Username:</Label>
                <Input
                  type="text"
                  id="username"
                  name="username"
                  innerRef={input => (this.username = input)}
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="password">Password:</Label>
                <Input
                  type="text"
                  id="password"
                  name="password"
                  innerRef={input => (this.password = input)}
                />
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input
                    type="checkbox"
                    name="remember"
                    innerRef={input => (this.remember = input)}
                  />
                  Remember Me
                </Label>
              </FormGroup>
            </ModalBody>
            <ModalFooter>
              <Button type="submit" value="submit" className="float-left">
                Login
              </Button>
            </ModalFooter>
          </Form>
        </Modal>
      </React.Fragment>
    );
  }
}

export default Navbar;
