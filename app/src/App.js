import * as React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { createContext, useContext, useState, useEffect } from 'react';
import NavBar from './Components/NavBar/NavBar';
import Box from '@mui/material/Box';
import { appContext, useAppContext } from './AppContext'
import CssBaseline from '@mui/material/CssBaseline';
import Home from './Pages/Home'
import LeftDrawer from './Components/Drawers/LeftDrawer'



export default function App() {

	return (
		<React.Fragment>
			<CssBaseline />
			{/* <NavBar /> */}
			<LeftDrawer />
			<Router>
				<Box sx={{ display: 'flex', overflow: 'hidden' }}>
					<Box component={'main'} sx={{ mt: 0.01, width: '100%', height: '100%' }}>
						<Routes>
							<Route path='/' exact element={<Home />} />
						</Routes>
					</Box>
				</Box>
			</Router>
		</React.Fragment>
	);
}
