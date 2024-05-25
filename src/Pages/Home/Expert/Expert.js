import React from 'react';
import './Expert.css';
import { useNavigate } from 'react-router-dom';

const Expert = ({ expert }) => {
    const { id, name, img, } = expert;

    const navigate = useNavigate()
    const handleExpertsDetails = (id) => {
        navigate(`/experts/${id}`);

    }
    return (
        <div className='expert-conteiner'>
            <h6>{id}</h6>
            <img src={img} alt="..." />
            <div>
                <h5 >{name}</h5>
                <p >Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <button onClick={()=>handleExpertsDetails(id)} className='experts-button'>{name}</button>
            </div>
        </div>
    );
};

export default Expert;