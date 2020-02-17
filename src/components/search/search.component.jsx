import React from 'react';
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, SearchBox} from 'react-instantsearch-dom';
import {Content} from '../content/content.component';
import './search.style.css';

const searchClient = algoliasearch(
  'IKJGA86D2A',
  '7141de09ced515ce122326d23c9ee407'
);
export const Search = () => (
  <InstantSearch searchClient={searchClient} indexName="search-photo">
         <SearchBox 
            className='search' 
            />
     <Content 
     />    
  </InstantSearch>
);
