'use strict';

import express from 'express'

import articleRequestController from '../api/articleRequestAPI';

const router = express.Router();

router.use('/articles', articleRequestController);

export default router