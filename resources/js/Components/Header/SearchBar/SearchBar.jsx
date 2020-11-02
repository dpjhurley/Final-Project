import React from 'react';
import { CSSTransition } from 'react-transition-group';

const SearchBar = ({
    handleSearchSubmit,
    handleSearchValueChange,
    handleOnClickHiddenSearch,
    hiddenSearch
}) => {
    
    return (  
        <CSSTransition
            in={!hiddenSearch}
            timeout={400}
            classNames="default-transition"
            unmountOnExit
            onEnter={()=>handleOnClickHiddenSearch}
            onExited={()=>handleOnClickHiddenSearch}
            appear
        >
            <form onSubmit={handleSearchSubmit}>
                <div className="hiddenMenusearch" id="hiddenSearch">
                    <i className="fas fa-search fa-2x hiddensearchicons"></i>
                    <input type="text" name="search" placeholder="Search for the best shoes" onChange={handleSearchValueChange}/>
                    <i className="fas fa-times-circle fa-2x hiddensearchicons"  onClick={handleOnClickHiddenSearch}/>
                </div>
            </form>
        </CSSTransition>
    );
}
 
export default SearchBar;

