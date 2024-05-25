import React from 'react';
import './About.css'
import img from '../../../Images/About img/faysal.jpeg';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div className='about-container'>

            <img src={img} alt="" />
            <h1> Faysal Ahmmed</h1>
            <br />
            <h4>Personal Information</h4>
            <p>Location:Dhaka,Bangladesh</p>
            <p><span>Email:faysalAhmmedcse@gmail.com</span></p>
            <p><span>Phone: 01616731943</span></p>
            <br />
            
            <h4>Education:</h4>
            <p>Currently pursuing a degree in Computer Science and Engineering (CSE)</p>
            <p>Dhaka International University, Dhaka, Bangladesh</p>
            <br />
            <br />
            <h4>Professional Development</h4>
            <p>Enrolled in web development courses mentored by <span style={{color:'blue',fontSize:'20px'}}>Mr. Songkar Mahabub</span> at Programming Hero
                Focused on mastering web development skills for career advancement</p>
            <br />
            <br />
            <h4>Contact Informetion</h4>
            <button style={{padding:'10px', margin:'10px', borderRadius:'10px'}}><Link rel="stylesheet" href="https://github.com/faysalahmmed1" />Github</button>
            <button style={{padding:'10px', borderRadius:'10px'}}><Link rel="stylesheet" href="https://www.linkedin.com/in/faysalcse/" />Linkedin</button>


        </div>
    );
};

export default About;