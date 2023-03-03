import React, { Suspense } from 'react';
import Routes from './routes/Router';
import { BrowserRouter as Router } from 'react-router-dom';
import LocationBased from './pages/LocationBased';

export default function App() {
	return <LocationBased />;
}
