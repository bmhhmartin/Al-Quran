import React from 'react';
import { Container } from 'react-bootstrap';
import BanglaQuran from '../../assets/images/Bengali-Quran.pdf';

const BanglaTranslation = () => {
    return (
        <Container>
            <h2 className="title">Bengali Translation</h2>
            <iframe src={BanglaQuran} width="100%"></iframe>
        </Container>
    );
};

export default BanglaTranslation;