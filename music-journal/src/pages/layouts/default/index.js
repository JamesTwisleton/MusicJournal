import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Wrapper } from './styles';
import { NavigationBar } from '../../../components/NavigationBar';
import { AuthProvider } from "react-use-auth";

export default function DefaultLayout({ children }) {
    return (
        
        <AuthProvider
        navigate={navigate}
        auth0_domain="useauth.auth0.com"
        auth0_client_id="GjWNFNOHq1ino7lQNJBwEywa1aYtbIzh"
    >
            <NavigationBar />
            <Wrapper>{children}</Wrapper>
            </AuthProvider>
    );
}
