import React, { useState } from "react";
import "./style.css";
import { VscGrabber, VscClose } from "react-icons/vsc";
import {
  FaHome,
  FaProjectDiagram,
  FaUserAlt,
  FaEnvelope,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { logotext, socialprofils } from "../content_option";
import Themetoggle from "../components/themetoggle";

const Headermain = () => {
  const [isActive, setActive] = useState(false);

  const handleToggle = () => {
    setActive((prev) => !prev);
    document.body.classList.toggle("ovhidden");
  };

  const closeMenu = () => {
    setActive(false);
    document.body.classList.remove("ovhidden");
  };

  return (
    <>
      <header className="fixed-top site__header">
        <div className="d-flex align-items-center justify-content-between">
          <Link className="navbar-brand nav_ac" to="/">
            {logotext}
          </Link>
          <div className="d-flex align-items-center">
            <Themetoggle />
            <button
              className="menu__button nav_ac"
              onClick={handleToggle}
              aria-label="Toggle navigation menu"
              aria-expanded={isActive}
            >
              {isActive ? <VscClose /> : <VscGrabber />}
            </button>
          </div>
        </div>

        <div className={`site__navigation ${isActive ? "menu__opend" : ""}`}>
          <button
            type="button"
            className="menu__backdrop"
            onClick={closeMenu}
            aria-label="Close navigation"
          />
          <div className="menu__drawer">
            <div className="menu__drawer_head">
              <div>
                <p className="menu__eyebrow">Navigation</p>
                <h2>Let’s move around.</h2>
              </div>
            </div>

            <ul className="the_menu">
              <li className="menu_item">
                <Link onClick={closeMenu} to="/">
                  <span className="menu_icon">
                    <FaHome />
                  </span>
                  <span className="menu_label">Home</span>
                </Link>
              </li>
              <li className="menu_item">
                <Link onClick={closeMenu} to="/projects">
                  <span className="menu_icon">
                    <FaProjectDiagram />
                  </span>
                  <span className="menu_label">Projects</span>
                </Link>
              </li>
              <li className="menu_item">
                <Link onClick={closeMenu} to="/about">
                  <span className="menu_icon">
                    <FaUserAlt />
                  </span>
                  <span className="menu_label">About</span>
                </Link>
              </li>
              <li className="menu_item">
                <Link onClick={closeMenu} to="/contact">
                  <span className="menu_icon">
                    <FaEnvelope />
                  </span>
                  <span className="menu_label">Contact</span>
                </Link>
              </li>
            </ul>

            <div className="menu__meta">
              <div className="menu__card">
                <p className="menu__eyebrow">Reach Out</p>
                <div className="menu__socials">
                  <a href={socialprofils.linkedin} target="_blank">
                    <FaLinkedinIn />
                    Linkedin
                  </a>
                  <a href={socialprofils.github} target="_blank">
                    <FaGithub />
                    Github
                  </a>
                  <a href={socialprofils.email}>
                    <FaEnvelope />
                    Email
                  </a>
                </div>
              </div>
              <div className="menu__card menu__card--accent">
                <p className="menu__eyebrow">Availability</p>
                <p className="menu__availability">
                  Open for frontend, product UI, and full stack projects.
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="br-top"></div>
      <div className="br-bottom"></div>
      <div className="br-left"></div>
      <div className="br-right"></div>
    </>
  );
};

export default Headermain;
