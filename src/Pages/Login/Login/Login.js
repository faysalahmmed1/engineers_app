import './Login.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useState } from 'react';



const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const navigate = useNavigate();
    const navigateee = useNavigate();

    const [SignInWithGoogle, users] = useSignInWithGoogle(auth);
    const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);

   
    if (error) {
        return (
            <div>
                <p>Error: {error.message}</p>
            </div>
        );
    }
    if (loading) {
        return <p>Loading...</p>;
    }
    if (user) {
        return navigate('/');
        
        
    }
    if (users) {

        return navigateee('/');
        
    }

    return (
        <div className='login-container'>
            <h1>Login</h1>
            <div>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control onChange={(e) => setEmail(e.target.value)} type="email" value={email} placeholder="Enter email" required />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control onChange={(e) => setPassword(e.target.value)} type="password" value={password} placeholder="Password" required />
                    </Form.Group>
                    <Button onClick={() => signInWithEmailAndPassword(email, password)} variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
                <p className='login-link'>Create Now Account?  <span><Link style={{ textDecoration: 'none', color: 'red', fontSize: '20px', marginTop: '20px' }} to={'/signup'}>Signup</Link></span></p>
            </div>
            <div className='button-container'>
                <button onClick={() => SignInWithGoogle()} className='google-button'>SignIn With Google</button>
            </div>
        </div>
    );
};

export default Login;

