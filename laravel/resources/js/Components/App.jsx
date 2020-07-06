import React, { Fragment } from "react";
import TopNav from "./Topnav.jsx";
import Navbar from "./Navbar.jsx";
import Information from "./Information.jsx";
import Button from "./Button.jsx";
import Sort from "./Sort.jsx";
import SearchList from "./SearchList";
import ShoeList from "./ShoeList";

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: null
        };
    }

    componentDidMount = () => {
        fetch("api/shoes", {
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            }
        })
            .then(resp => resp.json())
            .then(data => {
                console.log(data);
                this.setState({
                    data: data
                })
            });
    };

    render() {
        return (
            <Fragment>
                <TopNav />
                <Navbar />
                <div className="information">
                    <Information />
                    <div className="buttons">
                        <Button />
                        <div className="topright">
                            <Sort />
                        </div>
                    </div>
                    <div className="shoes">
                        <SearchList />
                        <ShoeList />
                    </div>
                </div>
            </Fragment>
        );
    }
}
