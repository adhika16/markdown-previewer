import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { auth } from "../configs/firebaseConfig";
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
import "./SignUp.css";
import { useForm } from "react-hook-form";
import FormInput from "./forms/FormInput";

const SignUp = () => {
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

  const onSubmit = async (data) => {
    await createUserWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        navigate("/login");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };

  return (
    <div className="signup-container">
      <Card className="signup-card">
        <CardBody>
          <CardTitle tag="h5">Signup</CardTitle>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <FormGroup>
              <Label for="email">Email</Label>
              <FormInput
                type="email"
                name="email"
                id="email"
                placeholder="Email address"
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
                placeholder="Create password"
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
                  Sign up
                </Button>
              </Col>
              <Col>
                <p>
                  Already have an account?{" "}
                  <NavLink to="/login">Sign in</NavLink>
                </p>
              </Col>
            </Row>
          </Form>
        </CardBody>
      </Card>
    </div>
  );
};

export default SignUp;
