import './App.css';
import * as React from 'react';
import { createContext, useContext, useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Home from './Pages/Home'
import LeftDrawer from './Components/Drawers/LeftDrawer'
import NavBar from './Components/NavBar/NavBar';
import WarningSnackBar from './Components/SnackBars/WarningSnackBar';
import { useAppContext } from './Contexts/AppContext';
import RegistrationForm from './Components/Forms/RegistrationForm'
import PageNotFound from './Pages/PageNotFound';




export default function App() {
	const [appContext, setAppContext] = useAppContext();

	return (
		<React.Fragment>
			<CssBaseline />
			<BrowserRouter>
				<Box sx={{ display: 'flex', overflow: 'hidden' }}>
					<Box component={'main'} sx={{ mt: 0.01, width: '100%', height: '100%' }}>
						<Routes>
							<Route path='/' exact element={<RegistrationForm />} />
							<Route path='/login' exact element={<RegistrationForm />} />
							<Route path='/home' exact element={<Home />} />
							<Route path='/new/user' exact element={<Home />} />
							<Route path='*' element={<PageNotFound />} />
						</Routes>
					</Box>
				</Box>
				<WarningSnackBar />
			</BrowserRouter>
		</React.Fragment>
	);
}
