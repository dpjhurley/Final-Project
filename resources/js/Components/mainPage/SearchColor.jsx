import React, { Component } from "react";

export default class SearchColor extends Component {
    render() {
        const { color, handleColorCheck} = this.props;
        return (
            <>
                <div className="bodySidebarTitle">Color</div>
                <div className="bodySearch">   
                    <form action="">
                        {color.map((colors, i) => {
                            return (
                                <div key={i}>
                              <label key={i}>
                              <input type="checkbox" value={colors} onClick={handleColorCheck} />
                                {colors}
                                </label>
                                </div>
                            );
                        })}
                    </form>
                </div>
            </>
        );
    }
}