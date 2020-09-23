
import React from 'react';
import axios from 'axios';
import useForm from "./userForm";
import '../index.css';

import validate from "./validateForm";

const UpdateClaim = props => {
  const { handleChange, handleSubmit, values, errors, claimTypes } = useForm(
    submit,
    validate,
    props
  );
 

 

  function submit  ()  {
        axios.post('http://localhost:5000/claims/update/'+values._id, values)
       .then(res => res.data).then(
        axios.get('http://localhost:5000/claims')
        .then(((response) => redirect())
       ))
      }


      function redirect () {
        props.history.push("/claimList");
      }
      


      return (   // retur Render fucction is life cycle hook which render template
        <div className="container mt-3 col-6" id="1200">
          <div className="card">
          <div className="card-header bold">Update Claims</div>
            <div className="card-body">
            <form>
                <div className="row mb-2 mt-2">
                    <label className="col-4">Employee Id</label>
                    <div className="col-7">
                        <input type="text" disabled placeholder="employee Id" className="form-control" name="empId" defaultValue={values ? values.empId : ''}
          onChange={handleChange}/>
          {errors.empId && <p className="error">{errors.empId}</p>}
          </div>
                </div>
                <div className="row mb-2">
                    <label className="col-4">Employee Name</label>
                    <div className="col-7">
                    <input type="text" disabled placeholder="Employee Name" defaultValue={values ? values.empName : ''} 
          onChange={handleChange} className="form-control" name="empName" />
          {errors.empName && <p className="error">{errors.empName}</p>}
          </div>
                </div>
                <div className="row mb-2">
                    <label className="col-4">Claim Number</label>
                    <div className="col-7">
                    <input type="text"  defaultValue={values ? values.empNumber : ''}
          onChange={handleChange} placeholder="Claim Number" className="form-control" name="empNumber" />
          {errors.empNumber && <p className="error">{errors.empNumber}</p>}
          </div>
                </div>
                <div className="row mb-2">
                    <label className="col-4">Claim Type</label>
                    <div className="col-7">
                    <select   required name="claimType" className="form-control"  defaultValue={values ? values.claimType : ''}
          onChange={handleChange}>
              <option 
                defaultValue={null}>Please Select
                </option>
                    {
                        
          claimTypes.map(function(user) {
              return <option 
                key={user}
                defaultValue={user}>{user}
                </option>;
            })
          }
      </select>
      {errors.claimType && <p className="error">{errors.claimType}</p>}
      </div>
                </div>
                <div className="row mb-2">
                    <label className="col-4">claim programs</label>
                    <div className="col-7">
                    <input type="text"   defaultValue={values ? values.claimPrograms : ''}
          onChange={handleChange} placeholder="Claim Programs" className="form-control" name="claimPrograms" />
          {errors.claimPrograms && <p className="error">{errors.claimPrograms}</p>}
                </div>
                </div>
                <div className="row mb-2">
                    <label className="col-4">Claim Start Date</label>
                    <div className="col-7">
                    <input type="date"   defaultValue={values ? values.claimStartDate : ''}
          onChange={handleChange} placeholder="username" className="form-control" name="claimStartDate" />
          {errors.claimStartDate && <p className="error">{errors.claimStartDate}</p>}
                </div>
                </div>
                <div className="row mb-4">
                    <label className="col-4">Claim End Date</label>
                    <div className="col-7">
                    <input type="date"   defaultValue={values ? values.claimEndDate : ''}
          onChange={handleChange} placeholder="username" className="form-control" name="claimEndDate" />
          {errors.claimEndDate && <p className="error">{errors.claimEndDate}</p>}
                </div>
                </div>
                <div className="row mb-5">
                    <div className="col-4 ml-3"></div>
                   <button type="button" onClick={ handleSubmit}>Update</button>
                   <button type="button" className="ml-3" onClick={ redirect}>Cancel</button>
                </div>
            </form>
            </div>
            </div>
        </div>

    );
    }

export default UpdateClaim;   
