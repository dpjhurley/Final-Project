import React, { Fragment } from 'react';
import TopNav from './Topnav.jsx';
import Navbar from './Navbar.jsx';
import HiddenMenu from './HiddenMenu.jsx';
import HiddenMenuSearch from './HiddenMenuSearch.jsx';

 
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
            <Fragment>
                    <TopNav />
                    <Navbar />
                    <HiddenMenu />
                    <HiddenMenuSearch />
            </Fragment>
        )
    }
}