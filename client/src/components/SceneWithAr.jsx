import React, { useState, useEffect, useMemo } from 'react';

const SceneWithAR = ({ images }) => {
	console.log(images);
	return (
		<a-scene
			vr-mode-ui='enabled;false;'
			renderer='antialias: true;physicallyCorrectLights: true;logarithmicDepthBuffer:true;'
		>
			<a-entity orbit-controls='target:0 0 -14; minDistance: 0.5; maxDistance: 180;'></a-entity>

			<a-plane
				src={images[0]}
				position='0 0 -14'
				rotation='0 30 0'
				width='6'
				height='6'
				shadow
				material='side: double'
			/>
		</a-scene>
	);
};

export default SceneWithAR;
