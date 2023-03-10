import React, { useState, useEffect, useRef } from 'react';
// import {
// 	Box,
// 	Scene,
// 	Sphere,
// 	Text,
// 	Plane,
// 	Sky,
// 	Cylinder,
// 	Entity,
// 	MarkerCamera,
// 	Camera,
// 	Cursor,
// 	Marker,
// } from 'react-aframe-ar';
import 'aframe-orbit-controls';

const SceneWithAR = ({ images }) => {
	const canvasRef = useRef(null);
	const [currentPosition, setCurrentPosition] = useState({});

	function getCurrentLocation() {
		// first get current user location
		navigator.geolocation.getCurrentPosition(
			async (position) => {
				setCurrentPosition({
					lat: position.coords.latitude,
					lng: position.coords.longitude,
				});

				console.log(position.coords.latitude, position.coords.longitude);
			},
			(error) => {
				console.log(error);
			},
			{ enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
		);
	}

	useEffect(() => {
		getCurrentLocation();
	}, []);

	return (
		<a-scene
			vr-mode-ui='enabled: false'
			arjs='sourceType: webcam; videoTexture: true; debugUIEnabled: false'
			renderer='antialias: true; alpha: true'
		>
			<a-camera gps-new-camera='gpsMinDistance: 5'></a-camera>

			<a-plane
				position='0 0 -1'
				rotation='0 90 0'
				width='15'
				height='15'
				material='side: double'
				src={images[0]}
				gps-new-entity-place={`latitude: ${currentPosition.lat}; longitude: ${currentPosition.lng}`}
			></a-plane>
		</a-scene>
	);
};

export default SceneWithAR;
