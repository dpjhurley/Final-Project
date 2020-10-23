import React from 'react';

const QuantitySelector = ({ 
    selectedQuantity, 
    handleQuantitySelect 
}) => {
    let quantityArray = [];
    if (selectedQuantity != null) {
        quantityArray = [...Array(selectedQuantity.stock - 1).keys()];
    }
    return (  
        <div className="shoeDisplay__actual__info-size-selection-select" >
            <select name="select-size" className="select-css" onChange={handleQuantitySelect}>
                <option value disabled selected>Quantity</option>
                {quantityArray.map((n, i) => (
                    <option key={i}>{n + 1}</option>
                ))}
            </select>
        </div>
    );
}
 
export default QuantitySelector;