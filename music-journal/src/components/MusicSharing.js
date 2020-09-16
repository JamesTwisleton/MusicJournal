import React from 'react';
import GlobalStyles from '../styles/global';
import DefaultLayout from '../pages/layouts/default';
import { Container, Row, Col } from 'react-bootstrap/';
import LoginScreen from './LoginScreen';
export function MusicSharing() {
    return (
        <DefaultLayout>
            <GlobalStyles />
            <Container fluid>
                <Row>
                <LoginScreen />
                </Row>
            </Container>
        </DefaultLayout>
    );
}
