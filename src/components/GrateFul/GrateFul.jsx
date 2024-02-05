import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import ApiCloud from '../../assets/images/api-cloud.jpg';
import Alafasy from '../../assets/images/Alafasy.jpg';

const GrateFul = () => {
    const data = [
        {
            "image": Alafasy,
            "title": "Voice: M R Alafasy",
            "link": 'https://en.wikipedia.org/wiki/Mishary_bin_Rashid_Alafasy',
            "buttonName": 'Wikipedia'
        },
        {
            "image": ApiCloud,
            "title": "Data: Al Quran Cloud",
            "link": 'https://alquran.cloud/',
            "buttonName": 'Website'
        }
        
    ]


    return (
        <>
            <h2 className="title">Special Thanks to</h2>
            <Container>
                <Row>
                    {
                        data.map(result=>(
                            <Col lg={3} md={6} sm={6}>
                                <Card className='dashCard'>
                                    <Card.Img variant="top" src={result.image} />
                                    <Card.Body>
                                        <Card.Title>{result.title}</Card.Title>
                                        <a href={result.link} target="_blank" className='primaryButton'>{result.buttonName}</a>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))
                    }
                </Row>
            </Container>
        </>
    );
};

export default GrateFul;