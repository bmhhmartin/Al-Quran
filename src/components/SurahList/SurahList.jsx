import axios from 'axios';
import React, {useState, useEffect} from 'react';
import { Container, Row,Col, Table, Button, InputGroup, FormControl, Card } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import ReactAudioPlayer from 'react-audio-player';
import Loader from '../Loader/Loader';

const SurahList = () => {
    const [surah, setSurah] = useState([])
    const [search, setSearch] = useState('')
    const [loader, setLoader] = useState(true)

    const dataSearch=(e)=>{
        setSearch(e.target.value);
    }

    const allSurah = async () => {
        const allData = await axios({
            method: "GET",
            header: {'accept': 'application/json'},
            url: `https://api.alquran.cloud/v1/surah`
        }).then(response=>{
            setSurah(response.data.data)
            setLoader(false)
        })
    };
    useEffect(() => {
        allSurah();
    }, [surah]);



    if(loader===true){
        return <Loader></Loader>
    }else{
        return (
            <Container>
                <Row>
                        <h1 className="title">All Surah</h1>
                        <InputGroup>
                            <FormControl placeholder="Search Surah" onChange={dataSearch}/>
                        </InputGroup>
                        {
                            surah.filter(value=>{
                                        if (search === "") {
                                            return value;
                                        }else if(value.englishName.toLowerCase().includes(search.toLowerCase())){
                                            return value;
                                        }
                                    }).map((result, index)=>(
                                        <Col lg={3} md={4} sm={6} key={index}>
                                            <Card className='myCard'>
                                                <Card.Body>
                                                    <div className="triangle"></div>
                                                    <div className="serial">{result.number}</div>
                                                    <h4>{result.englishName}</h4>
                                                    <h5>({result.name})</h5>
                                                    <h6>Ayahs: {result.numberOfAyahs}</h6>
                                                    <div className="type">{result.revelationType}</div>
                                                </Card.Body>
                                                <Link to={"/details/"+result.number}><Button className='detailsBtn'>Details</Button></Link>
                                            </Card>
                                        </Col>
                                    ))
                        }
                </Row>
            </Container>
        );
    }
   
};

export default SurahList;