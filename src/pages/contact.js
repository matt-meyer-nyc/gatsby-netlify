import React from "react";
import { Form, Button } from 'react-bootstrap';
import PrimaryLayout from '../layouts/PrimaryLayout';

export default () => (

    <PrimaryLayout column="col-10">    
        <div className="pt-5">
					  <p><i>for display in app demo only (non-functional)</i></p>
            <h1>Contact Us</h1>
            <Form>
                <Form.Group controlId="contactForm.Email">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Email..." />
                </Form.Group>
                <Form.Group controlId="contactForm.Subject">
                    <Form.Label>Subject</Form.Label>
                    <Form.Control type="text" placeholder="Subject..." />
                </Form.Group>
                <Form.Group controlId="contactForm.Message">
                    <Form.Label>Message</Form.Label>
                    <Form.Control type="textarea" rows="3" />
                </Form.Group>
                <Button>Submit</Button>
            </Form>   
        </div>
    </PrimaryLayout>
    
);