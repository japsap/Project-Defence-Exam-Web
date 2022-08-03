import React from "react";

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
    LogInHandler,
    handleSignUp,
  } = props;

  return (
    <>
      <div className="logIn__position">
        {hasAccount ? (
          <div className="logIn">
            {/* sign in text */}
            <h1>
              Login <span className="pink"> :P</span>
            </h1>
            <p className="mb-5">Login into our newest platform</p>
            {/* sign in text */}

            <div className="logIn__group">
              <input
                className="logIn__input"
                type="text"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <span className="logIn__highlight"></span>
              <span className="logIn__bar"></span>
              <label className="logIn__label">Email</label>
            </div>
            <p className="err__msg">{emailError}</p>

            {/* password */}
            <div className="logIn__group">
              <input
                className="logIn__input"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span className="logIn__highlight"></span>
              <span className="logIn__bar"></span>
              <label className="logIn__label">Password</label>
            </div>
            <p className="err__msg">{passwordError}</p>
            {/* password */}
            <div className="d-flex justify-content-between">
              <button className="signIn__btn" onClick={LogInHandler}>
                Log in
              </button>
              <p>
                New user?{" "}
                <span
                  className="pink cursor-pointer"
                  onClick={() => setHasAccount(!hasAccount)}
                >
                  Sign Up
                </span>
              </p>
            </div>
          </div>
        ) : (
          /// email
          <div className="signIn">
            {/* sign in text */}
            <h1>
              Sign Up<span className="pink"> :e</span>
            </h1>
            <p className="mb-5">Create an account at our newest platform</p>
            {/* sign in text */}

            <div className="logIn__group">
              <input
                className="logIn__input"
                type="text"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <span className="logIn__highlight"></span>
              <span className="logIn__bar"></span>
              <label className="logIn__label">Email</label>
            </div>
            <p className="err__msg">{emailError}</p>

            {/* password */}
            <div className="logIn__group">
              <input
                className="logIn__input"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span className="logIn__highlight"></span>
              <span className="logIn__bar"></span>
              <label className="logIn__label">Password</label>
            </div>

            <p className="err__msg">{passwordError}</p>
            {/* password */}

            <div className="d-flex justify-content-between">
              <button className="signIn__btn" onClick={handleSignUp}>
                Sign up
              </button>
              <p>
                Have an account?{" "}
                <span
                  className="pink cursor-pointer"
                  onClick={() => setHasAccount(!hasAccount)}
                >
                  Log in
                </span>
              </p>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Login;
