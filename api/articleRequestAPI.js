'use strict';

import express from 'express';
import articleRequestController from '../controllers/articleRequestController';

const articleRequestAPI = express.Router();

articleRequestAPI.route('/')
    .get(articleRequestController.getAllArticle)
    .post(articleRequestController.saveArticle);


export default articleRequestAPI;
