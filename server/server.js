import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import path from 'path';
import dotenv from 'dotenv';
// import { ChatGPTAPI } from 'chatgpt';
import { Configuration, OpenAIApi } from 'openai';
import axios from 'axios';

dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

const configuration = new Configuration({
	apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

// const api = new ChatGPTAPI({
// 	apiKey: process.env.OPENAI_API_KEY,
// });

let conversations = [];
// app.post('/api/v1/chat', async (req, res) => {
// 	const { message, userId } = req.body;

// 	const user = conversations[userId];

// 	const conversationId = user?.conversationId;
// 	const parentMessageId = user?.parentMessageId;

// 	console.log(message, userId, conversationId, parentMessageId);

// 	const response = await api.sendMessage(message, {
// 		promptPrefix: 'using a-frame',
// 		promptSuffix: 'give me only code and a inside of a-scene element',
// 		conversationId,
// 		parentMessageId,
// 	});

// 	// add user to conversations if not already there
// 	if (!conversations[userId]) {
// 		conversations[userId] = {
// 			conversationId: response.conversationId,
// 			parentMessageId: response.parentMessageId,
// 		};
// 	}

// 	res.json({
// 		scene: response.text,
// 	});
// });

app.post('/api/v1/dall-e', async (req, res) => {
	const { message, userId } = req.body;

	try {
		const apiResult = await openai
			.createImage({
				prompt: message,
				n: 2,
				size: '512x512',
			})
			.then((response) => {
				return response.data.data;
			});

		// get base64 encoded images from urls in apiResult
		const images = await Promise.all(
			apiResult.map(async (img) => {
				const base64 = await getBase64(img.url);
				return `data:image/png;base64,${base64}`;
			})
		);

		res.status(200).json({
			images,
		});
	} catch (e) {
		res.status(400).json({
			error: e,
		});
	}
});

const port = process.env.PORT || 5000;

if (process.env.NODE_ENV === 'production') {
	console.log('production mode');
	app.use(express.static('../client/build'));

	app.get('*', (req, res) => {
		res.sendFile(path.resolve(path.dirname(''), 'client', 'build', 'index.html'));
	});
}

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`);
});

async function getBase64(url) {
	return await axios
		.get(url, {
			responseType: 'arraybuffer',
		})
		.then((response) => Buffer.from(response.data, 'binary').toString('base64'));
}
