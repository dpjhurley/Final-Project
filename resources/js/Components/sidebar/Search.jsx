import React from "react";

const Search = ({ search, handleCheck, title}) => {
    return (
        <>
            <div className="bodySidebarTitle mainDisplaycontainer">{title}</div>
            <div className="bodySearch">
                <form action="">
                    {search.map((newSearch, i) => {
                        return (
                            <div key={i} className="bodySearch__Item">
                                <input type="checkbox" value={newSearch.id} onClick={handleCheck}/>
                                <label key={newSearch.id}> {newSearch.name} </label>
                            </div>
                        );
                    })}
                </form>
            </div>
        </>
    );
}

    export default Search;