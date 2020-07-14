import React from 'react';

class QuantitySelector extends React.Component {
    render() { 
        const { selectedQuantity, handleQuantitySelect } = this.props;
        let quantityArray = [];
        if (selectedQuantity != null) {
            quantityArray = [...Array(selectedQuantity.stock).keys()];
        }

        return (
            <div className="shoeDisplay__actual__info-size-selection-select" >
                <select name="select-size" className="select-css" onChange={handleQuantitySelect}>
                    <option value disabled selected>Quantity</option>
                    {quantityArray.map((n, i) => (
                        <option key={i}>{n}</option>
                    ))}
                </select>
            </div>  
        );
}
}
 
export default QuantitySelector;

