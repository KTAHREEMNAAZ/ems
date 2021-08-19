import React from 'react'
import { Grid, Paper, Avatar, Typography, TextField, Button } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
// import Checkbox from '@material-ui/core/Checkbox';
 import axios from 'axios';
import { Formik, Field, Form, ErrorMessage } from 'formik'
import { FormHelperText } from '@material-ui/core'
import { ToastContainer, toast } from 'react-toastify';
import * as Yup from 'yup'

const Signup = () => {
    const paperStyle = { padding: 20, width: 300, margin: "0 auto" }
    const headerStyle = { margin: 0 }
    const avatarStyle = { backgroundColor: 'green' }
    const marginTop = { marginTop: 5 }
    const initialValues = {
        name: '',
        surname: '',
        email: '',
        gender: '',
        phoneNumber: '',
        dateofbirth: '',
        password: ''
       

    }
    
    const validationSchema = Yup.object().shape({
        name: Yup.string().min(3, "It's too short").required("Required"),
        surname: Yup.string().min(1).required("Required").required("Required"),
        email: Yup.string().email("Enter valid email").required("Required"),
        gender: Yup.string().oneOf(["male", "female"]).required("Required"),
        phoneNumber: Yup.number().typeError("Enter valid Phone Number").required("Required"),
        dateofbirth: Yup.string().typeError("Enter the date_of_birth").required("Required"),
        password: Yup.string().min(8, "Password minimum length should be 8").required("Required"), 
    })
    const onSubmit = (values, props) => {
        alert('')
        console.log(values)
        axios.post("http://dev.codebele.com:3006/adduser",{"name":values.name , "surname":values.surname , "email":values.email, "password":values.password,"phoneno":values.phoneno,"date_of_birth":values.date_of_birth, "gender":values.gender
    }).then((response)=>{
        
        toast("Wow so easy!");
        props.setSubmitting(false)
       
    })
    .catch((error)=>{
        alert(error)
        toast(error);
        props.setSubmitting(false)

    })
        // setTimeout(() => {
        //     props.resetForm()
        //     props.setSubmitting(false)
        // }, 8000)
    }


    return (
        <Grid>
            <ToastContainer/>
            <Paper style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}>
                        <AddIcon />

                    </Avatar>
                    <h2 style={headerStyle}>Sign Up</h2>
                    <Typography variant='caption' gutterBottom>Please fill this form to create an account !</Typography>
                </Grid>
                <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                    {(props) => (
                        <Form>

                            <Field as={TextField} fullWidth name="name" label='Name'
                                placeholder="Enter your name" helperText={<ErrorMessage name="name" />} />
                            <Field as={TextField} fullWidth name="surname" label='SurName'
                                placeholder="Enter your SurName" helperText={<ErrorMessage name="surname" />} />
                            <Field as={TextField} fullWidth name="email" label='Email'
                                placeholder="Enter your email" helperText={<ErrorMessage name="email" />} />
                            <FormControl component="fieldset" style={marginTop}>
                                <FormLabel component="legend">Gender</FormLabel>
                                <Field as={RadioGroup} aria-label="gender" name="gender" style={{ display: 'initial' }}>
                                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                                </Field>
                            </FormControl>
                            <FormHelperText><ErrorMessage name="gender" /></FormHelperText>
                            <Field as={TextField} fullWidth name="phoneNumber" label='Phone Number'
                                placeholder="Enter your phone number" helperText={<ErrorMessage name="phoneNumber" />} />
                            <Field as={TextField} fullWidth name="dateofbirth" label='Date_Of_Birth'
                                placeholder="Enter your date_of_birth" helperText={<ErrorMessage name="date_of_birth" />} />
                            <Field as={TextField} fullWidth name="password" type="password" label='Password'
                                placeholder="Enter your password" helperText={<ErrorMessage name="password" />} />
                            <Button type='submit' variant='contained' disabled={props.isSubmitting}
                                color='primary'>{props.isSubmitting ? "Loading" : "Sign up"}</Button>



                        </Form>
                    )}
                </Formik>
            </Paper>
        </Grid>
    )
}
export default Signup;




 







