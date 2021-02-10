import React from "react";
import {DelayInput} from 'react-delay-input';

const SearchBar = (props) => {

    const handleInputChange = (event) => {
        let inputValue = event.target.value;
        props.handleFilterSearch(inputValue);
        
    };

    return (
        <div>
            <DelayInput 
                className="input-search"
                name="search" 
                type="text" 
                placeholder="Search..."
                delayTimeout={1000}
                onChange={handleInputChange}
            /> 
            
        </div>
    );
}

export default SearchBar;