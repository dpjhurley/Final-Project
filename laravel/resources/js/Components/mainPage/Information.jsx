import React, { Component, Fragment } from "react";

export default class Information extends Component {
    render() {
        const { count, brand } = this.props;
        return (
            <div className="bodyInformation">
                <div>HOME</div>
                <br />
                {/* fix this to have it display mens or womens */}
                {(brand.length > 0) ? 
                ( <div className="bodyInformation__underline">{brand}FIX ME</div>
                ) : (
                  "nothing"
                )
               }  
               

               
                <br />
                <div className="bodyInformation__global">
                    {count.length} Products Found
                </div>
                <br />
                <br />
                <p>
                    For sneakerheads and trendsetters alike, GlobalShoes has
                    every style of footwear to kit out your wardrobe. Whether
                    you’re after a street-style men’s trainer or practical yet
                    stylish men’s boot, you’ll find your fit right here. Shop
                    from big brands like Nike, Vans, adidas to find your next
                    kick fix. Take your pick and order online at{" "}
                    <span className="bodyInformation__global">Global </span>
                    today.
                </p>
            </div>
        );
    }
}
