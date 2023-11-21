import React, { useState, useEffect } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Button
} from 'reactstrap';
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../configs/firebaseConfig";
import './NavBar.css'

function NavBar(args) {
  const [isOpen, setIsOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const navigate = useNavigate();

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/login");
        console.log("Signed out successfully");
      })
      .catch((error) => {
        // An error happened.
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        setIsLogin(true);
      } else {
        // User is signed out
        setIsLogin(false);
      }
    });

    // Cleanup subscription on component unmount
    return () => unsubscribe();
  }, []);

  return isLogin ? (
    <div>
      <Navbar {...args}>
        <NavbarBrand className="navbar-brand" href="/">MARKDOWN PREVIEWER</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
          </Nav>
            <Button color="light" onClick={handleLogout}>
              Logout
            </Button>
        </Collapse>
      </Navbar>
    </div>
  ) : (
    <div>
      <Navbar {...args}>
        <NavbarBrand className="navbar-brand" href="/">MARKDOWN PREVIEWER</NavbarBrand>
      </Navbar>
    </div>
  );
}

export default NavBar;