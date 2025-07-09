import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';

//components
import Connection from './database/db.js';
import Router from './routes/route.js';


dotenv.config();

const app = express();

app.use(cors({
    origin: true
}));
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', Router);

app.get('/', (req, res) => {
    res.send('API is Running');
})

const PORT=8000;
const MONGODB_URI = process.env.MONGODB_URI;

Connection(MONGODB_URI);

app.listen(PORT, () => console.log(`Server is running successfully on PORT ${PORT}`));