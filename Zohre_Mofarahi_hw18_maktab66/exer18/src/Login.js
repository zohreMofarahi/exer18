import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';

const validationSchema=yup.object({
  email: yup
    .string('لطفا ایمیل خود را وارد نمایید')
    .email('ایمیل معتبر نمی‌باشد')
    .required('ایمیل مورد نیاز است'),
  password:yup
    .string('لطفا رمز خود را وارد نمایید')
    .min(8, 'طول رمز حداقل 8 کاراکتر می‌باشد')
    .required('رمز عبور مورد نیاز است'),
});
 
export const Login=() =>{
   
   const formik = useFormik({
     initialValues: {
       email: '',
       password:'',
     },

     validationSchema: validationSchema,

     onSubmit: values => {
       alert(JSON.stringify(values,null,2));
     },
   });
   return (
    <div className="login-box">
    <h1 className="my-4">خوش آمدید</h1>
     <form  className="login-box"
     onSubmit={formik.handleSubmit}>
     
       <input
         className=" inputstyle my-3"
         id="email"
         name="email"
         type="email"
         placeholder='پست الکترونیک *'
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.email}
         error={formik.touched.email && Boolean(formik.errors.email)}
         
       />

{formik.touched.email && formik.errors.email ? (
         <div className='validation'>{formik.errors.email}</div>
       ) : null}

       <input
         className=" inputstyle"
         id="password"
         name="password"
         type="password"
         placeholder='رمز عبور *'
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.password}
         error={formik.touched.password && Boolean(formik.errors.password)}
       />

{formik.touched.password && formik.errors.password ? (
         <div className='validation'>{formik.errors.password}</div>
       ) : null}

       

<p><a href='#' >فراموش کردید؟</a></p>
       
       <button 
       className="logButton "
       type="submit">ورود</button>
     </form>

     </div>
   );
 };

 export default Login