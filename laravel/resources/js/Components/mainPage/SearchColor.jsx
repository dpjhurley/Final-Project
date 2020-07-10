import React, { Component } from "react";

export default class SearchColor extends Component {
    render() {
        const { color, handleColorCheck} = this.props;
        return (
            <div>
                <div className="search">
                    <form action="">
                        {color.map((colors, i) => {
                            return (
                              <label key={i}>
                                {colors}
                                <input type="checkbox" value={colors} onClick={handleColorCheck}/>
                                </label>
                            );
                        })}
                    </form>
                </div>
            </div>
        );
    }
}