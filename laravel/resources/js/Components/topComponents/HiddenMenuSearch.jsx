import React from 'react';


export default class HiddenMenuSearch  extends React.Component{
 

    render(){
        return( <form action="/">
            <div className="hiddenMenusearch hidden" id="hiddenSearch">
            <i className="fas fa-search fa-2x hiddensearchicons"></i>

                 <input type="text" name="search" placeholder="Search for the best shoes" />
            
            <i className="fas fa-times-circle fa-2x hiddensearchicons" />
          
            </div>
            </form>
        )
    }
}

