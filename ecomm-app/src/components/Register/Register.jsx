import axios from 'axios';
import { useFormik } from 'formik';
import React, { useState } from 'react';
import * as Yup from 'yup'
import { baseUrl } from '../../utils/baseUrl';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export default function Register() {
    const notify = (msg,type) => {
        toast[type](msg)
    };
    let [loading,setLoading] = useState(false)
    let navigate = useNavigate()

    let validationSchema = Yup.object({
        name: Yup.string().min(3).max(20).required(),
        email: Yup.string().email().required(),
        // password: Yup.string().matches(/^[A-Z][a-z0-9@#$%]{5,}$/,'password must have number and character').required(),
        password: Yup.string().matches().required(),
        rePassword: Yup.string().oneOf([Yup.ref('password')],'not  match password').required(),
    })
    let registerFormik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
            rePassword: ''
        },
        validationSchema
        ,
        onSubmit: (values) => {
            setLoading(true)
            axios.post(`${baseUrl}/auth/signup`, values).then((data) => {
                if (data.status === 201) {
                    setLoading(false)
                    notify('sucsses','success')
                    navigate('/login')
                }
            }).catch((error) => {
                if (error.response.status === 409) {
                    setLoading(false)
                    notify(error.response.data.message,'error')
                    // alert(error.response.data.message)
                }
            })
        }
    })

    return (
        <>
            <div className="w-50 m-auto my-5">
                <h2>Register Now</h2>

                <form onSubmit={registerFormik.handleSubmit}>
                    <label htmlFor='name'>Name</label>
                    <input onBlur={registerFormik.handleBlur} value={registerFormik.values.name} onChange={registerFormik.handleChange} type='text' className='form-control my-3' id='name' name='name' />
                    {registerFormik.errors.name && registerFormik.touched.name? <div className="alert alert-danger">
                        {registerFormik.errors.name}
                    </div> : ''}

                    <label htmlFor='email'>Email</label>
                    <input onBlur={registerFormik.handleBlur} value={registerFormik.values.email} onChange={registerFormik.handleChange} type='email' className='form-control my-3' id='email' name='email' />
                    {registerFormik.errors.email && registerFormik.touched.email? <div className="alert alert-danger">
                        {registerFormik.errors.email}
                    </div> : ''}

                    <label htmlFor='password'>Password</label>
                    <input onBlur={registerFormik.handleBlur} value={registerFormik.values.password} onChange={registerFormik.handleChange} type='password' className='form-control my-3' id='password' name='password' />
                    {registerFormik.errors.password && registerFormik.touched.password? <div className="alert alert-danger">
                        {registerFormik.errors.password}
                    </div> : ''}

                    <label htmlFor='rePassword'>rePassword</label>
                    <input onBlur={registerFormik.handleBlur} value={registerFormik.values.rePassword} onChange={registerFormik.handleChange} type='password' className='form-control my-3' id='rePassword' name='rePassword' />
                    {registerFormik.errors.rePassword && registerFormik.touched.rePassword? <div className="alert alert-danger">
                        {registerFormik.errors.rePassword}
                    </div> : ''}
                    <button disabled={!(registerFormik.isValid && registerFormik.dirty )} type='submit' className='btn bg-main text-white'>
                        {!loading ? "Register" : <i className='fas fa-spinner fa-spin'></i>}</button>
                </form>

            </div>

        </>
    );
}
