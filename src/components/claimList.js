
import React, { useEffect, useReducer } from 'react';
import axios from 'axios';
import Claim from './claim.js';


const reducer = (state, action) => {
  let { type, value } = action;

  switch (type) {
      case 'GET': {
          return { ...state, claims: state.claims.concat(value)}
      }
      default:
      throw new Error();
  }
}

const ClaimMenu = (props) => {
  const initialstate = {    
    claims: [  
    ]    
};  
const [state, dispatch] = useReducer(reducer, initialstate);

useEffect(() => {
  axios.get('http://localhost:5000/claims')
  .then((response) => response.data)
  .then((claims)=> {dispatch({ type: 'GET', value: claims }) 
})
  .catch((error) => {
    console.log(error);
  })
}, []);



let renderTableData = () => {
  return state.claims.map((claim, index) => {
     return (
           <Claim key={index} claim={claim} />
     );
  });
}

    

      return (
        <div className="container col-10 mt-3">
          <div className="card">
            <div className="card-header bold">Claim List</div>
        <table  className="ml-auto mt-2 mr-auto table" responsive="sm">
          <thead className="head">
            <tr>
              <th>Employee ID</th>
              <th>Employee Name</th>
              <th>Claim Number</th>
              <th>Claim Type</th>
              <th>Claim Program</th>
              <th>Claim Start Date</th>
              <th>Claim End Date</th>
              <th>Update</th>
            </tr>
          </thead>
          <tbody>
          {renderTableData()}
          </tbody>
        </table>
        </div>
        </div>
      );
}

export default ClaimMenu;   
