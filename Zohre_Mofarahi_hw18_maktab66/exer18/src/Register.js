import React,{useState, useEffect,useRef} from 'react';
import { Formik, Field } from 'formik';


export default function Register() {
    const town=useRef()
    const [state,setState]=useState()
    const [select,setSelected]=useState()
    const [city,setCity]=useState()

    const axios = require('axios').default;

    useEffect(() => {
        axios.get('./iranstates.json')
        .then(function (response) {
            setState(response.data)
            console.log(state)})
           
            
    },[]);

    // useEffect(()=>{
    //   Object.keys(state).map((item) => {
    //     if (item===town.current.value) {
    //       setCity(state[item])
    //       console.log(city)
    //     }
    //   })  
    // },[town.current])

   
   
   
    
   

    // const shahr= () => {
    //     if ()
    // }
    
  return ( 
  <>
    <div className="login-box">
    <h1>My Form</h1>
    <Formik className="login-box"
      initialValues={{
        firstName: '',
        lastName:'',
        email:'',
        password:'',
        repeatPassword:'',
        education:'',
        stateOfedu:'',
        town:''

    
    }}

      onSubmit={(values, actions) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        }, 1000);
      }}

   
    >
      {props => (
        <form onSubmit={props.handleSubmit}>
          <input
            type="text"
            placeholder='نام *'
            onChange={props.handleChange}
            onBlur={props.handleBlur}
            value={props.values.name}
            name="firstName"
          />
          {props.errors.firstName && <div id="feedback">{props.errors.firstName}</div>}

          <input
            type="text"
            placeholder='نام‌خانوادگی *'
            onChange={props.handleChange}
            onBlur={props.handleBlur}
            value={props.values.name}
            name="lastName"
          />
          {props.errors.lastName && <div id="feedback">{props.errors.lastName}</div>}

          <input
            type="email"
            placeholder='پست الکترونیک *'
            onChange={props.handleChange}
            onBlur={props.handleBlur}
            value={props.values.name}
            name="email"
          />
          {props.errors.email && <div id="feedback">{props.errors.email}</div>}

          <input
            type="password"
            placeholder='رمز عبور *'
            onChange={props.handleChange}
            onBlur={props.handleBlur}
            value={props.values.name}
            name="password"
          />
          {props.errors.password && <div id="feedback">{props.errors.password}</div>}

          <input
            type="password"
            placeholder='تکرار رمز عبور *'
            onChange={props.handleChange}
            onBlur={props.handleBlur}
            value={props.values.name}
            name="repeatPassword"
          />
          {props.errors.repeatPassword && <div id="feedback">{props.errors.repeatPassword}</div>}

          <Field as="select" name="education">
             <option value="تحصیلات *">تحصیلات *</option>
             <option value="سیکل">سیکل</option>
             <option value="دیپلم">دیپلم</option>
             <option value="فوق‌دیپلم">فوق‌دیپلم</option>
             <option value="لیسانس">لیسانس</option>
             <option value="فوق لیسانس">فوق لیسانس</option>
             <option value="دکتری">دکتری</option>

           </Field>

           <Field as="select" name="stateOfedu" >
             <option value="استان محل تحصیل">استان محل تحصیل *</option>
             {Object.keys(state).map(item => <option ref={town} value={item} >{item}</option>)}
           </Field>

           <Field as="select" name="town">
             <option value="شهر محل تحصیل"> شهر محل تحصیل *</option>
             {Object.entries(state).map((shahr)=> {let ostan=shahr.splice(0,1);
             return shahr[0].map((city,index)=>
              ostan[0]===town.current.values && 
              <option value={city} key={index}>{city}</option> ); })}
           </Field>
          <button type="submit">Submit</button>
        </form>
      )}
    </Formik>
    </div>
    </>
  )
}

