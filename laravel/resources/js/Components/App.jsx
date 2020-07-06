import React from 'react';
 
export default class App extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            data: null
        }
    }

    componentDidMount = () => {
        fetch('api/shoes', {
            headers : { 
                'Accept': 'application/json',
                'Content-Type': 'application/json'
             }
        })
        .then((resp) => resp.json())
        .then((data) => {
            console.log(data)
            // this.setState({
            //     data: data
            // })
        })
    }

    render() {
        return (
            
            <h1>App component</h1>
 
        )
    }
}