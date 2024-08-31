import React from 'react';
import './NotFoundPage.style.css'
import {Col, Container, Row} from "react-bootstrap";

const NotFoundPage = () => {

    return (
        <div className="not-found-page">
            <Container>
                <Row>
                    <Col lg={6}>
                        <img src ="https://www.supercoloring.com/sites/default/files/styles/coloring_medium/public/cif/2022/02/89-crying-face-emoji-coloring-page.png"
                             alt="404" />
                        <h2>404 Error</h2>
                    </Col>
                    <Col lg={6}>
                        <div>
                            <h1>Sorry, the Page not Found</h1><br />
                            <h3>The link you followed probable broken</h3><br/>
                            <h3>or the page has been removed</h3><br/>
                            <h3>Double-check the URL</h3>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default NotFoundPage;