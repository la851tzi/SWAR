import React, {Component} from 'react';
import {Link} from "react-router-dom";
import './CSS/Layout.css';

class Layout extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <Link to={'/'} className="Company">
                        <img className="CompanyLogo" src="images/logo512.png" width={30} height={30}></img>
                        <p className="CompanyName">Company</p>
                    </Link>
                    <Link to={'/customers'} className="Customers">Customers</Link>
                    <Link to={'/articles'} className="Articles">Articles</Link>
                    <Link to={'/register'} className="Register">Register</Link>
                    <Link to={'/login'} className="Login">Login</Link>
                </header>
                <body>
                <div className="main">
                    {this.props.children}
                </div>
                </body>
            </div>
        );
    }
}

export default Layout;
