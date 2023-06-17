import React from 'react';
import './Result.css'
const Result = ({ formData }) => {
    return (
    
        <div>
            <h2>Your Form Is Validated</h2>
            <div className='display'>
            <p>Name: {formData.name}</p>
            <p>Email: {formData.email}</p>
            <p>Phone Number: {formData.phoneNumber}</p>
            </div>
        </div>
    
    );
};

export default Result;
