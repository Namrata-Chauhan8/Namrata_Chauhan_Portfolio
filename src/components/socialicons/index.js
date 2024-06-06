import React from "react";
import "./style.css";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaSkype,
} from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

import { socialprofils } from "../../content_option";

export const Socialicons = (params) => {
  return (
    <div className="stick_follow_icon">
      <ul>
        {socialprofils.instagram && (
          <li>
            <a href={socialprofils.instagram}>
              <FaInstagram />
            </a>
          </li>
        )}
        {socialprofils.github && (
          <li>
            <a href={socialprofils.github}>
              <FaGithub />
            </a>
          </li>
        )}
        {socialprofils.email && (
          <li>
            <a href={`mailto:${socialprofils.email}`}>
              <IoIosMail />
            </a>
          </li>
        )}
        {socialprofils.linkedin && (
          <li>
            <a href={socialprofils.linkedin}>
              <FaLinkedin />
            </a>
          </li>
        )}
        {socialprofils.skype && (
          <li>
            <a href={socialprofils.skype}>
              <FaSkype />
            </a>
          </li>
        )}
      </ul>
      <p>Follow Me</p>
    </div>
  );
};
