import React from 'react'
import { useForm } from 'react-hook-form';

const LoginForm = () => {
    const {register, handleSubmit, errors} = useForm();
    const onSubmit =(data) => {
        console.log("Form data", data );
    };
    console.log(errors);

  return (
    <div className='login'>
      
    </div>
  )
}

export default LoginForm
