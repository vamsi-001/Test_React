
import React from 'react';
import axios from 'axios';

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          empId: '',
          empName: '',
          empNumber: '',
          claimType: '',
          claimPrograms: '',
          claimStartDate: '',
          claimEndDate: '',
          claimTypes: ['Submitted', 'Received', 'Pending', 'More Info Required', 'Denied', 'Rejected', 'Paid']
        };
    }

    onChange = (e) => {
        /*
          Because we named the inputs to match their
          corresponding values in state, it's
          super easy to update the state
        */
        this.setState({ [e.target.name]: e.target.value });
      }

      onSubmit = (e) => {
        e.preventDefault();
        // get our form data out of state
        const data = this.state;

        console.log(data);
        axios.post('http://localhost:5000/claims/add', data).then(res=> console.log(res.data));
      }
    render() {
        const { empId, empName, empNumber, claimType, claimPrograms, claimStartDate, claimEndDate } = this.state;
        return (   // Render fucction is life cycle hook which render template

            <div className="container" id="1200">
                <form onSubmit={this.onSubmit}>
                    <div className="row mb-2 mt-5">
                        <label className="col-4">Employee Id</label>
                        <input type="text" placeholder="username" className="form-control col-4" name="empId" value={empId}
              onChange={this.onChange} />
                    </div>
                    <div className="row mb-2">
                        <label className="col-4">Employee Name</label>
                        <input type="text" placeholder="username" value={empName}
              onChange={this.onChange} className="form-control col-4" name="empName" />
                    </div>
                    <div className="row mb-2">
                        <label className="col-4">Claim Number</label>
                        <input type="text" value={empNumber}
              onChange={this.onChange} placeholder="username" className="form-control col-4" name="empNumber" />
                    </div>
                    <div className="row mb-2">
                        <label className="col-4">Claim Type</label>
                        <select ref="userInput"
              required name="claimType"
              className="form-control col-4"
              value={claimType}
              onChange={this.onChange}>
              {
                this.state.claimTypes.map(function(user) {
                  return <option 
                    key={user}
                    value={user}>{user}
                    </option>;
                })
              }
          </select>
                    </div>
                    <div className="row mb-2">
                        <label className="col-4">claim programs</label>
                        <input type="text" value={claimPrograms}
              onChange={this.onChange} placeholder="username" className="form-control col-4" name="claimPrograms" />
                    </div>
                    <div className="row mb-2">
                        <label className="col-4">Claim Start Date</label>
                        <input type="date" value={claimStartDate}
              onChange={this.onChange} placeholder="username" className="form-control col-4" name="claimStartDate" />
                    </div>
                    <div className="row mb-3">
                        <label className="col-4">Claim End Date</label>
                        <input type="date" value={claimEndDate}
              onChange={this.onChange} placeholder="username" className="form-control col-4" name="claimEndDate" />
                    </div>
                    <div className="row mb-5">
                        <div className="col-5"></div>
                      <button type="button">Submit</button>
                    </div>
                </form>
            </div>

        );
    }
}

export default Home;   
