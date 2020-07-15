import React, {Component} from "react";
import Layout from "./Layout";
import './CSS/Login.css';

class Login extends Component {
    constructor(props){
        super(props);
        /*
        roles:
        A = admin/employee
        U = user/customer
        */
        this.state = {
            role: "",
            username: "",
            password: "",
            isLoggedIn: false
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.UserGreeting = this.UserGreeting.bind(this);
        this.logout = this.logout.bind(this);
        this.GuestGreeting = this.GuestGreeting.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value,
        });
    }

    handleSubmit() {
        alert('Username: ' + this.state.username + ', Password: ' + this.state.password + ' ,Role: ' + this.state.role);
        const { role, username, password} = this.state;
        localStorage.setItem('role', role);
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
        localStorage.setItem('isLoggedIn', 'true');
    }

    logout() {
        localStorage.setItem('isLoggedIn', 'false');
        window.location.reload();
    }

    UserGreeting() {
        return (
            <div>
                <h1 className={"WelcomeUser"}>Hello {localStorage.getItem("username")}!</h1>
                <button onClick={this.logout}>Logout</button>
            </div>
        );
    }

    GuestGreeting() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Username
                    <input type="text" name="username" onChange={this.handleChange} />
                </label>
                <br/>
                <label>
                    Password
                    <input type="text" name="password" onChange={this.handleChange} />
                </label>
                <br/>
                <label>
                    Role
                    <input type="text" name="role" onChange={this.handleChange} />
                </label>
                <br/>
                <input type="submit" value="Login" />
            </form>
        );
    }

    render() {
        let message = '';
        if (localStorage.getItem('isLoggedIn') === 'true') {
            message = this.UserGreeting();
        } else {
            message = this.GuestGreeting();
        }
        return (
            <Layout>
                <p className={'Login_header'}>Login:</p>
                {message}
            </Layout>
        );
    }
}
export default Login;
