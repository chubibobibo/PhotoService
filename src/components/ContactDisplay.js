import React from 'react'
//bootstrap

import 'bootstrap/dist/css/bootstrap.min.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { MDBInput } from 'mdb-react-ui-kit';
import { MDBTextArea } from 'mdb-react-ui-kit';
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBBtn
} from 'mdb-react-ui-kit';

const ContactDisplay = () => {
    return (
        <div>
            <Container className='mt-5'>
                <Row className='mt-5'>
                    <Col className='col-6 offset-3'>
                        <MDBCard className='mt-4'>
                            <MDBCardImage src='https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFycmlhZ2V8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60' position='top' alt='...' />

                            <MDBCardBody>
                                <MDBCardTitle>Contact Me</MDBCardTitle>
                                <MDBCardText>
                                    Pour toute demande, n'hésitez pas à me contacter.
                                </MDBCardText>
                                <div>
                                    <Form netlify>
                                        <Form.Group className="mt-5" controlId="formBasicEmail">
                                            <MDBInput label='Name' id='typeText' type='text' />
                                            <MDBInput label='Email input' id='typeEmail' type='email' />
                                            <MDBTextArea label='Message' id='textAreaExample' rows={4} />
                                            <MDBBtn href='#'>Send</MDBBtn>
                                        </Form.Group>
                                    </Form>
                                </div>
                            </MDBCardBody>
                        </MDBCard>






                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default ContactDisplay;