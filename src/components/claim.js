import React from "react";
import {NavLink } from "react-router-dom";

const Claim = (props) => {
  let { claim } = props;
  return (
    <tr>
     <td>{claim.empId}</td>
           <td>{claim.empName}</td>
           <td>{claim.empNumber}</td>
           <td>{claim.claimType}</td>
           <td>{claim.claimPrograms}</td>
           <td>{claim.claimStartDate}</td>
           <td>{claim.claimEndDate}</td>
           <td> <NavLink className="textdeco"  activeClassName="active"   to={{pathname: "/claimUpdate/"+claim.empId, claim }}>update</NavLink></td>
    </tr>
  );
};

export default Claim;