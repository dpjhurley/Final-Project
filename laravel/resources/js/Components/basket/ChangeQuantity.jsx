import React from 'react';

class ChangeQuantity extends React.Component {
    render() { 
        const { quantityArray, changeNewQuantity } = this.props;
        return (  
            <select className="shoeinfo__quantity" onChange={changeNewQuantity}>
                {quantityArray.map((n, i) => (
                    <option key={i}>{n}</option>
                ))}
            </select>
        );
    }
}
 
export default ChangeQuantity;