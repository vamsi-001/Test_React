import { useState, useEffect} from "react";



const useForm = (callback, validate, props) => {
  let [claimTypes] = useState(['Submitted', 'Received', 'Pending', 'More Info Required', 'Denied', 'Rejected', 'Paid']);
    const [values, setValues] = useState({
      empId:'',
      empName:'',
      empNumber:'',
      claimType: props.location.claim ? props.location.claim.claimType: '',
      claimPrograms:'',
      claimStartDate:'',
      claimEndDate:''
    });
    console.log(values);
    const [message, setMessage] = useState({
    });

    useEffect(() => {
      if (props.location.claim !== null && props.location.claim !== undefined) {
       setValues(props.location.claim);
      }
    }, []);
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
  
    const handleChange = event => {
      const { name, value } = event.target;
      values[name] = value;
      setValues(values);
    };
  
    const handleSubmit = event => {
      event.preventDefault();
      setErrors(validate(values));
      setIsSubmitting(true);
    };
  
    useEffect(() => {
      if (Object.keys(errors).length === 0 && isSubmitting) {
        callback();
      }
    }, [errors]);
  
    return {
      handleChange,
      handleSubmit,
      values,
      errors,
      claimTypes,
      setValues
    };
  };
  
  export default useForm;