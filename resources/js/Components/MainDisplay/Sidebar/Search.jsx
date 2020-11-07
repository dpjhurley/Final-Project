import React from "react";

const Search = ({ search, handleCheck, title}) => {
    return (
        <>
            <div className="bodySidebarTitle mainDisplaycontainer">{title}</div>
            <div className="bodySearch">
                <form action="">
                    {
                        search ?
                            search.map((newSearch, i) => {
                                return (
                                    <div key={i} className="bodySearch__Item">
                                        <input type="checkbox" value={i} onClick={handleCheck}/>
                                        <label key={i}> {newSearch} </label>
                                    </div>
                                );
                            })
                        :
                        null
                    }
                </form>
            </div>
        </>
    );
}

    export default Search;