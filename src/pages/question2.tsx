import { Container, Grid, ListItemButton, ListItemText, Typography,Button } from '@material-ui/core';
import React from 'react';
import Link from 'next/link';
import axios from 'axios'
import useSWR from 'swr'

const fetcher=(url)=>fetch(url).then((res)=>res.json())

export default function Question2() {
	//Really new to nextJS API calls and typescript, tried my best to get the results.
	const getName=(arg)=>{
		/* let query={}
		let id= arg['id']
		let name=arg['name']
		query[id]=name */
		console.log(arg)
		/* console.log(query['id']) */
		const {data,error}=useSWR(`/api/${arg}`,fetcher)
		try {

			if (error) return <div>Failed to load</div>
			if (!data) return <div>Loading...</div>
			console.log(data)
		
		} catch (error) {
			console.log('something went wrong')
		}
	

	}

	return(
	<>
	<Container sx={{ pt: 2 }}>
		<Grid>
			<Link href='/question1' passHref>
				<ListItemButton component='a'>
					<ListItemText>Go to Question 1</ListItemText>
				</ListItemButton>
			</Link>
			<Link href='/question3' passHref>
				<ListItemButton component='a'>
					<ListItemText>Go to Question 3</ListItemText>
				</ListItemButton>
			</Link>
		</Grid>
		<Typography variant='h5'>Question 2</Typography>
		<Typography>
			Create an api function in NextJS that takes an object with this type {'{id: string, name: test}'}[]
			and converts it to {'{id: name}'}
		</Typography>
		<Typography>
			Perform error handling so that any object without that shape will throw an error.
		</Typography>
		<Typography>
			Call the function from a button press
		</Typography>
		<Typography>
			You can use any library for this
		</Typography>
	</Container>
	
	<Button onClick={getName('test')}>Press me</Button>
	
	</>
	
	);
}
