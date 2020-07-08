import React from 'react';

export default class SingleShoePage extends React.Component{
    render() {
        return (
            <div className="shoeDisplay">
                <h4>home > Women > converse black & white all start Trainers</h4>
                <div className="shoeDisplay__actual">
                    <div className="shoeDisplay__actual__pic">
                        <div className="shoeDisplay__actual__pic-smallpic">
                            <img src="" alt="pic"></img>
                            <img src="" alt="pic"></img>
                            <img src="" alt="pic"></img>
                        </div>
                        <div className="shoeDisplay__actual__pic-largepic"></div>
                    </div>
                    <div className="shoeDisplay__actual__info">
                        <div className="shoeDisplay__actual__info-top"></div>
                        <div className="shoeDisplay__actual__info-size"></div>
                        <div className="shoeDisplay__actual__info-collect"></div>
                    </div>
                </div>
            </div>
        )
    }
}
