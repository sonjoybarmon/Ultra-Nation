import React from 'react';
import './Country.css'
const Country = (props) => {
    const {name , population , region , flag} = props.country;
    const handleAddCountry = props.handleAddCountry;
    return (
        <div className='content'>
            <div className='img'>
                <img  src={flag} alt=""/>
            </div>
            <div className= 'info'>
                <h3>Country Name : <strong> {name}</strong>  </h3>
                <p>Country population : <strong> {population}</strong>  </p>
                <p>Country region : <strong> {region}</strong></p>
                <button onClick ={() => handleAddCountry(props.country)}> Country Add </button>
            </div> 
        </div>
    );
};

export default Country;