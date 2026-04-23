import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import {
  dataportfolio,
  meta,
  professionalProjects,
} from "../../content_option";

export const Portfolio = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Projects | {meta.title} </title>{" "}
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">Projects</h1>{" "}
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>

        <section className="portfolio_section portfolio_section--professional">
          <div className="portfolio_section_head">
            <h2>Professional Projects</h2>
          </div>
          <Row className="g-4">
            {professionalProjects.map((project, i) => (
              <Col key={i} lg={6} md={6} sm={12} className="d-flex">
                <article className="pro_item w-100">
                  <div className="pro_item_top">
                    <div>
                      <h3>{project.title}</h3>
                    </div>
                  </div>
                  <p className="pro_item_desc">{project.description}</p>
                  <div className="po_tags pro_tags">
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </article>
              </Col>
            ))}
          </Row>
        </section>

        <section className="portfolio_section portfolio_section--practice">
          <div className="portfolio_section_head portfolio_section_head--secondary">
            <h2>Personal Projects</h2>
            <p>
              Smaller personal builds that show experimentation and hands-on
              learning.
            </p>
          </div>
          <Row className="mb-5 po_items_ho g-4">
            {dataportfolio.map((data, i) => {
              return (
                <Col key={i} lg={6} md={6} sm={12} className="d-flex">
                  <article className="po_item w-100">
                    <div className="po_item_media">
                      <img src={data.img} alt={data.title} />
                    </div>
                    <div className="po_item_body">
                      <div className="po_item_header">
                        <h3>{data.title}</h3>
                        <p>{data.description}</p>
                      </div>
                      <div className="po_tags">
                        {data.tags.map((tag) => (
                          <span key={tag}>{tag}</span>
                        ))}
                      </div>
                      {data.isDownload ? (
                        <a className="po_btn" href={data.downloadUrl} download>
                          Download APK
                        </a>
                      ) : (
                        <a
                          className="po_btn"
                          href={data.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          View project
                        </a>
                      )}
                    </div>
                  </article>
                </Col>
              );
            })}
          </Row>
        </section>
      </Container>
    </HelmetProvider>
  );
};
