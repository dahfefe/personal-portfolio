import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import {
  meta,
  educationList,
  services,
} from "../../content_option";

// Resume renders the html content for Resume page
export const Resume = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Resume | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h3 className="display-5 mb-4"> Link to download resume: &nbsp;   
              <a href="https://drive.google.com/file/d/197OaY4QAFyvIjfofONWq9kZcuzyZWn2p/view?usp=drive_link">
                <img width="75" height="50" src="https://banner2.cleanpng.com/20180623/ykc/kisspng-computer-icons-document-file-format-xml-pdf-icon-5b2dccdb36d938.0621910415297282192247.jpg" alt="pdf-icon" />
              </a>
            </h3>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Goal</h3>
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <div>
              <p>To gain full-time employment as a junior dev. Highly ambitious and motivated individual who is recently transitioning from non-dev related positions in healthcare and striving for an opportunity to demonstrate his unmatchable work ethic and character.</p>
            </div>
          </Col>
        </Row>
        <Row className=" sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Education</h3>
          </Col>
          <Col lg="7">
            {educationList.map((data, i) => {
              return (
                <div className="service_ py-4" key={i}>
                  <h5 className="service__title">{data.title}</h5>
                </div>
              );
            })}
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lang="5">
            <h3 className="color_sec py-4">Experience</h3>
          </Col>
          <Col lg="7">
            {services.map((data, i) => {
              return (
                <div className="service_ py-4" key={i}>
                  <h5 className="service__title">{data.title}</h5>
                  <p className="service_desc">{data.description}</p>
                </div>
              );
            })}
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};
