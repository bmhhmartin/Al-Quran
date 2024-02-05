import axios from 'axios';
import React, {useState, useEffect} from 'react';
import { Container, Row,Col, Button, InputGroup, FormControl } from 'react-bootstrap';

const SalatTime = () => {
    const [salat, setSalat] = useState({
        timings:[],
        date:[]
    })
    const [search, setSearch] = useState('')

    const dataSearch=(e)=>{
        setSearch(e.target.value);
    }
    
    useEffect(() => {
       axios.get("http://api.aladhan.com/v1/calendarByCity?city=Dhaka&country=Bangladesh").then(response=>{
           setSalat(response.data.data);
           console.log(response.data.data[0].timings.Asr);
       })
    }, [])

    console.log(salat);



    return (
        <>
            <Container>
                <Row>
                    <Col>
                    <InputGroup className="my-5">
                        <FormControl placeholder="Recipient's username"/>
                        <Button variant="outline-secondary">
                            Button
                        </Button>
                    </InputGroup>

                    {
                        salat.timings.Asr
                    }


                  


                  
                
                
                        
                    </Col>
                </Row>
            </Container>
            
        </>
    );
};

export default SalatTime;