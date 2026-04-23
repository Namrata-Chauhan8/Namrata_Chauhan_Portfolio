import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import Masonry from "@mui/lab/Masonry";
import {
  FaCode,
  FaServer,
  FaDatabase,
  FaPalette,
  FaCodeBranch,
  FaMobileAlt,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaGitAlt,
  FaJava,
  FaLayerGroup,
} from "react-icons/fa";
import {
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiBootstrap,
  SiTailwindcss,
} from "react-icons/si";
import {
  dataabout,
  meta,
  worktimeline,
  skillCategories,
  services,
} from "../../content_option";

const categoryIcons = {
  "FE Technology": FaCode,
  Backend: FaServer,
  Database: FaDatabase,
  "UI Library": FaPalette,
  "Version Control Tools": FaCodeBranch,
};

const skillIcons = {
  HTML5: FaHtml5,
  CSS3: FaCss3Alt,
  Javascript: FaJsSquare,
  "React JS": SiReact,
  "React Native": SiReact,
  "Next Js": SiNextdotjs,
  "Node Js": SiNodedotjs,
  "Express Js": SiExpress,
  "Mongo DB": SiMongodb,
  SQL: SiMysql,
  Bootstrap: SiBootstrap,
  "Tailwind Css": SiTailwindcss,
  Java: FaJava,
  Git: FaGitAlt,
};

const serviceIcons = {
  "Web Application Development": FaCode,
  "Front-End Development: ": FaPalette,
  "Back-End Development": FaServer,
  "App Development": FaMobileAlt,
};

export const About = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> About Me | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">About me</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">{dataabout.title}</h3>
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <div className="about_card">
              <p>{dataabout.aboutme}</p>
            </div>
          </Col>
        </Row>
        <Row className=" sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Work Timeline</h3>
          </Col>
          <Col lg="7">
            <div className="timeline_list">
              {worktimeline.map((data, i) => {
                return (
                  <div className="timeline_item" key={i}>
                    <div className="timeline_marker"></div>
                    <div className="timeline_content">
                      <div className="timeline_top">
                        <h4>{data.jobtitle}</h4>
                        <span>{data.date}</span>
                      </div>
                      <p>{data.where}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="12">
            <h3 className="color_sec py-4">Skills</h3>
          </Col>
          <Col lg="12">
            <Masonry columns={{ xs: 1, md: 2 }} spacing={3}>
              {skillCategories.map((category, categoryIndex) => {
                const CategoryIcon =
                  categoryIcons[category.category] || FaLayerGroup;

                return (
                  <div className="skill-category" key={categoryIndex}>
                    <div className="skill-category-head">
                      <div className="skill-category-icon">
                        <CategoryIcon />
                      </div>
                      <div>
                        <h4 className="skill-category-title">
                          {category.category}
                        </h4>
                        <p className="skill-category-subtitle">
                          {category.skills.length} core skills
                        </p>
                      </div>
                    </div>
                    <div className="skill-list">
                      {category.skills.map((data, i) => {
                        const SkillIcon = skillIcons[data.name] || FaLayerGroup;

                        return (
                          <div className="skill-item" key={i}>
                            <div className="skill-item-top">
                              <div className="skill-item-icon">
                                <SkillIcon />
                              </div>
                              <div className="skill-item-meta">
                                <h3 className="progress-title">{data.name}</h3>
                              </div>
                            </div>
                            <div className="progress">
                              <div
                                className="progress-bar"
                                style={{
                                  width: `${data.value}%`,
                                }}
                              />
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </Masonry>
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="12">
            <h3 className="color_sec py-4">Services</h3>
          </Col>
          <Col lg="12">
            <Masonry columns={{ xs: 1, md: 2 }} spacing={3}>
              {services.map((data, i) => {
                const ServiceIcon = serviceIcons[data.title] || FaLayerGroup;

                return (
                  <div className="service-card" key={i}>
                    <div className="service-card-head">
                      <div className="service-card-icon">
                        <ServiceIcon />
                      </div>
                      <div className="">
                        <h5 className="service__title">{data.title}</h5>
                      </div>
                    </div>
                    <p className="service_desc">{data.description}</p>
                  </div>
                );
              })}
            </Masonry>
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};
