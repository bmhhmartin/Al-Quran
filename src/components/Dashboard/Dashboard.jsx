import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Read from '../../assets/images/read.jpg';
import Listen from '../../assets/images/listen.jpg';
import Bangla from '../../assets/images/Bangla-Translate.jpg';
import Quran from '../../assets/images/quran-image.png';


const Dashboard = () => {

    const data = [
        {
            "image": Read,
            "title": "Read Quran",
            "link": '/quran',
            "buttonName": 'Read Surah'
        },
        {
            "image": Listen,
            "title": "Listen Quran",
            "link": '/listen',
            "buttonName": 'Listen Surah'
        },
        {
            "image": Bangla,
            "title": "Bengali Translation",
            "link": '/bangla-translation',
            "buttonName": 'Translation'
        },
        {
            "image": Quran,
            "title": "Special Thanks",
            "link": '/grateful',
            "buttonName": 'Thanks'
        }
    ]




    return (
        <>
            <h2 className="title">Welcome to Digital Quran</h2>
            <Container>
                <Row>
                    {
                        data.map(result=>(
                            <Col lg={3} md={6} sm={6}>
                                <Card className='dashCard'>
                                    <Card.Img variant="top" src={result.image} />
                                    <Card.Body>
                                        <Card.Title>{result.title}</Card.Title>
                                        {/* <Card.Text>
                                           {result.details}
                                        </Card.Text> */}
                                        <Link to={result.link}><Button className='primaryButton'>{result.buttonName}</Button></Link>
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

export default Dashboard;