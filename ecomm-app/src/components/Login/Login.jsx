import axios from 'axios';
import { useFormik } from 'formik';
import React, { useState } from 'react';
import * as Yup from 'yup'
import { baseUrl } from '../../utils/baseUrl';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export default function Login() {
    const notify = (msg, type) => {
        toast[type](msg)
    };
    let [loading, setLoading] = useState(false)
    let navigate = useNavigate()

    let validationSchema = Yup.object({
        
        email: Yup.string().email().required(),
        password: Yup.string().required(),
    })
    let registerFormik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema
        ,
        onSubmit: (values) => {
            setLoading(true)
            axios.post(`${baseUrl}/auth/signin`, values).then((data) => {
                if (data.status === 200) {
                    localStorage.setItem('token', data.data.token);                setLoading(false)
                    notify('sucsses', 'success')
                    navigate('/home')
                }
            }).catch((error) => {
                if (error.response.status === 401) {
                    setLoading(false)
                    notify(error.response.data.message, 'error')
                    // alert(error.response.data.message)
                }
            })
        }
    })

    return (
        <>
            <div className="w-50 m-auto my-5">
                <h2>Login Now</h2>

                <form onSubmit={registerFormik.handleSubmit}>

                    <label htmlFor='email'>Email</label>
                    <input onBlur={registerFormik.handleBlur} value={registerFormik.values.email} onChange={registerFormik.handleChange} type='email' className='form-control my-3' id='email' name='email' />
                    {registerFormik.errors.email && registerFormik.touched.email ? <div className="alert alert-danger">
                        {registerFormik.errors.email}
                    </div> : ''}

                    <label htmlFor='password'>Password</label>
                    <input onBlur={registerFormik.handleBlur} value={registerFormik.values.password} onChange={registerFormik.handleChange} type='password' className='form-control my-3' id='password' name='password' />
                    {registerFormik.errors.password && registerFormik.touched.password ? <div className="alert alert-danger">
                        {registerFormik.errors.password}
                    </div> : ''}

                    
                    <button disabled={!(registerFormik.isValid && registerFormik.dirty)} type='submit' className='btn bg-main text-white'>
                        {!loading ? "Login" : <i className='fas fa-spinner fa-spin'></i>}</button>
                </form>

            </div>

        </>
    );
}
