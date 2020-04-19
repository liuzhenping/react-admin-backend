'use strict';

import article from "../mongodb/models/article";

const articleRequestController = {
    getAllArticle: async (req, res, next) => {
        try {
            const result = await article.find({});
            res.status(200).json({
                message: 'All Articles are fetched',
                result: result,
            });
        } catch (err) {
            console.log(err);
            res.status(500).json({
                error: err,
            });
        }
    },
    saveArticle: async (req, res, next) => {
        try {
            const articleDoc = new article({
                title: req.body.title,
                content: req.body.content
            });
            const dbResult = await articleDoc.save();
            res.status(201).json({
                message: 'Article is created successfully',
                dbResult
            });
        } catch (err) {
            console.log(err);
            res.status(500).json({
                error: err,
            });
        }
    }
};

export default articleRequestController;
