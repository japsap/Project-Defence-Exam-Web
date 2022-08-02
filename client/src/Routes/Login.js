import React from "react";

//bootrestrap
import { Container, Row, Col } from "react-bootstrap";

const Login = (props) => {
  const {
    email,
    password,
    setEmail,
    setPassword,
    emailError,
    passwordError,
    hasAccount,
    setHasAccount,
  } = props;
  return (
    <>
      <Container>
        {hasAccount ? (
          <div className="logIn"></div>
        ) : (
          /// email
          <div className="signIn">
            <div className="logIn__group">
              <input 
                className="logIn__input" 
                type="text" 
                required 
                value={email}
              />
              <span className="logIn__highlight"></span>
              <span className="logIn__bar"></span>
              <label className="logIn__label">Email</label>
            </div>

            {/* password */}
            <div className="logIn__group">
              <input 
                className="logIn__input" 
                type="text" 
                required 
                value={password}
              />
              <span className="logIn__highlight"></span>
              <span className="logIn__bar"></span>
              <label className="logIn__label">Password</label>
            </div>
          </div>
        )}
      </Container>
    </>
  );
};

export default Login;
