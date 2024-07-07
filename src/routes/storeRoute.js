import express from 'express';
import expressAsyncHandler from 'express-async-handler';

import {addStoreReview, storeAdd} from '../controllers/storeController.js';

export const storeRouter = express.Router();

storeRouter.post('/addStore', expressAsyncHandler(storeAdd));
storeRouter.post('/addReview', expressAsyncHandler(addStoreReview));