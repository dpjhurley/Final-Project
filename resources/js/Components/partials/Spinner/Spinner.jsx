import React, {Fragment} from 'react';
import spinner from './spinner.gif'

export const Spinner = () => {
    const spinnerStyle =  { 
        width: "200px", 
        margin:"auto", 
        display:"block"
    } 
    
    return (
        <Fragment>
            <img src={spinner} alt="Loading..." style={spinnerStyle}/>
        </Fragment>
    )
}
export default Spinner;