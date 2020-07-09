import React, { Component } from "react";

export default class Search extends Component {
    render() {
        const { search } = this.props;
        return (
            <div>
                <div className="search">
                    <form action="">
                        {search.map((search, i) => {
                            return (
                              <label key={search.id}>
                                {search.name}
                                <input type="checkbox">
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
