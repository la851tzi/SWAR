import React, {Component} from "react";
import Layout from "./Layout";
import './CSS/Registration.css';

class Registration extends Component {
    constructor(props){
        super(props);

        this.state = {
            preName: "",
            name: "",
            birthDate: "",
            payment: ""
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value,
        });
    }

    handleSubmit(event) {
        let customers;
        const { preName, name, birthDate, payment} = this.state
        this.props.addCustomer(preName, name, birthDate, payment)
        //because state is gone after switching route
        let customer = {
            preName: preName,
            name: name,
            birthDate: birthDate,
            payment: payment

        }
        if (localStorage.getItem("customers") === null) {
            customers = [];
            customers[0] = customer
            localStorage.setItem("customers", JSON.stringify(customers))
        } else {
            customers = JSON.parse(localStorage.getItem("customers"))
            let customersNew = [
                ...customers,
                customer
            ]
            localStorage.setItem("customers", JSON.stringify(customersNew))
        }
    }

    render() {
        return (
            <Layout>
                <p className={'Registration_header'}>Register here:</p>
                <form onSubmit= {this.handleSubmit}>
                    <label>
                        Pre name
                        <input type="text" name="preName" onChange={this.handleChange} />
                    </label>
                    <br/>
                    <label>
                        Name
                        <input type="text" name="name" onChange={this.handleChange} />
                    </label>
                    <br/>
                    <label>
                        Birth date
                        <input type="text" name="birthDate" onChange={this.handleChange} />
                    </label>
                    <br/>
                    <label>
                        Payment
                        <input type="text" name="payment" onChange={this.handleChange} />
                    </label>
                    <br/>
                    <input type="submit" value="Register" />
                </form>
            </Layout>
        );
    }
}
export default Registration;
