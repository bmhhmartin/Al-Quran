import React, {useState, useEffect} from 'react';
import { Col, Container, Row, ListGroup, Button } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import axios from "axios";
import Loader from '../Loader/Loader';

const SurahDetails = () => {
    const [surah, setSurah] = useState({
        ayahs:[]
    });
    const [loader, setLoader] = useState(true)
    const { userID } = useParams();

    const allSurah = async () => {
        const allData = await axios({
            method: "GET",
            header: {'accept': 'application/json'},
            url: `https://api.alquran.cloud/v1/surah/${userID}`
        }).then(response=>{
            setSurah(response.data.data);
            setLoader(false)
        }).catch(error=>{
            console.log(error);
        })
    };
    useEffect(() => {
        allSurah();
    }, [surah]);

   



    if(loader===true){
        return <Loader></Loader>
    }else{
        return (
            <div className='pageDesign'>
            <Container>
                <Row>
                    <Col>
                        <ListGroup variant="flush">
                            <h3 className='surahName'>({surah.englishName}) {surah.name}</h3>
                            <p className="noOfAyahs">Number of Ayahs: {surah.numberOfAyahs}</p>
                            <Link to="/quran"><Button className='backBtn'>Back</Button></Link>
                            {surah.ayahs.map((res)=>(
                                <div className='ayahDetails' key={res.number}>
                                    
                                    <h4>{res.text}</h4>
                                    <span> .{res.number}</span>
                                </div>
                            ))}
                        </ListGroup>
                    </Col>
                </Row>
            </Container>
            </div>
        );
    }
    
};

export default SurahDetails;