import express from 'express';
import images from '../../db/images.json';

const dogsRouter = express.Router();

const shuffleArr = arr => arr.map(a => [Math.random(), a])
                             .sort((a, b) => a[0] - b[0])
                             .map(a => a[1]);

// Usage: /dogs?breed=shiba&n=5
dogsRouter.get('/', (req, res) => {
    const num = parseInt(req.query.n);
    const breed = req.query.breed;
    const shfDogImgs = shuffleArr(images.dogs[breed]);
    res.json({message: shfDogImgs.slice(0, num), status: 'success'});
})

// Usage: /dogs/random?n=5
dogsRouter.get('/random', (req, res) => {
    const num = parseInt(req.query.n);
    const dogsArr = [].concat(...Object.values(images.dogs));
    const shfDogImgs = shuffleArr(dogsArr);
    res.json({message: shfDogImgs.slice(0, num), status: 'success'});
});

export default dogsRouter;
