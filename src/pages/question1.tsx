import { Container, Divider, List, ListItem, ListItemButton, ListItemText, Typography, Grid,Switch} from '@material-ui/core';
import React from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

import Link from 'next/link';
import { useFormik } from 'formik';
import {useState} from 'react'
import * as yup from 'yup';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';


export default function Question1() {
	//declaring the toggle state
	const [toggle,setToggle] =useState(false)
	//defining few validationSchema with the help of yup
	const validationSchema = yup.object({
		name: yup
		  .string('Enter your name')
		  .required('Name is required'),
		date:yup
		  .string('Enter your date')
		  .required('Date is required'),
		age:yup
		  .string('Enter your Age')
		  .required('Age is required'),
		
	  });
	  //Declaring formik intial values and sending an alert when form is submitted
	  const formik = useFormik({
		  initialValues: {
			name: 'sammy',
			date: '03/06/1996',
			age:'25'
		  },
		  validationSchema: validationSchema,
		  onSubmit: (values) => {
			alert(JSON.stringify(values, null, 2));
		  },
		});
	
	

	return <Container sx={{ pt: 2 }}>
		<Grid>
			<Link href='/' passHref>
				<ListItemButton component='a'>
					<ListItemText>Back to Home</ListItemText>
				</ListItemButton>
			</Link>
			<Link href='/question2' passHref>
				<ListItemButton component='a'>
					<ListItemText>Go to Question 2</ListItemText>
				</ListItemButton>
			</Link>
		</Grid>

		<Typography variant='h5'>Question 1</Typography>
		<Typography>Design a form with Formik and Material UI</Typography>
		<Typography>Contains the following items: </Typography>
		<List>
			<ListItem>
				<ListItemText>Name</ListItemText>
			</ListItem>
			<Divider />
			<ListItem>
				<ListItemText>Date (datetime)</ListItemText>
			</ListItem>
			<Divider />
			<ListItem>
				<ListItemText>Active (boolean switch)</ListItemText>
			</ListItem>
			<Divider />
			<ListItem>
				<ListItemText>Age (select from 1 to 70)</ListItemText>
			</ListItem>
		</List>
		{/* defining all the UI for the form */}
		<form onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          id="name"
          name="name"
          label="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
        />
		
		 <TextField
          fullWidth
          id="date"
		  type="date"
		  name="date"
          label="Bithday"
          value={formik.values.date}
          onChange={formik.handleChange}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
        />
		<FormControl component="fieldset">
		<FormGroup aria-label="position" row>
			<FormControlLabel
			value={toggle}
			onChange={(e)=>setToggle(!toggle)}
			control={<Switch color="primary" />}
			label={toggle?<h2>On</h2>:<h2>Off</h2>}
			labelPlacement="top"
			/>
			</FormGroup>
			<TextField
			name="age"
			label="Age"
			type="number"
			InputProps={{ inputProps: { min: 1, max: 70 } }}
			onChange={formik.handleChange}
			error={formik.touched.age && Boolean(formik.errors.age)}
			helperText={formik.touched.age && formik.errors.age}
		/>
		</FormControl>
			<Button color="primary" variant="contained" fullWidth type="submit">
			Submit
			</Button>
			</form>
		</Container>;
}
