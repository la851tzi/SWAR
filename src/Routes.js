import {BrowserRouter, Route, Link} from "react-router-dom";
import React, {Component} from "react";
import App from "./App";
import Registration from "./Registration";
import Login from "./Login";
import Articles from "./Articles";
import Customers from "./Customers";

class Routes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            articles: [
                {
                    articleName: "",
                    articleText: ""
                }
            ],
            customers: [
                {
                    preName: "",
                    name: "",
                    birthDate: "",
                    payment: ""
                }
            ]
        }
        this.addCustomer = this.addCustomer.bind(this)
        this.addArticle = this.addArticle.bind(this)
    }

    addCustomer(preName, name, birthDate, payment) {
        let customersTemp = [...this.state.customers]
        customersTemp = customersTemp.concat({preName: preName, name: name, birthDate: birthDate, payment: payment})
        this.setState({customers: customersTemp})
        alert('Pre Name: ' + preName + ', Name: ' + name + ', Birth date: ' + birthDate + ', Payment: ' + payment);
    }

    addArticle(articleName, articleText) {
        let articlesTemp = [...this.state.articles]
        articlesTemp = articlesTemp.concat({articleName: articleName, articleText: articleText})
        this.setState({articles: articlesTemp})
        alert('Article Name: ' + articleName + ', Article text: ' + articleText);
    }

    render() {
        //render = {props => <Registration {...props} addCustomer = {this.addCustomer}
        return(
            <BrowserRouter>
                <Route path={'/'} exact component = {App} />
                <Route path={'/register'} exact render = {props => <Registration {...props} addCustomer = {this.addCustomer}/> } />
                <Route path="/login" exact component = {Login} />
                <Route path="/articles" exact render = {props => <Articles {...props} articles = {this.state.articles} addArticles = {this.addArticle}/>} />
                <Route path="/customers" exact render = {props => <Customers {...props} customers = {this.state.customers}/>} />
            </BrowserRouter>
        );
    }
}

export default Routes;
