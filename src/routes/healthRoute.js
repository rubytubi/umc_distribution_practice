import express from 'express';

import {healthController} from '../controllers/healthController';

export const healthRoute = express.Router();

healthRoute.get('', healthController);