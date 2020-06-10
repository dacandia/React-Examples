import React, { Component } from 'react';

class LoginButton extends Component{
    render() {
        return <button>Login</button>
    }
}

class LogoutButton extends Component{
    render() {
        return (
            <div>
                <p>Welcome, user!</p>
                <button>Logout</button>
            </div>
        );
    }
}

export default class ConditionalSection extends Component{
    constructor() {
        super()
        this.state = { isUserLogged : true}
    }
    render() {
        return (
            <div>
              <h4>Conditional Rendering</h4>
                {this.state.isUserLogged
                    ?<LogoutButton/>
                    :<LoginButton/>}
            </div>
        );
    }
}