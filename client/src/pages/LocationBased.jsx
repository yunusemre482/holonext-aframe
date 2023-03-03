import React, { useEffect, useCallback, useState } from 'react';
import 'regenerator-runtime';
import { createSpeechlySpeechRecognition } from '@speechly/speech-recognition-polyfill';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import axios from 'axios';
import { Microphone, MicrophoneOff, Trash } from 'tabler-icons-react';
import Scene from '../components/SceneWithArLocationBased';
import LoadingScreen from '../components/LoadingScreen';
const appId = '01403d73-5ac1-47b5-a2aa-2059ec480d13';
const SpeechlySpeechRecognition = createSpeechlySpeechRecognition(appId);
SpeechRecognition.applyPolyfill(SpeechlySpeechRecognition);

const LocationBased = () => {
	const [isLoading, setIsLoading] = useState(false);
	const {
		transcript,
		listening,
		resetTranscript,
		browserSupportsSpeechRecognition,
		finalTranscript,
	} = useSpeechRecognition();
	const handleListen = () => {
		if (listening) {
			SpeechRecognition.stopListening();
		} else {
			SpeechRecognition.startListening({ continuous: true });
		}
	};

	const [apiAnswer, setApiAnswer] = useState([
		'https://images.unsplash.com/photo-1677594066467-51aedaa69455?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
		'https://holonext.io/public/images/holonextlogo.jpg',
	]);
	const handleSubmit = async (question) => {
		setIsLoading(true);
		await axios
			.post('https://holonext-aframe.onrender.com/api/v1/dall-e', {
				message: question,
				userId: 1,
			})
			.then((res) => {
				setApiAnswer(res.data.images);
				setIsLoading(false);
			});

		resetTranscript();
	};

	const defaultCommands = [
		'cars and trucks and airplanes war with cats',
		'red bear walking on the moon',
		'dogs fighting in the sky with swords',
	];

	if (typeof window !== 'undefined' && !browserSupportsSpeechRecognition) {
		return <span>Browser doesn't support speech recognition.</span>;
	}

	return (
		<div className='w-full h-full flex  flex-col lg:flex-row overflow-auto'>
			<Scene images={apiAnswer} />
			<div className='z-10 flex flex-col items-center justify-center bg-[rgba(102,138,255,0.5)]  mx-auto gap-4 w-full lg:w-[clamp(200px,50%,800px)] p-5'>
				<ul className=' w-full flex items-center lg:py-10  gap-2 flex flex-col hidden lg:flex '>
					<span className='text-lg mb-2 w-full'>Example Commands:</span>

					{defaultCommands.map((command, index) => (
						<li
							key={index}
							onClick={() => handleSubmit(command)}
							className='bg-blue-400 text-yellow-100 p-2 rounded-lg cursor-pointer  flex w-[45%] hover:bg-blue-700 lg:w-full'
						>
							{command}
						</li>
					))}
				</ul>
				<div className='flex flex-col items-center lg:w-full'>
					<div className='flex items-center relative flex-col  w-full lg:w-full '>
						<span className='text-lg mb-2 w-full '>Speak into the microphone:</span>
						<textarea
							defaultValue={transcript}
							onChange={(e) => {}}
							disabled
							id='speech-input'
							className='w-full  h-20 lg:h-64 rounded-lg border-gray-400 border-2 px-4 py-2 mb-4 disabled:bg-white'
						></textarea>
						<button
							className='absolute top-12 right-8   bg-teal-600 p-2 rounded-md '
							onClick={resetTranscript}
						>
							<Trash size={20} color={'#ffffff'} />
						</button>
					</div>

					<div className='flex  justify-end items-center  gap-5 w-full lg:w-full flex-row'>
						<button
							onClick={handleListen}
							id='start-recognition'
							className='flex-1 bg-blue-700 hover:bg-blue-800 text-white font-bold p-2 px-6  rounded flex flex-row items-center justify-center cursor-pointer gap-4'
						>
							{listening ? (
								<MicrophoneOff size={20} strokeWidth={2} color={'#f5f5f5'} />
							) : (
								<Microphone size={20} strokeWidth={2} color={'#f5f5f5'} />
							)}

							{listening ? 'Stop Listening' : 'Start Listening'}
						</button>
						<button
							onClick={() => handleSubmit(finalTranscript)}
							id='start-recognition'
							className='flex-1 bg-slate-500 hover:bg-slate-700 text-white font-bold py-2 px-6 rounded cursor-pointer'
						>
							Submit Transcript
						</button>
					</div>
				</div>
			</div>
			<LoadingScreen isLoading={isLoading} />
		</div>
	);
};

export default LocationBased;
