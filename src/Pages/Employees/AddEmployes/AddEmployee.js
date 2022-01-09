import { Button, TextField, Typography } from '@mui/material';
import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";

const AddEmployee = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = employeeData => {

        axios.post('http://localhost:3006/employee/addEmployee', employeeData)
            .then(res => {
                console.log(res)
                if (res.request.status === 200) {
                    alert(`${employeeData.firstName} has aded as an Employee`)
                    reset();
                }
                else {
                    alert('Somethin went wrong')
                }
            });
    };
    return (
        <div>
            <Typography
                variant='h4'
                sx={{ my: 2, color: '#1976D2' }}
            >Add an Employee</Typography>
            <form onSubmit={handleSubmit(onSubmit)}>
                <TextField
                    label="Firs Name"
                    variant="outlined"
                    required
                    {...register("firstName")} />
                <br />
                <br />
                <TextField
                    label="Last Name"
                    variant="outlined"
                    required
                    {...register("lastName")} />
                <br />
                <br />
                <TextField
                    label="Email"
                    type="email"
                    variant="outlined"
                    required
                    {...register("email")} />
                <br />
                <br />
                <Button
                    type='submit'
                    variant='contained'
                >Submit</Button>
            </form>
        </div>
    );
};

export default AddEmployee;