
import React from 'react'
import { Grid, Paper, Avatar, TextField, Button, Typography, Link } from '@material-ui/core'
import LockIcon from '@material-ui/icons/Lock';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import axios from 'axios';
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { ToastContainer,toast } from 'react-toastify';
import { useHistory } from 'react-router-dom';

const Login = ({ handleChange }) => {
 
 const history = useHistory();
  const paperStyle = { padding: 20, height: '73vh', width: 300, margin: "0 auto" }
  const avatarStyle = { backgroundColor: 'green' }
  const btnstyle = { margin: '8px 0' }
 
  const initialValues = {
    username: '',
    password: '',
    remember: false
    
  }
  const validationSchema = Yup.object().shape({
    username: Yup.string().email('please enter valid email').required("Required"),
    
    password: Yup.string().required("Required")

  })
  const onSubmit = (values, props) => {
    alert('')
    console.log(values)
    axios.post("http://dev.codebele.com:3006/login",{ "email":values.username, "password":values.password
  })
  .then((response)=>{
   
    const { token } = response.data.data[0];
    console.log(response.data.data[0].token)
                localStorage.setItem('token', token);
              
                const { email } = response.data.data[0];
                console.log(response.data.data[0].email)
                localStorage.setItem('email', email);
               
                
                const { name } = response.data.data[0];
                console.log(response.data.data[0].name)
                localStorage.setItem('name', name);
                
                history.push("/");   
                  
    
    toast("Wow so easy!");
    props.setSubmitting(false)
  })
  .catch((error)=>{
    alert(error)
    toast(error);
    
    props.setSubmitting(false)
    

})
    // setTimeout(() => {
    //   props.resetForm()
    //   props.setSubmitting(false)
    // }, 2000)
    // console.log(props)
  }
  return (
    <Grid>
      <ToastContainer/>
      <Paper style={paperStyle}>
        <Grid align='center'>
          <Avatar style={avatarStyle}>
            <LockIcon />
            </Avatar>
          <h2>Sign In</h2>
        </Grid>
        <Formik initialValues={initialValues}  onSubmit={onSubmit} validationSchema={validationSchema}>
          {(props) => (
            <Form>

              <Field as={TextField} label='Username' name="username"
                placeholder='Enter Username' fullWidth 
                helperText={<ErrorMessage name="username" />}
              />
              <Field as={TextField} label='Password' name="password"
                placeholder='Enter password' type='password' fullWidth 
                helperText={<ErrorMessage name="password" />}
              />
              <Field as={FormControlLabel}
                name='remember'
                control={
                  <Checkbox
                    color="primary"
                  />
                }
                label="Remember me"
              />
              <Button type='submit' color='primary' variant="contained" disabled={props.isSubmitting}
                style={btnstyle} fullWidth>{props.isSubmitting ? "Loading" : "Sign in"}</Button>

            </Form>
          )}
        </Formik>
        <Typography>
          <Link href="#" >
            Forgot password?
          </Link>
        </Typography>
        <Typography> Do you have an account ?
          <Link href="#" onClick={() => handleChange("event", 1)} >
            Sign Up
          </Link>
        </Typography>


      </Paper>
    </Grid>
  )
}
export default Login;