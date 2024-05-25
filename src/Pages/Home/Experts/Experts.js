import React from 'react';
import './Experts.css'
import expert1 from '../../../Images/experts/expert-1.jpg';
import expert2 from '../../../Images/experts/expert-2.jpg';
import expert3 from '../../../Images/experts/expert-2.jpg';
import expert4 from '../../../Images/experts/expert-2.jpg';
import expert5 from '../../../Images/experts/expert-2.jpg';
import expert6 from '../../../Images/experts/expert-6.png';
import Expert from '../Expert/Expert';

const Experts = () => {
    const experts = [
        { id: 1, name: 'will smith', img: expert1 },
        { id: 2, name: 'Chris Rock', img: expert2 },
        { id: 3, name: 'Daywani Rock', img: expert3 },
        { id: 4, name: 'just riki', img: expert4 },
        { id: 5, name: 'tokew lies', img: expert5 },
        { id: 6, name: 'barlin ripo', img: expert6 },
    ]

    return (
        <div id='experts' className='experts-main'>
            <h1 className='experts-tittle'>Our Experts</h1>
            <div className='experts-container'>
                {
                    experts.map(expert => <Expert
                        key={expert.id}
                        expert={expert}
                    ></Expert>)
                }
            </div>
        </div>
    );
};

export default Experts;