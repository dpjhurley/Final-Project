import React from 'react';
import { Link } from 'react-router-dom';
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
                    <Link to="/search" onClick={handleSearchSubmit}><i className="fas fa-search fa-2x hiddensearchicons"></i></Link>
                    <input type="text" name="search" placeholder="Search for the best shoes" onChange={handleSearchValueChange} 
                    // onKeyUp={()=> e.key === 'Enter' ? handleSearchSubmit() : false} 
                    />
                    <i className="fas fa-times-circle fa-2x hiddensearchicons"  onClick={handleOnClickHiddenSearch}/>
                </div>
            </form>
        </CSSTransition>
    );
}
 
export default SearchBar;

