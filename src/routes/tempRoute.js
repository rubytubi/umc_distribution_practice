// import express from 'express';

// import {tempException, tempTest} from '../controllers/temp.controller.js';

// export const tempRouter = express.Router();

// tempRouter.get('/test', tempTest);

// tempRouter.get('/exception/:flag', tempException);

import express from 'express';

import {tempException, tempTest} from '../controllers/tempController.js';

const tempRouter = express.Router();

/**
 * @swagger
 * /temp/test:
 *   get:
 *     summary: Test endpoint
 *     description: Endpoint to test functionality.
 *     responses:
 *       200:
 *         description: Test successful
 */
tempRouter.get('/test', tempTest);

/**
 * @swagger
 * /temp/exception/{flag}:
 *   get:
 *     summary: Exception endpoint
 *     description: Endpoint to handle exceptions based on flag.
 *     parameters:
 *       - in: path
 *         name: flag
 *         required: true
 *         schema:
 *           type: string
 *         description: Flag parameter to indicate exception handling.
 *     responses:
 *       200:
 *         description: Exception handled successfully
 *       400:
 *         description: Invalid flag provided
 */
tempRouter.get('/exception/:flag', tempException);

export {tempRouter};
