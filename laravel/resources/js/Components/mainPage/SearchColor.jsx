import React, { Component, Fragment } from "react";

export default class SearchColor extends Component {
   /*  constructor(props){
        super(props);
        this.state ={
            checked : false
        }
    }
    handleUnclick = ()=>{
        this.setState({
            checked: true
    });
    } */
    render() {
        const { color, handleColorCheck} = this.props;
        return (
            <Fragment>
            <div className="bodySidebarTitle">Color</div>
                <div className="bodySearch">
                    <br/>
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
            </Fragment>
        );
    }
}