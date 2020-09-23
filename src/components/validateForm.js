export default function validateLogin(values) {
    let errors = {};
    if (!values.empId) {
        errors.empId = "Employee Id is Required";
    }  else if(!/^[0-9]{6}$/.test(values.empId)) {
        errors.empId = "Employee Id must be 6 digits";
    }
    if (!values.empName) {
        errors.empName = "Employee Name is Required";
    } 
    if (!values.empNumber) {
        errors.empNumber = "claim Number is Required";
    } else if(!/^[0-9]{8}$/.test(values.empNumber)) {
        errors.empNumber = "claim Number Must be exactly in 8 digits";
    }
    if (!values.claimType) {
        errors.claimType = "claim Type  is Required";
    }
    if (!values.claimPrograms) {
        errors.claimPrograms = "claim programs  is Required";
    }  else if(!/^[A-Za-z]+$/.test(values.claimPrograms)) {
        errors.claimPrograms = "claim programs Must be in alphabets";
    }
    if (!values.claimStartDate) {
        errors.claimStartDate = "claim start Date is Required";
    }
    if (!values.claimEndDate) {
        errors.claimEndDate = "claim End Date is Required";
    }
    return errors;
  }