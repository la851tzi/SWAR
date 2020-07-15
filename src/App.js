import React, {Component} from 'react';
import './CSS/App.css';
import Layout from "./Layout";

class App extends Component {
  render() {
        return (
            <Layout>
                <p className={'Welcome_header'}>Welcome to our Newsletter!</p>
                <br/><br/>
                <p>This is an information text about ...</p>
                <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                <p>You can Scroll here...</p>
                <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                <p>fixed header</p>
            </Layout>
        );
  }
}

export default App;
