import React from 'react';
import NavBar from './NavBar/NavBar.jsx';
import SearchBar from './SearchBar/SearchBar.jsx';


const Header = ({ 
    handleExtensionChange,
    handleOnClickHiddenSearch,
    handleSearchSubmit,
    handleSearchValueChange,
    hiddenSearch
}) => {
    return (  
        <>
            <NavBar 
                handleExtensionChange={handleExtensionChange}
                handleOnClickHiddenSearch={handleOnClickHiddenSearch}
            />
            <SearchBar 
                handleSearchSubmit={handleSearchSubmit}
                handleSearchValueChange={handleSearchValueChange}
                handleOnClickHiddenSearch={handleOnClickHiddenSearch}
                hiddenSearch={hiddenSearch}
            />
        </>
    );
}
 
export default Header;