import React, { useState, useEffect, useMemo } from 'react';
import {
	Box,
	Scene,
	Sphere,
	Text,
	Plane,
	Sky,
	Cylinder,
	Entity,
	MarkerCamera,
	Camera,
	Cursor,
	Marker,
} from 'react-aframe-ar';
import 'aframe-orbit-controls';

const SceneWithAR = ({ images }) => {
	console.log(images);
	return (
		<Scene
			vr-mode-ui='enabled;false;'
			renderer='antialias: true;physicallyCorrectLights: true;logarithmicDepthBuffer:true;'
		>
			<a-entity orbit-controls='target:0 0 -14; minDistance: 0.5; maxDistance: 180;'></a-entity>

			<Plane
				src={images[0]}
				position='0 0 -14'
				rotation='0 30 0'
				width='6'
				height='6'
				shadow
				material='side: double'
			/>
		</Scene>
	);
};

export default SceneWithAR;
