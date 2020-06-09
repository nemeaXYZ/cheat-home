import React from "react";

import { Container, Row, Col } from "../../reusecore/Layout";
import SectionTitle from "../../reusecore/SectionTitle";
import Button from "../../reusecore/Button";
import VintageBox from "../../reusecore/VintageBox";
import ParticleComponent from "../../reusecore/Particle";

import { FaPlay, FaDownload } from "react-icons/fa";

import BannerSectionWrapper from "./banner.style";

const BannerDefault = () => {
  return (
    <BannerSectionWrapper>
      <ParticleComponent />
      <Container fullWidthSM>
        <Row>
          <Col sm={7} md={6} lg={7}>
            <SectionTitle
              className="section-title"
              leftAlign={true}
              UniWidth="100%"
            >
              <h4>Get a 30% lifetime discount for early adopters</h4>
              <h1>
                <span>Cheat</span> is your new co-founder. Build your profitable
                business by joining today.
              </h1>
            </SectionTitle>
            <p>
              Cheat provides mentorship via guided checklists. Most importantly,
              we keep you accountable, and on track to be one of the startups
              that gains traction.
            </p>
            <VintageBox right={true} vintageOne={true}>
              <Button className="banner-btn one">
                <FaDownload className="icon-left" />
                Sign up now!
              </Button>
              <Button className="banner-btn two">
                <FaPlay className="icon-left" /> Start a Profitable Business
                Today
              </Button>
            </VintageBox>
          </Col>
        </Row>
      </Container>
    </BannerSectionWrapper>
  );
};

export default BannerDefault;
