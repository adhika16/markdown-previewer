import React, { useState, useEffect } from "react";
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { auth } from "../configs/firebaseConfig";
import { NavLink as RRNavLink, useNavigate } from "react-router-dom";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Card,
  CardBody,
  CardTitle,
  Row,
  Col,
  Tooltip,
} from "reactstrap";
import "./Login.css";
import { useForm } from "react-hook-form";
import FormInput from "./forms/FormInput";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const [tooltipOpen, setTooltipOpen] = useState(false);
  const toggle = () => setTooltipOpen(!tooltipOpen);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        navigate("/");
      }
    });

    // Cleanup subscription on component unmount
    return () => unsubscribe();
  }, []);

  const onLogin = async (data) => {
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        navigate("/home");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  return (
    <div className="login-container">
      <Card className="login-card">
        <CardBody>
          <CardTitle tag="h5">Login</CardTitle>
          <Form onSubmit={handleSubmit(onLogin)}>
            <FormGroup>
              <Label for="email">Email</Label>
              <FormInput
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
                register={register}
                validations={{
                  required: true,
                  pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                }}
              />
              {errors.email && (
                <p className="warn-message">Please check the Email</p>
              )}
            </FormGroup>
            <FormGroup>
              <Label for="password">Password</Label>
              <FormInput
                type="password"
                name="password"
                id="password"
                placeholder="Enter your password"
                register={register}
                validations={{
                  required: true,
                  pattern:
                    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&-])[A-Za-z\d@$!%*?&-]{8,}$/,
                }}
              />
              <Tooltip
                isOpen={tooltipOpen}
                target="password"
                toggle={toggle}
              >
                Minimum eight characters, at least one letter, one number and
                one special character.
              </Tooltip>
              {errors.password && (
                <p className="warn-message">Please check the Password</p>
              )}
            </FormGroup>
            <Row>
              <Col>
                <Button color="primary" type="submit">
                  Login
                </Button>
              </Col>
              <Col>
                <p className="text-sm text-center">
                  No account yet? <RRNavLink to="/signup">Sign up</RRNavLink>
                </p>
              </Col>
            </Row>
          </Form>
        </CardBody>
      </Card>
    </div>
  );
};

export default Login;
