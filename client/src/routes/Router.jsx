import { BrowserRouter as Router, Route, Switch, Navigate, Routes } from 'react-router-dom';
import React, { useEffect, lazy } from 'react';

const AR = lazy(() => import('../pages/DallE'));
const LocationBasedAR = lazy(() => import('../pages/LocationBased'));

const AppStack = ({}) => {
	return (
		<Routes>
			<Route path='/chat' element={<AR />} />
			<Route path='/location-based-chat' element={<LocationBasedAR />} />{' '}
			<Route path='*' element={<div> no match</div>} />
		</Routes>
	);
};

export default AppStack;
