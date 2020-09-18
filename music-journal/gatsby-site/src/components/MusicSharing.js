import React from 'react';
import GlobalStyles from '../styles/global';
import DefaultLayout from '../pages/layouts/default';
import { Container, Row, Col } from 'react-bootstrap/';
import { AuthProvider } from "react-use-auth";

export function MusicSharing() {
    return (
        
        <DefaultLayout>
            <GlobalStyles />
            <Container fluid>
                <Row>
                </Row>
            </Container>
        </DefaultLayout>
    );
}
