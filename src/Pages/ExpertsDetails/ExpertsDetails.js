import React from 'react';

import { useParams } from 'react-router-dom';

const ExpertsDetails = () => {
   
    const { expertsId } = useParams();
    return (
        <div>
            <h1>Expert Details: {expertsId}</h1>
            
        </div>
    );
};

export default ExpertsDetails;