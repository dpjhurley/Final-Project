import React from 'react';


export default class HiddenMenuSearch  extends React.Component{

    render(){
        return(
            <div className="hiddenMenusearch">
            <a href="#"><i className="fas fa-search fa-2x"></i></a>
           
                
                 <input  name="search" placeholder="Search for the best shoes" />
            
            <a href="#"><i class="fas fa-times-circle fa-2x"></i></a>
            </div>
        )
    }
}

