import React, {Component} from "react";
import Layout from "./Layout";
import './CSS/Customers.css';

class Customers extends Component {
    constructor(props){
        super(props);
        this.deleteCustomer = this.deleteCustomer.bind(this);
    }

    deleteCustomer(index) {
        let customers = JSON.parse(localStorage.getItem("customers"))
        customers.splice(index, 1);
        localStorage.setItem("customers", JSON.stringify(customers))
        window.location.reload();
    }

    render() {
        return (
            <Layout>
                <p className={'Customers_header'}>Customers:</p>
                this.props.customers.map((customer, i)
                {//this.props.customers.map((customer, i) -> not working with state
                    JSON.parse(localStorage.getItem("customers")).map((customer, index) => {
                        return (
                            <div key={index}>
                                {customer.preName}
                                <br/>
                                {customer.name}
                                <br/>
                                {customer.birthDate}
                                <br/>
                                {customer.payment}
                                <br/>
                                <button onClick={(index) => this.deleteCustomer()}>Delete customer</button>
                            </div>
                        );
                    }
                )}
            </Layout>
        );
    }
}
export default Customers;
