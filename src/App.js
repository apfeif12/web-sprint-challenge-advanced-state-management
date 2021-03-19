import React, { Component } from "react";
import { connect } from "react-redux";

import AddForm from "./components/AddForm";
import SmurfList from "./components/SmurfList";
import Header from "./components/Header";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { getSmurfs } from "./actions/index.js";

class App extends Component {
    componentDidMount() {
        this.props.getSmurfs();
        console.log("get smurfs render");
    }

    render() {
        return (
            <div className="App">
                <Header />
                <main>
                    <SmurfList />
                    <AddForm />
                </main>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    smurfs: state.smurfs,
    loading: state.loading,
    error: state.error,
});

export default connect(mapStateToProps, { getSmurfs })(App);

//Task List:
//1. Connect the fetchSmurfs actions to the App component.
//2. Call the fetchSmurfs action when the component first loads.
