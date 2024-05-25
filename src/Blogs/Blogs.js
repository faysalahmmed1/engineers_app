import React from 'react';
import './Blogs.css';

const Blogs = () => {
    return (
        <div className='blogs-container'>
            <h1 style={{fontSize:'50px', color:'red',margin:'20px'}}>Some Quesions And Answer</h1>
            <div className='blogs-one'>
                <div className='blogs-ones'>
                    <h1 className='text-primary text-center mt-5'>Difference BetweenAuthorization and Authentication</h1>
                    <h4 >Authentication verifies the identity of a users, confirming who they are. Authorization determines what actions or resources a user is allowed to access or perform after authentication, specifying permissions and privileges based on their identity and role.</h4>
                </div>
            </div>


            <div className='blogs-two'>
                <div className='blogs-twos'>
                    <h1 className='text-primary text-center'>Why are you using firebase?
                    </h1>
                    <h1 className='text-primary text-center'> What other option do you have to implement authentication?
                    </h1>
                    <h2>
                        Firebase:
                    </h2>
                    <h4>
                        Firebase provides a secure and easy way for users to sign into their app. Developers can use Firebase Authentication to support email and password login, Google Sign-In, Facebook Login and more. Realtime Database.

                    </h4>
                    <br />
                    <h2>
                        Implement Authentication:

                    </h2>
                    <h4>
                        Authentication can be implemented using various methods, including custom solutions, OAuth, OpenID Connect, LDAP, token-based (JWT), multi-factor authentication (MFA), Identity as a Service (IDaaS) providers like Okta, Auth0, or Single Sign-On (SSO) for seamless access to multiple applications with one login, depending on your project's needs and security requirements.
                    </h4>
                </div>
            </div>

            <br />
            <div className='blogs-three'>
                <div className='blogs-threes'>
                    <h1 className='text-primary text-center'>
                        What other services does firebase provider other option than Authentication.
                    </h1>
                    <h4>
                        Firebase offers a range of services beyond authentication, including:</h4>

                    <p>01. Realtime Database: A NoSQL database for storing and syncing data in real-time.</p>
                    <p>02. Cloud Firestore: A scalable NoSQL database with real-time synchronization.</p>
                    <p>03. Cloud Storage: For storing and serving user-generated content like images and videos.</p>
                    <p>04. Cloud Functions: Serverless computing for executing code in response to events.</p>
                    <p>05. Cloud Hosting: Web hosting with SSL support and CDN integration.
                    </p>
                    <p>06. Cloud Messaging: Push notifications to engage users.</p>
                    <p>07. Authentication: User authentication and identity management.</p>
                    <p>08. Cloud Analytics: Insights into user behavior and app performance.</p>
                    <p>09. Machine Learning: Integration with Google's ML services.</p>
                    <p>10. Cloud Test Lab: Automated testing on real devices.</p>
                    <h4>These services help developers build and scale applications on the Firebase platform.</h4>
                </div>
            </div >

        </div>
    );
};

export default Blogs;