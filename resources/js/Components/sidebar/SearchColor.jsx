import React from "react";

const SearchColor = ({ color, handleColorCheck}) => {
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

export default SearchColor;