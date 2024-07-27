import React, { useState } from "react";
import "./LoginSignupPage.css";
import Header from "../header/Header";
import Footer from "../footer/Footer";

const LoginSignupPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div>
      <Header />
      <div>
        <div className="loginSignupPage">
          <div className="formContainer">
            {isLogin ? (
              <div className="loginContainer">
                <h2>Login</h2>
                <form>
                  <div className="formGroup">
                    <input
                      type="text"
                      id="username"
                      name="username"
                      placeholder="Username"
                      required
                    />
                  </div>
                  <div className="formGroup">
                    <input
                      type="password"
                      id="password"
                      name="password"
                      placeholder="Password"
                      required
                    />
                  </div>
                  <button type="submit">Login</button>
                </form>
                <div className="toggleLink">
                  <p>
                    Don't have an account?{" "}
                    <span onClick={toggleForm}>Sign up here</span>
                  </p>
                </div>
              </div>
            ) : (
              <div className="signupContainer">
                <h2>Sign Up</h2>
                <form>
                  <div className="signUpForm ">
                    <input
                      type="text"
                      id="username"
                      name="username"
                      placeholder="Username"
                      required
                    />
                  </div>
                  <div className="signUpForm ">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Email"
                      required
                    />
                  </div>
                  <div className="signUpForm ">
                    <input
                      type="tel"
                      id="mobile"
                      name="mobile"
                      placeholder="mobile number"
                      required
                    />
                  </div>
                  <div className="signUpForm ">
                    <input
                      type="password"
                      id="password"
                      name="password"
                      placeholder="Password"
                      required
                    />
                  </div>
                  <div className="signUpForm ">
                    <input
                      type="password"
                      id="confirmPassword"
                      name="confirmPassword"
                      placeholder="confirmPassword"
                      required
                    />
                  </div>
                  <button type="submit">Sign Up</button>
                </form>
                <div className="toggle-link">
                  <p>
                    Already have an account?{" "}
                    <span onClick={toggleForm}>Login here</span>
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LoginSignupPage;
