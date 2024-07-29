import React, { useState, useEffect } from "react";
import "./LoginSignupPage.css";
import irctc from "../../assets/irctc_logo.png";
import irctc2 from "../../assets/irctc2.png";
import { useNavigate } from "react-router-dom";
// Define the data object


const LoginSignupPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [signupUsername, setSignupUsername] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [signupMobile, setSignupMobile] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const toggleForm = () => {
    setIsLogin(!isLogin);
    setErrors({});
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const storedUsername = localStorage.getItem("username");
    const storedPassword = localStorage.getItem("password");
    if (
      username === storedUsername && password === storedPassword
    ) {
      navigate("/home"); // Navigate to the home page
    } else {
      alert("Invalid username or password");
    }
  };

  const validateSignup = () => {
    const newErrors = {};
    if (!signupUsername) newErrors.signupUsername = "Username is required";
    if (!signupEmail) newErrors.signupEmail = "Email is required";
    if (!signupMobile) newErrors.signupMobile = "Mobile number is required";
    if (!signupPassword) newErrors.signupPassword = "Password is required";
    if (signupPassword !== confirmPassword)
      newErrors.confirmPassword = "Passwords do not match";

    return newErrors;
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateSignup();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      // Submit the form (e.g., send data to the backend)
      localStorage.setItem("username", signupUsername);
      localStorage.setItem("password", signupPassword);
      setSignupUsername("");
      setSignupEmail("");
      setSignupMobile("");
      setSignupPassword("");
      setConfirmPassword("");
      setErrors({});
      setIsLogin(!isLogin);
      alert("Signup successful");
    }
  };

  return (
    <div>
      <div className="imgDiv">
        <img src={irctc} alt="" />
        <img src={irctc2} alt="" />
      </div>
      <div>
        <div className="loginSignupPage">
          <div className={isLogin ? "formContainer loginMargin" : "formContainer"}>
            {isLogin ? (
              <div className="loginContainer">
                <h2>Login</h2>
                <form onSubmit={handleLoginSubmit}>
                  <div className="formGroup">
                    <input
                      type="text"
                      id="username"
                      name="username"
                      placeholder="Username"
                      required
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </div>
                  <div className="formGroup">
                    <input
                      type="password"
                      id="password"
                      name="password"
                      placeholder="Password"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
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
                <form onSubmit={handleSignupSubmit}>
                  <div className="formGroup">
                    <input
                      type="text"
                      id="username"
                      name="username"
                      placeholder="Username"
                      value={signupUsername}
                      onChange={(e) => setSignupUsername(e.target.value)}
                    />
                    {errors.signupUsername && <p className="error">{errors.signupUsername}</p>}
                  </div>
                  <div className="formGroup">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Email"
                      value={signupEmail}
                      onChange={(e) => setSignupEmail(e.target.value)}
                    />
                    {errors.signupEmail && <p className="error">{errors.signupEmail}</p>}
                  </div>
                  <div className="formGroup">
                    <input
                      type="tel"
                      id="mobile"
                      name="mobile"
                      placeholder="Mobile Number"
                      value={signupMobile}
                      onChange={(e) => setSignupMobile(e.target.value)}
                    />
                    {errors.signupMobile && <p className="error">{errors.signupMobile}</p>}
                  </div>
                  <div className="formGroup">
                    <input
                      type="password"
                      id="password"
                      name="password"
                      placeholder="Password"
                      value={signupPassword}
                      onChange={(e) => setSignupPassword(e.target.value)}
                    />
                    {errors.signupPassword && <p className="error">{errors.signupPassword}</p>}
                  </div>
                  <div className="formGroup">
                    <input
                      type="password"
                      id="confirmPassword"
                      name="confirmPassword"
                      placeholder="Confirm Password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}
                  </div>
                  <button type="submit">Sign Up</button>
                </form>
                <div className="toggleLink">
                  <p>
                    Have an account? <span onClick={toggleForm}>Login here</span>
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default LoginSignupPage;
