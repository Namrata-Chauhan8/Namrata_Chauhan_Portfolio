import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { dataportfolio, meta } from "../../content_option";

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
            <h1 className="display-4 mb-4"> Projects </h1>{" "}
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <div className="mb-5 po_items_ho">
          {dataportfolio.map((data, i) => {
            return (
              <div key={i} className="po_item">
                <img src={data.img} alt="" />
                <div className="content">
                  <p>{data.description}</p>
                  <a href={data.link}>view project</a>
                </div>
              </div>
            );
          })}
          <div>
            <b>Others:</b><br></br>
            <b>1. </b>Software development Intern at Zignuts Technolab,
            Gandhinagar.<br></br>
            <b>2. </b>1 month Internship in Android Technology at V2S
            Technologies, Bhavnagar, Gujarat.<br></br>
            <br></br>
            <b>
              3. <i>Other projects:</i>
            </b>
            <ol type="a">
              <li>Game Listing App in NextJs (version 13 & 14)</li>
              <li>E-Store (React Js) with billing system</li>
              <li>
                ReadEasy (React Js) is a website for purchasing books with
                billing system
              </li>
              <li>
                Aashayein (PHP) is a website for empowering senior citizens in
                their daily life
              </li>
            </ol>
          </div>
        </div>
      </Container>
    </HelmetProvider>
  );
};
