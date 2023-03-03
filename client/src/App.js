import React, { Suspense } from 'react';
import Routes from './routes/Router';
import { BrowserRouter as Router } from 'react-router-dom';
export default function App() {
	return (
		<Router>
			<Suspense fallback={<div>Loading...</div>}>
				<Routes />
			</Suspense>
		</Router>
	);
}
