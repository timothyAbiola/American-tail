import React from "react";
import bike from "../src/assets/bikeman.png";
import { FaUser } from "react-icons/fa6";
import { FaUnlockAlt, FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { MdEmail } from "react-icons/md";
const Signup = () => {
  return (
    <>
      <div className="container">
        <div className="left-side">
          <img src={bike} alt="bike cartoon" />
        </div>
        <div className="right-side">
          <h1 className="create-heading">Create Account</h1>
          <form action="#">
            <div className="s-input">
              <div className="input-holder">
                <FaUser className="user" />
                <input
                  type="text"
                  placeholder="First Name"
                  className="f-input"
                />
              </div>
              <div className="input-holder">
                <FaUser className="user" />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="f-input"
                />
              </div>
            </div>
            <div className="input-holder">
              <MdEmail className="user email-icon" />
              <input
                type="text"
                placeholder="Email your email"
                className="f-input email-input"
              />
            </div>
            <div className="s-input">
              <div className="input-holder">
                <FaUnlockAlt className="user" />
                <input
                  type="password"
                  placeholder="Password"
                  className="f-input"
                />
              </div>
              <div className="input-holder">
                <FaUnlockAlt className="user" />
                <input
                  type="password"
                  placeholder="Confirm Password"
                  className="f-input"
                />
              </div>
            </div>
            <button type="submit" className="account">
              Create Account
            </button>
          </form>
          <div className="hr">
            <hr className="rule" />
            <span>Or</span>
            <hr className="rule" />
          </div>
          <div className="socials">
            <a href="#" className="social">
              <FaFacebook className="social-icon" />
              <span className="social-text">Facebook</span>
            </a>
            <a href="#" className="social">
              <FcGoogle className="social-icon" />
              <span className="social-text">Google</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
