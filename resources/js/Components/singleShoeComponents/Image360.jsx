import React, { useEffect, useState } from 'react';

const Image360 = () => {
    const [ rotation, setRotation ] = useState(1);

    let isMousedown = false;
    let step = 0;
    const rangeArray = [...Array(50).keys()];
    

    useEffect(() => {
        document.addEventListener("mousedown",  (event) => {
            isMousedown = true;
            step = event.offsetX;
        });
        
        document.addEventListener("mouseup", ()=> {
            isMousedown = false;
        });

        window.addEventListener("mousemove",  (event)=> {
            if(isMousedown){
                let x = event.offsetX;
                let difference = x - step ;
                let picnumber = 1 +( Math.ceil(difference/20) ) % 50;

                if(picnumber <= 0){
                    picnumber = 49 - Math.abs(picnumber % 50)
                }
                setRotation(picnumber)
            }
        });   
    }, [])
        
    return (
        <div>
            {rangeArray.map((e) => (
                <img key={e} id={e} src={`/images/product/image-${e}.png`} alt="image" style={{display:rotation === e ? 'block' : 'none'}}/>
            ))}
        </div>  
    )
}

export default Image360;

