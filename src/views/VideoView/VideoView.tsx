import React from 'react';
import { Container, Row } from 'react-bootstrap';
import mobility_offering from './../../videos/finland_mobility_offering.mp4';
import user_experience from './../../videos/mobile_user_experience.mp4';

export default function VideoView() {
  return (
    <Container fluid="xl">
      <Row>
        <h1>Video Design</h1>
        <div className="title-text-line" />
      </Row>
      <Row>
        <h2>Accenture Mobility Offering Video</h2>
        <div className="video-container">
          <video width="100%" height="100%" controls>
            <source src={mobility_offering} type="video/mp4" />
          </video>
        </div>
      </Row>
      <Row>
        <h2>Accenture User Experience Video</h2>
        <div className="video-container">
          <video width="100%" height="100%" controls>
            <source src={user_experience} type="video/mp4" />
          </video>
        </div>
      </Row>
    </Container>
  );
}
