import React from 'react';
import './Service.css';
import { useNavigate } from 'react-router-dom';

const Service = ({ service }) => {
    const { id, name, img, price, description, } = service;
    const navigate = useNavigate()
    const handleServiceDetails = (id) => {
        navigate(`/service/:${id}`)

    }
    return (
        <div className='service-container'>
            <h6><span>{id}</span></h6>
            <img src={img} alt="" />
            <h1>{name}</h1>
            <h4>Price: {price}</h4>
            <p>{description}</p>
            <button onClick={() => handleServiceDetails(id)} className='service-button'>{name}</button>
        </div>
    );
};

export default Service;