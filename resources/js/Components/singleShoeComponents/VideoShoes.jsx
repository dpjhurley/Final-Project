import React, { Component } from 'react'


export default class VideoShoes extends Component {
    render() {
        return (
            <>
                 <video  controls  >
                    <source src="/images/HowtoTakeCareofYourShoes.mp4" type="video/mp4" />
                </video>
            </>
        )
    }
}
