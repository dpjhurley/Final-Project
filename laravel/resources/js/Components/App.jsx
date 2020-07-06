import React, { Fragment } from 'react';
import TopNav from './Topnav.jsx'
 
export default class App extends React.Component {
    render() {
        return (
            <Fragment>
                    <TopNav />
                    <Navbar />
            </Fragment>
        )
    }
}