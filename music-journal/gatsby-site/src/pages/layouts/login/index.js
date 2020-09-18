import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Wrapper } from './styles';
import { NavigationBar } from '../../../components/NavigationBar';

export default function DefaultLayout({ children }) {
    return (
        <>
            <NavigationBar />
            <Wrapper>{children}</Wrapper>
        </>
    );
}
