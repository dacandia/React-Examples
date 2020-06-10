import React, {Component} from 'react';

export default class Forms extends Component {

    constructor() {
        super();
        this.state = {
            inputName: '',
            inputEmail: '@',
            inputTerms: true
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state)
    }

    handleChange = (e) => {
        console.log('handleChange');
        console.log(e.target.checked);
        this.setState({ inputTerms : e.target.checked })
    }

    render() {
        return (
            <div>
                <h4>Forms</h4>
                <form onSubmit={this.handleSubmit}>
                    <p>
                        <label htmlFor='name'>Name: </label>
                        <input
                            id='name'
                            name='userName'
                            onChange={e => this.setState({inputName : e.target.value})}
                            placeholder='Introduce your name'
                            ref={inputElement => this.inputName = inputElement}
                            value={this.state.inputName}
                        />
                    </p>
                    <p>
                        <label htmlFor='email'>Email: </label>
                        <input
                            id='email'
                            name='emailAccount'
                            onChange={e => this.setState({inputEmail : e.target.value})}
                            placeholder='Introduce your Account'
                            value={this.state.inputEmail}
                        />
                    </p>
                    <p>
                        <label>
                            <input 
                                onChange={this.handleChange} 
                                type='checkbox'
                                checked={this.state.inputTerms}
                            />
                            Accepted terms
                        </label>
                    </p>
                    <button>Send</button>
                </form>
            </div>
        );
    }
}