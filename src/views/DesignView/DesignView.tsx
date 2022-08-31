import React from 'react';
import { Container, Row } from 'react-bootstrap';
import case01 from './../../images/case01.png';
import case02 from './../../images/case02.png';
import case03 from './../../images/case03.png';
import case04 from './../../images/case04.png';
import case06 from './../../images/case06.png';
import case07 from './../../images/case07.png';
import case08 from './../../images/case08.png';
import case09 from './../../images/case09.png';
import case10 from './../../images/case10.png';
import case11 from './../../images/case11.png';
import case12 from './../../images/case12.png';

export default function DesignView() {
  return (
    <Container fluid="xl">
      <Row>
        <h1>UX Design</h1>
        <div className="title-text-line" />
      </Row>
      <Row>
        <h2>Helsingin kaupunki - Varaamo</h2>
        <div className="image-container">
          <img src={case01} alt="Varaamo" />
        </div>
      </Row>
      <Row>
        <h2>Digia Iiris - Valvontapalvelu</h2>
        <div className="image-container">
          <img src={case02} alt="Digia Iiris" />
        </div>
      </Row>
      <Row>
        <h2>Telia Service Management - Form Design Wireframes</h2>
        <div className="image-container">
          <img src={case03} alt="Telia Service Management" />
        </div>
      </Row>
      <Row>
        <h2>Opetushallitus - Oikeustulkkirekisteri</h2>
        <div className="image-container">
          <img src={case04} alt="Oikeustulkkirekisteri" />
        </div>
      </Row>
      <Row>
        <h1>Visual Design</h1>
        <div className="title-text-line" />
      </Row>
      <Row>
        <h2>Powerpark - mobiiliaplikaatioehdotus</h2>
        <div className="image-container">
          <img src={case06} alt="Powerpark" />
        </div>
      </Row>
      <Row>
        <h2>RDC - 3D-kuvitus myyntisovellukseen</h2>
        <div className="image-container">
          <img src={case07} alt="3D-design" />
        </div>
      </Row>
      <Row>
        <h2>Cybercom - Verkkosivukuvituksia</h2>
        <div className="image-container">
          <img src={case08} alt="Illustrations" />
        </div>
      </Row>
      <Row>
        <h2>Ikonisuunnittelua</h2>
        <div className="image-container">
          <img src={case09} alt="Icons" />
        </div>
      </Row>
      <Row>
        <h1>Print Design</h1>
        <div className="title-text-line" />
      </Row>
      <Row>
        <h2>Digia - API-opas</h2>
        <div className="image-container">
          <img src={case10} alt="API-opas" />
        </div>
      </Row>
      <Row>
        <h2>Digia - Integraatio-leaflet</h2>
        <div className="image-container">
          <img src={case11} alt="Integraatio-leaflet" />
        </div>
      </Row>
      <Row>
        <h2>Digia - Postereita</h2>
        <div className="image-container">
          <img src={case12} alt="Posters" />
        </div>
      </Row>
    </Container>
  );
}
