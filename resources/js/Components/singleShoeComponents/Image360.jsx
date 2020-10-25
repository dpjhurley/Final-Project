import React, { Component } from 'react'

export default class Image360 extends Component {
    constructor(props) {
        super(props);

        this.state= {
            rotation: 1,    
        }
        this.isMousedown = false;
        this.step = 0;
    }
    

    componentDidMount=()=>{
        document.addEventListener("mousedown",  (event) => {
            this.isMousedown = true;
            this.step = event.offsetX;
        });
        
        document.addEventListener("mouseup", (event)=> {
            this.isMousedown = false;
        });

        window.addEventListener("mousemove",  (event)=> {
            if(this.isMousedown){
                let x = event.offsetX;
                let difference = x -this.step ;
                let picnumber = 1 +( Math.ceil(difference/20) ) % 50;

                if(picnumber <= 0){
                    picnumber = 49 - Math.abs(picnumber % 50)
                }
                this.setState({
                    rotation : picnumber
                })
            }
        });   
    }

    render() {
        const rangeArray = [...Array(50).keys()];
          
        return (
            <div>
                {rangeArray.map((e) => (
                    <img key={e} id={e} src={`/images/product/image-${e}.png`} alt="image" style={{display:this.state.rotation === e ? 'block' : 'none'}}/>
                ))}
            </div>  
        )
    }
}
