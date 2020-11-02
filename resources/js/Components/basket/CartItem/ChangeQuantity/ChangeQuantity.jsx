import React from 'react';

const ChangeQuantity = ({ quantityArray, changeNewQuantity }) => {
    return (  
        <select className="shoeinfo__quantity" onChange={changeNewQuantity}>
            {quantityArray.map((n, i) => (
                <option key={i}>{n}</option>
            ))}
        </select>
    );
}
 
export default ChangeQuantity;