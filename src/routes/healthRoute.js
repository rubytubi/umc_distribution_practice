import express from 'express';

import {healthController} from '../controllers/healthController.js';

export const healthRoute = express.Router();

healthRoute.get('', healthController);