import React from 'react'
import{Routes, Route}from 'react-router-dom'
import Kontak from './pages/Kontak';
import Home from './pages/Home';

const App = () => {
	return (
		<div className="max-w-7xl mx-auto">
			<Routes>
				<Route path='/' element={<Home />}></Route>
				<Route path='/kontak' element={<Kontak />}></Route>
			</Routes>
		</div>
	);
}

export default App
