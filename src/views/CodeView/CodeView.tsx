import React from 'react';
import { Container, Row } from 'react-bootstrap';

export default function CodeView() {
  return (
    <Container fluid="xl">
      <Row>
        <h1>Code Examples</h1>
        <div className="title-text-line" />
      </Row>
      <Row>
        <h2>Grafana Breadcrumb Plugin</h2>
        <div>Github: <a href="https://github.com/timyllym/grafana-breadcrumb-panel">https://github.com/timyllym/grafana-breadcrumb-panel</a></div>
        <div>Grafana: <a href="https://grafana.com/grafana/plugins/digiapulssi-breadcrumb-panel/">https://grafana.com/grafana/plugins/digiapulssi-breadcrumb-panel</a></div>
      </Row>
      <Row>
        <h2>Simple (and old) VueJS Try Out</h2>
        <div>Github: <a href="https://github.com/timyllym/vuejs-image-browser">https://github.com/timyllym/vuejs-image-browser</a></div>
        <div>Deployed: <a href="http://timyllym.kapsi.fi/imagebrowser">http://timyllym.kapsi.fi/imagebrowser</a></div>
      </Row>
    </Container>
  );
}
