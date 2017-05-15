import React, {Component} from 'react';
import logo from './logo.svg';
import MyEditor from './MyEditor';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>Welcome to Draft Editor</h2>
                </div>
                <MyEditor />
            </div>
        );
    }
}

export default App;
