import express from 'express';
import cors from 'cors';
import dogsRouter from './router/dogs.js';

const app = express();
const port = 3000;

app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.use('/dogs', dogsRouter);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
