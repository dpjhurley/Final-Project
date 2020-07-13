import React, { Component, Fragment } from "react";

export default class Search extends Component {
    render() {
        const { search, handleCheck, title} = this.props;

        return (
            <Fragment>
            <div className="bodySidebarTitle">{title}</div>
                <div className="bodySearch">
                    <form action="">
                        {search.map((newSearch, i) => {
                            return (
                                <div key={i}>
                              <label key={newSearch.id}>
                                    <input type="checkbox" value={newSearch.id} onClick={handleCheck}/>
                                {newSearch.name}
                                </label>
                                </div>
                            );
                        })}
                    </form>
                </div>
            </Fragment>
        );
    }
}