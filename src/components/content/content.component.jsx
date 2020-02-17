import React from 'react';
import { Hits } from 'react-instantsearch-dom';
import {Hit} from '../hit/hit.component';
import './content.style.css';

export const Content =() => (
<div className = 'content'>
    <Hits hitComponent={Hit} />
    </div>
);