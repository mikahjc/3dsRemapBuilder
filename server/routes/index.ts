import express from 'express';

export const IndexRouter = express.Router();
IndexRouter.get('/test', (req, res) => {
   res.send('working');
});
