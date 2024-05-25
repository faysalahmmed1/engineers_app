import React, { useRef } from 'react';
import './Signup.css';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';



const Signup = () => {
    const nameRef = useRef('')
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const handleSubmite = (e) => {
        e.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        console.log(email, password,name);

        
    }

    return (
        <div className='signUp-container'>
            <h1>Sign Up</h1>
            <Form onSubmit={handleSubmite}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={nameRef} type="name" placeholder="Your name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" />
                </Form.Group>

                {/* <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="Confirmpassword" placeholder="ConfirmPassword" />
                </Form.Group> */}
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            <p className='signUp-link'>Already You have an Account?  <span><Link style={{ textDecoration: 'none', color: 'red', fontSize: '20px', marginTop: '20px' }} to={'/login'}>login</Link></span></p>
        </div>
    );
};

export default Signup;