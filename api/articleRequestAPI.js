'use strict';

import express from 'express';
import bookingRequestController from '../controllers/articleRequestController';

const articleRequestAPI = express.Router();

articleRequestAPI.route('/')
    .get(bookingRequestController.getAllArticle);

export default articleRequestAPI;
