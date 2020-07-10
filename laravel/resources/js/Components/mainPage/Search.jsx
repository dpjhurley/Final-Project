import React, { Component } from "react";

export default class Search extends Component {
    render() {
        const { search, handleCheck} = this.props;

        return (
            <div>
                <div className="search">
                    <form action="">
                        {search.map((newSearch) => {
                            return (
                              <label key={newSearch.id}>
                                {newSearch.name}
                                <input type="checkbox" value={newSearch.id} onClick={handleCheck}>
                                </input>
                                </label>
                            );
                        })}
                    </form>
                </div>
            </div>
        );
    }
}