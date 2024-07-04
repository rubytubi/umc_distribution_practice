import express from 'express';
import expressAsyncHandler from 'express-async-handler';

import {addStoreMission} from '../controllers/missionController.js';

export const missionRouter = express.Router();

missionRouter.post('/addMission', expressAsyncHandler(addStoreMission));