
import React from 'react';
import '../index.css';
import  { Redirect } from 'react-router-dom';


class Login extends React.Component {
    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this);
         this.state ={
            loginStatus: false
         }
    }

    handleSubmit(e) {
     e.preventDefault();
    this.setState({
        loginStatus: true
    })
      }


    render() {
        if(this.state.loginStatus){
            return <Redirect to={{
                pathname: '/main',
                state: {  }
            }} />
         }
        return (   // Render fucction is life cycle hook which render template

            <div className="container col-4 mt-5">
                <div className="card mb-3">
                    <div className="card-header">Login</div>
                    <div className="card-body">
                    <form>
                    <div className="row mb-2">
                   <input type="text" placeholder="username" className="form-control" name="userName" />
                    </div>
                    <div className="row mb-3">
                    <input type="password" placeholder="username" className="form-control" name="password" /> 
                    </div>
                    <div className="row justify mb-2">
                    <button variant="success" onClick={this.handleSubmit}>Login</button>
                    </div>
                    </form>
                    </div>
                </div>

            </div>
        );
    }
}

export default Login;   
