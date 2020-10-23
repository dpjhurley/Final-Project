import React, { useState } from 'react';

const HiddenMenuSearch = ({
    handleSearchSubmit,
    handleSearchValueChange
}) => {
    
    return (  
        <form onSubmit={handleSearchSubmit}>
            <div className="hiddenMenusearch hidden" id="hiddenSearch">

                <i className="fas fa-search fa-2x hiddensearchicons"></i>

                <input type="text" name="search" placeholder="Search for the best shoes" onChange={handleSearchValueChange}/>
            
                <i className="fas fa-times-circle fa-2x hiddensearchicons" />
        
            </div>

            

        </form>
    );
}
 
export default HiddenMenuSearch;

