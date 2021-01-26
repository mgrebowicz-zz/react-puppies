import { Component } from 'react';
import { signUp } from '../../utilities/users-service';
import { Button, Input, FormControl } from '@material-ui/core';


export default class SignUpForm extends Component {
    state = {
        name: '',
        email: '',
        password: '',
        confirm: '',
        error: ''
    };

    handleChange = (evt) => {
        this.setState({
            [evt.target.name]: evt.target.value,
            error: ''
        });
    };

    handleSubmit = async (evt) => {
        evt.preventDefault();
        try {
            const formData = { ...this.state };
            delete formData.error;
            delete formData.confirm;
            const user = await signUp(formData);
            this.props.setUser(user);
        } catch {
            this.setState({ error: 'Sign Up Failed - Try Again' });
        }
    };

    render() {
        const disable = this.state.password !== this.state.confirm;
        return (
            <div>
                <div className="form-container">
                    <form autoComplete="off" onSubmit={this.handleSubmit}>  
                        <FormControl>                            
                            <Input placeholder="Name" type="text" name="name" value={this.state.name} onChange={this.handleChange} />                           
                            <Input placeholder="Email" type="email" name="email" value={this.state.email} onChange={this.handleChange} />  
                            <Input placeholder="Password" type="password" name="password" value={this.state.password} onChange={this.handleChange} />
                            <Input placeholder="Confirm" type="password" name="confirm" value={this.state.confirm} onChange={this.handleChange} />
                        </FormControl>
                        {/* <label>Name</label>
                        <input type="text" name="name" value={this.state.name} onChange={this.handleChange} required /> */}
                        {/* <label>Email</label>
                        <input type="email" name="email" value={this.state.email} onChange={this.handleChange} required />
                        <label>Password</label>
                        <input type="password" name="password" value={this.state.password} onChange={this.handleChange} required />
                        <label>Confirm</label>
                        <input type="password" name="confirm" value={this.state.confirm} onChange={this.handleChange} required /> */}
                        <Button variant="contained" color="primary" type="submit" disabled={disable}>SIGN UP</Button>
                    </form>
                </div>
                <p className="error-message">&nbsp;{this.state.error}</p>
            </div>
        );
    }
}