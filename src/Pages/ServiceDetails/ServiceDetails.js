import React from 'react';
import './ServiceDetails.css';
import { useParams } from 'react-router-dom';

const ServiceDetails = () => {
    const { serviceId } = useParams();
    return (
        <div>
            <h1>welcome to Service Details{serviceId}</h1>
        </div>
    );
};

export default ServiceDetails;