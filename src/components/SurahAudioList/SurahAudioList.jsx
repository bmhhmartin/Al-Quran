import axios from 'axios';
import React, {useState, useEffect} from 'react';
import { Container, InputGroup, FormControl, Row, Col, Card } from 'react-bootstrap';
import ReactAudioPlayer from 'react-audio-player';
import Loader from '../Loader/Loader';
import LazyLoad from 'react-lazyload';

const SurahAudioList = () => {
    const [surah, setSurah] = useState({
        surahs:[],
        ayahs:[]
    })
    const [search, setSearch] = useState('')
    const [loader, setLoader] = useState(true)

    const dataSearch=(e)=>{
        setSearch(e.target.value);
    }

    const allSurah = async () => {
        const allData = await axios({
            method: "GET",
            header: {'accept': 'application/json'},
            url: `https://api.alquran.cloud/v1/quran/ar.alafasy`
        }).then(response=>{
            setSurah(response.data.data);
            setLoader(false)
        }).catch(error=>{
            console.log(error);
        })
    };
    useEffect(() => {
        allSurah();
    }, []);

    if(loader===true){
        return <Loader></Loader>
    }else{
        return (
            <>
              <Container>
                    <InputGroup>
                        <FormControl placeholder="Search Surah by English Name" onChange={dataSearch}/>
                    </InputGroup>
                    <Row>
                    {
                        surah.surahs.filter(value=>{
                            if (search === "") {
                                return value;
                            }else if(value.englishName.toLowerCase().includes(search.toLowerCase())){
                                return value;
                            }
                        }).map(result=>(
                            <Col lg={12}>
                                <LazyLoad height={600}>
                                    <Card className='surahCard' key={result.number}>
                                        <Card.Body>
                                            <div className="surahNo">{result.number}</div>
                                            <Card.Title>{result.name} ({result.englishName})</Card.Title>

                                                {result.ayahs.map(res=>(
                                                        <div className="ayahs">
                                                            <ReactAudioPlayer src={res.audio} controls/>
                                                            <p>{res.text}</p>
                                                        </div>
                                                ))}
                                        </Card.Body>
                                    </Card>
                                </LazyLoad>
                            </Col>
                            ))
                        }
                    </Row>
              </Container>  
            </>
        );
    }
   
};

export default SurahAudioList;