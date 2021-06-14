import '@babel/polyfill';
import dotenv from 'dotenv';
import express from 'express';

import rncsRoute from './routes/rncs.route';

const app = express();
dotenv.config();

const port = process.env.PORT || 3000;

//Routes
app.use('/rncs', rncsRoute);

app.listen(
	port, 
	console.log(`Server running on port ${port}`)
)