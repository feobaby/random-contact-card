import React from 'react';
import './hit.style.css';


export const Hit = ({ hit }) => (
    <div className="hit">
        <div className="title">{hit.name}</div>
        <div className="details">Email: {hit.email}</div>
       <div className="details">Website: {hit.website}</div>
      </div>
      
);
