import React from 'react';
import './Population.css';

const Population = (props) => {
    const Population = props.Population;
    let totalPopulation = 0 ;
    for (let i = 0; i < Population.length; i++) {
        const newPopulation = Population[i];
        totalPopulation = totalPopulation + newPopulation.population ;
    }
    return (
        <div className = 'populations'>
            <h1> Total select Country : {Population.length} </h1>
            <h1> Total Population : {totalPopulation}</h1>
        </div>
    );
};

export default Population;