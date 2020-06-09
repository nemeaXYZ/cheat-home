import React from "react";
import PropTypes from "prop-types";

import { Container, Row, Col } from "../../reusecore/Layout";
import SectionTitle from "../../reusecore/SectionTitle";
import Button from "../../reusecore/Button";
import VintageBox from "../../reusecore/VintageBox";

import imgAbout from "../../assets/images/app/about.png";
import particle1 from "../../assets/images/app/particle/05.png";
import particle2 from "../../assets/images/app/particle/06.png";

import AboutSectionWrapper from "./about.style";

const About = () => {
  return (
    <AboutSectionWrapper id="about">
      <img className="section__particle one" src={particle1} alt="img" />
      <img className="section__particle two" src={particle2} alt="img" />
      <Container fullWidthSM>
        <Row Vcenter={true}>
          <Col xs={12} sm={6}>
            <img
              className="about-thumb"
              src={imgAbout}
              alt="This is about UNI-Prime"
            />
          </Col>
          <Col xs={12} sm={6} className="about-content-wrap">
            <SectionTitle
              className="section-title"
              leftAlign={true}
              UniWidth="100%"
            >
              <h4> About us </h4>
              <h2>
                <span>Cheat</span> has done your research.
              </h2>
            </SectionTitle>
            <p className="about-text text-one">
              We help you fly through the process of starting your business. We
              help you from incorporating, setting up and calculating taxes,
              managing ownership and tracking funding, as well as daily
              operations for the business.
            </p>
            <p className="about-text text-two">
              We keep you accountable, and on track to be one of the fraction of
              small businesses that becomes profitable. We prepare you to engage
              the services and investors that will help you to scale.
            </p>
            <VintageBox right={true} vintageTwo={true} position="relative">
              <Button>Start a Profitable Business Today</Button>
            </VintageBox>
          </Col>
        </Row>
      </Container>
    </AboutSectionWrapper>
  );
};

export default About;
